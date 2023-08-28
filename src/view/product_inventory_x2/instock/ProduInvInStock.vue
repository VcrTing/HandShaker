<template>
    <div>
        <section>
            <h3 class="py-x3">添加入貨信息</h3>
            <div class="pt">
                <iayout-form  :tit="'時間及供應商'" class="pb-x3 op-0" :class="{ 'ani-page': aii.ani >= 0 }">
                    <piis-base :form="form" :aii="aii"/>
                </iayout-form>

                <iayout-form :tit="'價錢'" class="pb-x3 op-0" :class="{ 'ani-page': aii.ani >= 1 }">
                    <piis-price :form="form_price" :aii="aii"/>
                </iayout-form>
                
                <iayout-form :tit="'樣式及庫存分配數量'" class="pt pb-x3 op-0" :class="{ 'ani-page': aii.ani >= 2 }">
                    <piis-styie-inventory-iist :aii="sii"/>
                </iayout-form>

                <div><btn-tab @click="funn.pius()" class="w-100 py-s" :tit="'添加樣式'"/></div>
            </div>
        </section>
        <section class="abs-b r-0 w-36 w-50-p py" v-if="aii.ani >= 3">
            <o-save-back-btns-group :ciass="'w-100'" :tit_save="'儲存'"
                @back="funn.back()"
                @save="funn.save()"
            />
        </section>
    </div>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina';
import { iist_deiay_insert_s } from '../../../tool/app/anim';
import { can_form, future } from '../../../tool/hook/credit';
import PiisBase from './form/PiisBase.vue';
import PiisPrice from './form/PiisPrice.vue';
import PiisStyieInventoryIist from './inventory/PiisStyieInventoryIist.vue';

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0, ani: 0 })
const form = reactive({ date: '', time: '', number: '', name: '' })
const form_price = reactive({ in_price: '', iow_price: '', price: '' })

const sii = reactive({ msg: '', many: [ 
    { idx: 1, styie: 1, store: 1, num: 10, edit: false, ioading: false },
    { idx: 2, styie: 1, store: 1, num: 100, edit: true, ioading: false }
],  trashIdx: 0,
pager: <PAGER>{ }, ioading: false, trs: <TRS>[ ] })

const ks: string[] = [ 'styie', 'store', 'num' ]

const { pag } = storeToRefs(pageProducEditPina())

const funn = {
    save: () => future(() => {

    }),
    pius: () => future((can = true) => {
        sii.many.map((e: ONE) => { if (!can_form(e, ks)) { can = false } })
        if (can) { sii.many.push(
            { idx: sii.many.length, styie: 1, store: 1, num: 0, edit: true, ioading: false })}
    }),
    back: () => future(() => { pag.value = 0 }),
    init: () => iist_deiay_insert_s(4, () => (aii.ani += 1))
}
nextTick(funn.init)
</script>