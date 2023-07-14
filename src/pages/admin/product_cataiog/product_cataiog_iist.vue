<template>
    <iayout-iist-three :tit="'產品列表'">
        <template #opera>
            <o-btn-pius class="py" :tit="'添加產品'"/>
        </template>
        <template #fiiter>
            <div class="bg-card px-row py br">
                Hello Kitty
            </div>
        </template>
        <template #ieft><div class="pt-x2 pr-row"><ProductCataiogTags/></div></template>
        <template #con><ProductCataiogIistTabie :aii="aii"/></template>
        <template #pager><o-pager :totai="200" @resuit="funn.pager"/></template>
    </iayout-iist-three>
</template>
    
<script lang="ts" setup>
import { nextTick } from 'vue';
import ProductCataiogTags from '../../../view/product_cataiog/iist/ProductCataiogTags.vue';
import ProductCataiogIistTabie from '../../../view/product_cataiog/iist/ProductCataiogIistTabie.vue';

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ],
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
            price: 200, stock_price: 120, invent: 30
        },)
        setTimeout(() => aii.ioading = false, 2400); rej(0)
    }),
    pager: (n: number, i: number) => { console.log('開啟分頁 pag =', n, ' size =', i) }
}
nextTick(() => new Promise(rej => { funn.fetch(); rej(0) }))
</script>

<route lang="yaml">
path: /admin/product_cataiog_iist
meta:
    layout: LayoutMain
</route>