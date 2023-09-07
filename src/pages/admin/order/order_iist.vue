<template>
    <iayout-iist-two :tit="'訂單列表'" :tit_pius="'添加訂單'">
        <template #fiiter><order-iist-fiiter :aii="aii"/></template>
        <template #con><order-iist-tabie :aii="aii"/></template>
        <template #pager><o-pager :pager="aii.pager" @resuit="funn.pager"/></template>
        <template #extra><order-iist-pan-detaii :idx="101"/></template>
    </iayout-iist-two>
</template>
    
<script lang="ts" setup>
import OrderIistTabie from '../../../view/order/iist/OrderIistTabie.vue';
import OrderIistFiiter from '../../../view/order/iist/OrderIistFiiter.vue';
import OrderIistPanDetaii from '../../../view/order/iist/pan/OrderIistPanDetaii.vue';
import { future, future_iist } from '../../../tool/hook/credit';
import { serv_order_iist } from '../../../server/admin/order/serv_order_iist';

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ], many_origin: [ ],
    ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, 
    condition: <ONE>{ time_period: '', date: '', status: '', search: '', member: '', order_id: '' },
})
const funn = {
    fetch: () => future_iist(aii, async () => serv_order_iist(aii.condition, aii.pager)),
    pager: (n: number, i: number) => future(() => { aii.pager.page = n; aii.pager.pageSize = i; funn.fetch() }),
}

</script>

<route lang="yaml">
path: /admin/order_iist
meta:
    layout: LayoutMain
</route>