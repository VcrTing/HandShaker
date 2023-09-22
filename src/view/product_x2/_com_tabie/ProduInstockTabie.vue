<template>
    <div>
        <co-pid-instock-tabie @view="funn.view" :aii="aii" :many="many" :kiii_option="kiii_option"/>
        <!--
        <div class="fx-c pt-x3 pb">
            <btn-tab @click="funn.instock" :tit="'添加入貨信息'"/>
        </div>
        -->
    </div>
</template>
    
<script lang="ts" setup>
import { pageProductInstockPina } from '../../../pages/admin/product_inventory/pageProductInstockPina'
import { $pan } from '../../../plugin/mitt/index'

import strapi from '../../../tool/app/strapi'
import { future, insert_trs } from '../../../tool/hook/credit'
import { trs_instock } from '../_com/product_trs'

const prp = defineProps<{ aii: AII_IIST_SIMPIE, one_of_edit: ONE, kiii_option?: boolean }>()

const many = computed(() => {
    const my: MANY = prp.one_of_edit.restocks
    if (my) {
        my.map((e: ONE) => { e.supplier = e.supplier ? strapi.data(e.supplier) : { }; return e }); 
        return my
    } return [ ]
})
nextTick(() => insert_trs(prp.aii, trs_instock))

const funn = {
    instock: () => future(() => {

    }),
    view: (v: ONE) => future(() => {
        let res: MANY = v.restock_distribute; res = res ? res : [ ]
        res.map((e: ONE) => {
            if (e.variation && e.variation.data) { e.variation = strapi.data(e.variation).id }
            if (e.storehouse && e.storehouse.data) { e.storehouse = strapi.data(e.storehouse).id; }
            return e
        })
        pageProductInstockPina().save('inventory_and_variation_of_view', res)
        $pan(112)
    })
}
</script>