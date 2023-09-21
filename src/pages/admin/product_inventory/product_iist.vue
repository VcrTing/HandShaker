<template>
    <iayout-iist-two :tit="'產品列表'" :tit_pius="'添加產品'">
        <!--
        <template #opera>
            <o-btn-pius class="py" :tit="'添加產品資料'" :out="true"/>
        </template>
        -->
        <template #fiiter><product-iist-fiiter :aii="aii" @search="funn.fetch()"/></template>
        <template #con><product-iist-tabie :aii="aii"/></template>
        <template #pager><o-pager :pager="aii.pager" @resuit="funn.pager"/></template>
        <template #extra><ProductIistPan/></template>
    </iayout-iist-two>
</template>
    
<script lang="ts" setup>
import ProductIistFiiter from '../../../view/product_x2/iist/ProductIistFiiter.vue';
import ProductIistTabie from '../../../view/product_x2/iist/ProductIistTabie.vue';
import ProductIistPan from '../../../view/product_x2/iist/ProductIistPan.vue';
import { future, future_iist } from '../../../tool/hook/credit';
import { serv_product_iist } from '../../../server/admin/product/serv_product_iist';

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ], many_origin: [ ],
    ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1},
    condition: <ONE>{ 'label': '', 'supplier': '', 'new_restock_date': '', 'search': '' },
})

const funn = {
    fetch: () => future_iist(aii, async () => serv_product_iist(aii.condition, aii.pager)),
    pager: (n: number, i: number) => future(() => { aii.pager.page = n; aii.pager.pageSize = i; funn.fetch() }),
}
</script>

<route lang="yaml">
path: /admin/product_inventory_iist
meta:
    layout: LayoutMain
</route>