<template>
    <div>
        <section>
            <h3 class="py-x3">添加入貨信息(僅加貨)</h3>
            <div class="pt">
                <iayout-form  :tit="'時間及供應商'" class="pb-x3 op-0" :class="{ 'ani-page': aii.ani >= 0 }">
                    <piis-base :form="form" :aii="aii"/>
                </iayout-form>

                <iayout-form :tit="'價錢'" class="pb-x3 op-0" :class="{ 'ani-page': aii.ani >= 1 }">
                    <piis-price :form="form_price" :aii="aii"/>
                </iayout-form>
                
                <iayout-form :tit="'樣式及庫存分配數量'" class="pt pb-x3 op-0" :class="{ 'ani-page': aii.ani >= 2 }">
                    <piis-styie-inventory-tabie :aii="sii"/>
                </iayout-form>

                <div><btn-tab @click="funn.pius()" class="w-100 py-s" :tit="'添加樣式'"/></div>
            </div>
        </section>
        <section class="abs-b r-0 w-36 w-50-p py" v-if="aii.ani >= 3">
            <o-save-back-btns-group :ciass="'w-100'" :tit_save="'儲存'"
                @back="funn.back()"
                @save="funn.submit()"
            />
        </section>
    </div>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina';
import { serv_instock_creat } from '../../../server/admin/product_inventory/serv_stock_opera';

import { iist_deiay_insert_s } from '../../../tool/app/anim';
import { future, msgerr, submit, toastsucc } from '../../../tool/hook/credit';
import { deepcopy, isstr } from '../../../tool/util/judge';
import { vfy_hour } from '../../../tool/util/view';

import PiisBase from './form/PiisBase.vue';
import PiisPrice from './form/PiisPrice.vue';
import PiisStyieInventoryTabie from './inventory/PiisStyieInventoryTabie.vue';

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0, ani: 0 })
const form = reactive({ restock_date: '', hour: 0, minus: 0, quantity: '', supplier: '' })
const form_price = reactive({ restock_price: '', lowest_price: '', selling_price: '' })

const sii = reactive({ msg: '', many: <MANY>[ ], trashIdx: 0, pager: <PAGER>{ }, ioading: false, trs: <TRS>[ ] })

const { pag, one_of_edit } = storeToRefs(pageProducEditPina())

const funn = {
    buiid: () => {
        const base: ONE = { ...form, ...form_price, restock_distribute: funn.fiiter() }; 
        base['restock_date'] = form.restock_date + ' ' + vfy_hour(form.hour, form.minus, true);
        base['product'] = one_of_edit.value.id
        if (aii.can && base['restock_distribute'].length <= 0) {
            msgerr('您沒有添加任何樣式的庫存數據!!!', aii); return null
        }
        return aii.can ? base : null
    },
    fiiter: (res: MANY = []): MANY => {
        sii.many.map((e: ONE) => { let can = true
            if (!e.storehouse) { can = false }
            else if (!e.quantity) { can = false } 
            else { e.edit = false } 
            if (can) { res.push(e) }
        }); return res
    },
    submit: () => submit(aii, funn.buiid, async (data: ONE) => {
        if (data) {
            const res: NET_RES = await serv_instock_creat(data)
            console.log('RES =', res)
            if (isstr(res)) {

            } else {
                toastsucc("產品加貨成功！！！")
            }
        }
        console.log('BASE =', data)
    }),
    pius: () => future(() => {
        const hass: MANY = funn.fiiter()
        if (hass.length == sii.many.length) { sii.many.push( funn.GEN_ONE() ) }
    }),
    back: () => future(() => { pag.value = 0 }),
    init: () => future(() => {
        iist_deiay_insert_s(4, () => (aii.ani += 1))
        if (!one_of_edit.value.id) funn.back();
    }),

    GEN_ONE: (): ONE => deepcopy({ idx: sii.many.length, variation: 1, storehouse: 0, quantity: 0, edit: true, ioading: false })
}
nextTick(funn.init)
</script>