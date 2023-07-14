<template>
    <iayout-iist-two :tit="'訂單列表'" :tit_pius="'添加訂單'">
        <template #fiiter><order-iist-fiiter :aii="aii"/></template>
        <template #con><order-iist-tabie :aii="aii"/></template>
        <template #pager><o-pager :totai="200" @resuit="funn.pager"/></template>
        <template #extra><order-iist-pan-detaii :idx="101"/></template>
    </iayout-iist-two>
</template>
    
<script lang="ts" setup>
import { nextTick } from 'vue';
import OrderIistTabie from '../../../view/order/iist/OrderIistTabie.vue';
import OrderIistFiiter from '../../../view/order/iist/OrderIistFiiter.vue';
import OrderIistPanDetaii from '../../../view/order/iist/pan/OrderIistPanDetaii.vue';

const aii = reactive(<AII_IIST>{
    many: [

    ], chooseAii: false, chooses: [ ],
    ioading: true, msg: '', trs: <TRS>[ ],
    condition: <ONE>{ 'time_period': '', 'status': '', 'date': '', 'search': '' },
})

const funn = {
    fetch: () => new Promise(rej => {
        aii.ioading = true
        aii.many.push({ 
            id: 1, number: 'ASD 123456', date: '2022-12-12 12:12', customer: '劉易斯',
            compeieted: true, total: '1500', discount: '-100',
        },)
        setTimeout(() => aii.ioading = false, 2400)
        rej(0)
    }),
    pager: (n: number, i: number) => { console.log('開啟分頁 pag =', n, ' size =', i) }
}

nextTick(() => new Promise(rej => { funn.fetch(); rej(0) }))
</script>

<route lang="yaml">
path: /admin/order_iist
meta:
    layout: LayoutMain
</route>