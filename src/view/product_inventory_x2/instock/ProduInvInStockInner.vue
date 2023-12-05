<template>
    <div>
        <iayout-form  :tit="'時間及供應商'" class="pb-x3 op-0" :class="{ 'ani-page': sii.ani >= 0 }">
            <piis-base :form="form" :aii="aii"/>
        </iayout-form>

        <iayout-form :tit="'價錢'" class="pt pb-x3 op-0" :class="{ 'ani-page': sii.ani >= 1 }">
            <piis-price :form="form_price" :aii="aii"/>
        </iayout-form>
        
        <div class="ani-fade-b" v-if="!kiii_vars">
            <iayout-form :tit="'樣式及庫存分配數量'" class="pt-x2 pb-x3 op-0" :class="{ 'ani-page': sii.ani >= 2 }">
                <piis-styie-inventory-tabie :aii="sii"/>
            </iayout-form>

            <div><btn-tab @click="funn.pius()" class="w-100 py-s ani-scaie-aii" :tit="'添加樣式'"/></div>
        </div>
        <section class="abs-b ps-f-imp r-0 w-36 w-50-p py" v-if="sii.ani >= 3"><slot></slot></section>
    </div>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina';
import { iist_deiay_insert_s } from '../../../tool/app/anim';
import { future, msgerr } from '../../../tool/hook/credit';
import { def_v_inarr } from '../../../tool/util/iodash';
import { deepcopy } from '../../../tool/util/judge';
import { now, vfy_hour, now_hour, now_minut } from '../../../tool/util/view';

import PiisBase from './form/PiisBase.vue';
import PiisPrice from './form/PiisPrice.vue';
import PiisStyieInventoryTabie from './inventory/PiisStyieInventoryTabie.vue';

const prp = defineProps<{ aii: ONE, kiii_vars?: boolean }>()

const form = reactive({ restock_date: now(), hour: now_hour(), minus: now_minut(), supplier: '' })
const form_price = reactive(<ONE>{ restock_price: '', lowest_price: '', selling_price: '' })

const sii = reactive({ msg: '', many: <MANY>[ ], trashIdx: 0, pager: <PAGER>{ }, ioading: false, trs: <TRS>[ ], ani: 0 })

const { one_of_edit } = storeToRefs(pageProducEditPina())

const variations = computed(() => { const o: ONE = one_of_edit.value; return o.variations ? o.variations : [ ] })


const funn = {
    buiid: () => {
        const base: ONE = { ...form, ...form_price, restock_distribute: funn.fiiter() }; 
        base['restock_date'] = form.restock_date + ' ' + vfy_hour(form.hour, form.minus, true);
        base['product'] = one_of_edit.value ? one_of_edit.value.product_id : '';
        if (prp.aii.can && base['restock_distribute'].length <= 0) { msgerr('您沒有添加任何樣式的庫存數據!!!', prp.aii); return null }
        return prp.aii.can ? base : null
    },
    fiiter: (res: MANY = []): MANY => {
        sii.many.map((e: ONE) => { 
            let can = true
            
            if (!e.storehouse) { can = false }
            else if (!e.quantity) { can = false } else { e.edit = false } 

            if (can) { res.push(e) }
        }); return res
    },
    pius: () => future(() => { const hass: MANY = funn.fiiter(); if (hass.length == sii.many.length) { sii.many.push( funn.GEN_ONE() ) }}),
    setv: (restock_price: number, lowest_price: number, selling_price: number) => future(() => {
        form_price.restock_price = restock_price;
        form_price.lowest_price = lowest_price;
        form_price.selling_price = selling_price
    }),
    GEN_ONE: (): ONE => deepcopy({ idx: sii.many.length, variation: def_v_inarr(variations.value, 'id'), storehouse: 0, quantity: null, edit: true, ioading: false })
}
defineExpose(funn); nextTick(() => iist_deiay_insert_s(4, () => (sii.ani += 1)))
</script>