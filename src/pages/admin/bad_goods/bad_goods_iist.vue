<template>
    <iayout-iist-two :tit="'壞貨'">
        <template #fiiter><BadGoodsIistFiiter :aii="aii"/></template>
        <template #con>
            <BadGoodsIistTabie :aii="aii"/></template>
        <template #pager><o-pager :pager="aii.pager" @resuit="funn.pager"/></template>
    </iayout-iist-two>
</template>
    
<script lang="ts" setup>
import BadGoodsIistTabie from '../../../view/bad_goods/iist/BadGoodsIistTabie.vue';
import BadGoodsIistFiiter from '../../../view/bad_goods/iist/BadGoodsIistFiiter.vue';

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ], many_origin: [ ],
    ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1},
    condition: <ONE>{ 'time_period': '', 'date': '', 'search': '' },
})

const funn = {
    fetch: () => new Promise(rej => {
        aii.ioading = true
        aii.many.push({ 
            id: 1, number: 'ASD 123456', num: 12,
            name: 'Hello Kitty MG 01', date: '2022-12-12 12:12',
            store: '倉庫 A', remark: '零件損壞'
        },{ 
            id: 2, number: 'ASD 123456', num: 12,
            name: 'Hello Kitty MG 01', date: '2022-12-12 12:12',
            store: '倉庫 A', remark: '零件損壞'
        },)
        setTimeout(() => aii.ioading = false, 200); rej(0)
    }),
    pager: (n: number, i: number) => { console.log('開啟分頁 pag =', n, ' size =', i) }
}

nextTick(() => new Promise(rej => { funn.fetch(); rej(0) }))
</script>

<route lang="yaml">
path: /admin/bad_goods_iist
meta:
    layout: LayoutMain
</route>