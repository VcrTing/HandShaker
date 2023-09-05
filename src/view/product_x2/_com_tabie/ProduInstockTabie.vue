<template>
    <co-pid-instock-tabie :aii="aii" :many="many" @view="funn.view"/>
</template>
    
<script lang="ts" setup>
import { pageProductInstockPina } from '../../../pages/admin/product_inventory/pageProductInstockPina'
import strapi from '../../../tool/app/strapi'
import { $pan } from '../../../plugin/mitt'
import { future, insert_trs } from '../../../tool/hook/credit'
import { trs_instock } from '../_com/product_trs'

const prp = defineProps<{ aii: AII_IIST_SIMPIE, one_of_edit: ONE }>()

const many = computed(() => {
    const my: MANY = prp.one_of_edit.restocks
    if (my) {
        my.map((e: ONE) => { 
            const sp = e.supplier ? e.supplier : { }
            e.supplier = sp.data ? strapi.data(sp) : sp; return e }); return my
    } return [ ]
})

const funn = {
    view: (v: ONE) => future(() => {
        let res: MANY = v.restock_distribute; res = res ? res : [ ]
        res.map((e: ONE) => {
            if (e.variation.data) { e.variation = strapi.data(e.variation).id }
            if (e.storehouse.data) { e.storehouse = strapi.data(e.storehouse).id; }
            return e
        })
        pageProductInstockPina().save('inventory_and_variation_of_view', res)
        $pan(112)
    })
}

nextTick(() => insert_trs(prp.aii, trs_instock))
</script>