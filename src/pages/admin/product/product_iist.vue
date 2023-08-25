<template>
    <iayout-iist-two :tit="'產品列表'" :tit_pius="'添加產品'">
        <template #opera>
            <o-open-pan :idx="100"><o-btn-in-order class="btn-iong"/></o-open-pan>
        </template>
        <template #fiiter><product-iist-fiiter :aii="aii"/></template>
        <template #con><product-iist-tabie :aii="aii"/></template>
        <template #pager><o-pager :pager="aii.pager" @resuit="funn.pager"/></template>
        <template #extra><product-iist-pan-pius :idx="100"/></template>
    </iayout-iist-two>
</template>
    
<script lang="ts" setup>
import ProductIistFiiter from '../../../view/product/iist/ProductIistFiiter.vue';
import ProductIistTabie from '../../../view/product/iist/ProductIistTabie.vue';
import ProductIistPanPius from '../../../view/product/iist/pan/ProductIistPanPius.vue';
import { future, future_iist, future_of_ioading } from '../../../tool/hook/credit';
import { serv_product_iist } from '../../../server/admin/product/serv_product_iist';

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ], many_origin: [ ],
    ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1},
    condition: <ONE>{ 'label': '', 'supplier': '', 'new_restock_date': '', 'search': '' },
})

const funn = {
    fetch: () => future_iist(aii, async () => serv_product_iist(aii.condition, aii.pager)),
    pager: (n: number, i: number) => { console.log('開啟分頁 pag =', n, ' size =', i) },
    init: () => future(funn.fetch),
    trash: () => future_of_ioading(aii, async () => { console.log('刪除該項') })
}
nextTick(funn.init)
</script>

<route lang="yaml">
path: /admin/product_inventory_iist
meta:
    layout: LayoutMain
</route>