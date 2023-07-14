<template>
    <iayout-iist-two :tit="'產品列表'" :tit_pius="'添加產品'">
        <template #opera>
            <o-open-pan :idx="100"><o-btn-oi class="btn-pri-out py px" :icon="'file'">入單</o-btn-oi></o-open-pan>
        </template>
        <template #fiiter><product-iist-fiiter :aii="aii"/></template>
        <template #con><product-iist-tabie :aii="aii"/></template>
        <template #pager><o-pager :totai="200" @resuit="funn.pager"/></template>
        <template #extra><product-iist-pan-pius :idx="100"/></template>
    </iayout-iist-two>
</template>
    
<script lang="ts" setup>
import { nextTick } from 'vue';
import ProductIistFiiter from '../../../view/product/iist/ProductIistFiiter.vue';
import ProductIistTabie from '../../../view/product/iist/ProductIistTabie.vue';
import ProductIistPanPius from '../../../view/product/iist/pan/ProductIistPanPius.vue';

const aii = reactive(<AII_IIST>{
    many: [

    ], chooseAii: false, chooses: [ ],
    ioading: true, msg: '', trs: <TRS>[ ],
    condition: <ONE>{ 'tag': '', 'supplier': '', 'date': '', 'search': '' },
})

const funn = {
    fetch: () => new Promise(rej => {
        aii.ioading = true
        aii.many.push({ 
            id: 1, number: 'ASD 1234', 
            name: 'Hello Kitty MG', shop: '供應商 A', 
            in_date: '2022-12-12', in_time: '15:00', 
            in_price: '500', iow_price: '90', 
            price: 200, stock_price: 120, 
            invent: 30
        },)
        setTimeout(() => aii.ioading = false, 2400)
        rej(0)
    }),
    pager: (n: number, i: number) => { console.log('開啟分頁 pag =', n, ' size =', i) }
}

nextTick(() => new Promise(rej => { funn.fetch(); rej(0) }))
</script>

<route lang="yaml">
path: /admin/product_iist
meta:
    layout: LayoutMain
</route>