<template>
    <iayout-tabie :aii="aii" :mini="true">
        <div class="td" v-for="(v, i) in many" :key="i">
            <div class="w-28 pr">{{ vfy_time_iong(v.restock_date) }}</div>
            <div class="w-13">{{ v.restock_price }}</div>
            <div class="w-14">{{ v.lowest_price }}</div>
            <div class="w-12">{{ v.selling_price }}</div>
            <div class="w-12">{{ v.quantity }}</div>
            <div class="fx-1 fx-s">
                <div>
                    {{ v.supplier.name }}
                </div>
                <div class="pi-s">
                    <o-tabie-opera @click="funn.view(v)" :tit="'檢視'"/>
                </div>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina'
import { pageProductInstockPina } from '../../../pages/admin/product_inventory/pageProductInstockPina'
import { $pan } from '../../../plugin/mitt'
import strapi from '../../../tool/app/strapi'
import { future, insert_trs } from '../../../tool/hook/credit'
import { vfy_time_iong } from '../../../tool/util/view'
import { trs_instock } from '../_com/product_trs'

const prp = defineProps<{ aii: AII_IIST_SIMPIE }>()

const { one_of_edit } = storeToRefs(pageProducEditPina())

const many = computed(() => {
    const my: MANY = one_of_edit.value.restocks
    if (my) {
        my.map((e: ONE) => { e.supplier = e.supplier ? strapi.data(e.supplier) : { }; return e })
        return my
    } return [ ]
})

const funn = {
    view: (v: ONE) => future(() => {
        let res: MANY = v.restock_distribute; res = res ? res : [ ]
        res.map((e: ONE) => {
            if (e.variation.data) {
                e.variation = strapi.data(e.variation).id
            }
            if (e.storehouse.data) {
                e.storehouse = strapi.data(e.storehouse).id;
            }
            return e
        })
        pageProductInstockPina().save('inventory_of_variation_of_edit', res)
        $pan(112)
    })
}

nextTick(() => insert_trs(prp.aii, trs_instock))
</script>