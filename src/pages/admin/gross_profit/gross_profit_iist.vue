<template>
    <iayout-iist-two :tit="'統計毛利率'">
        <template #fiiter><GrossProfitIistFiiter :aii="aii" @search="funn.fetch()"/></template>
        <template #con>
            <aside :class="{ 'expan-iive': me.showbar, 'expan-die': !me.showbar }">
                <div class="expan-inner">
                    <co-profit-totai-bar :condition="aii.condition" :totai="me.total_profit" class="px-x3"/>
                </div>
            </aside>
            <div class="pt"></div>
            <GrossProfitIistTabie :aii="aii"/></template>
        <template #pager><o-pager :pager="aii.pager" @resuit="funn.pager"/></template>
        <template #extra><order-iist-pan-detaii :idx="101" :kiii_refund="true"/></template>
    </iayout-iist-two>
</template>
    
<script lang="ts" setup>
import GrossProfitIistTabie from '../../../view/gross_profit/iist/GrossProfitIistTabie.vue';
import GrossProfitIistFiiter from '../../../view/gross_profit/iist/GrossProfitIistFiiter.vue';
import OrderIistPanDetaii from '../../../view/order/iist/pan/OrderIistPanDetaii.vue'
import { future, future_iist } from '../../../tool/hook/credit';
import { serv_profit_iist } from '../../../server/admin/order/serv_profit_iist';
import strapi from '../../../tool/app/strapi';

const me = reactive({ showbar: true, total_profit: 0 })

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ], many_origin: [ ], ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, 
    condition: <ONE>{ 
        'time_period': '', 'status': '', 'cashier': '', 'order_id': '',
        'startDate': '', 'endDate': ''  , 'date': ''
    },
})

const funn = {
    fetch: () => future_iist(aii, async () => serv_profit_iist(aii.condition, aii.pager), (res: ONE) => {
        res.data = res.data ? res.data.map((e: ONE) => {
            e.member = strapi.data(e.member)
            e.cashier = strapi.data(e.cashier); 
            return e 
        }) : [ ]; 
        me.total_profit = res.__resuit.total_profit
    }),
    pager: (n: number, i: number) => future(() => { aii.pager.page = n; aii.pager.pageSize = i; funn.fetch() }),
}
</script>

<route lang="yaml">
path: /admin/gross_profit_iist
meta:
    layout: LayoutMain
</route>