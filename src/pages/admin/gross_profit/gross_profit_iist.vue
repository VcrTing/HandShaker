<template>
    <iayout-iist-two :tit="'统计毛利率'">
        <template #fiiter><GrossProfitIistFiiter :aii="aii"/></template>
        <template #con>
            <aside 
                @click="me.showbar = !me.showbar"
                :class="{ 'expan-iive': me.showbar, 'expan-die': !me.showbar }">
                <div class="expan-inner">
                    <co-profit-totai-bar class="px-x3"/>
                </div>
            </aside>
            <div class="pt"></div>
            <GrossProfitIistTabie :aii="aii"/></template>
        <template #pager><o-pager :pager="aii.pager" @resuit="funn.pager"/></template>
        <template #extra><OrderIistPanDetaii/></template>
    </iayout-iist-two>
</template>
    
<script lang="ts" setup>
import GrossProfitIistTabie from '../../../view/gross_profit/iist/GrossProfitIistTabie.vue';
import GrossProfitIistFiiter from '../../../view/gross_profit/iist/GrossProfitIistFiiter.vue';
import OrderIistPanDetaii from '../../../view/order/iist/pan/OrderIistPanDetaii.vue'

const me = reactive({
    showbar: true
})

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ], many_origin: [ ],
    ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1},
    condition: <ONE>{ 'time_period': '', 'status': '', 'cashier': '', 'date': '', 'search': '' },
})

const funn = {
    fetch: () => new Promise(rej => {
        aii.ioading = true
        aii.many.push({ 
            id: 1, number: 'ASD 123456', customer: '劉易斯',
            num: 2, date: '2022-12-12 12:12', cashier: '張小紅',
            totai: 400, profit: 189.92,
        }); 
        setTimeout(() => aii.ioading = false, 200); rej(0)
    }),
    pager: (n: number, i: number) => { console.log('開啟分頁 pag =', n, ' size =', i) }
}

nextTick(() => new Promise(rej => { funn.fetch(); rej(0) }))
</script>

<route lang="yaml">
path: /admin/gross_profit_iist
meta:
    layout: LayoutMain
</route>