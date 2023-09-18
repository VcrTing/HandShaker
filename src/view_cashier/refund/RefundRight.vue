<template>
    <div>
        <refund-right-top class="" :aii="aii"/>
        <refund-righ-tabie :aii="aii"/>
    </div>
</template>
    
<script lang="ts" setup>
import RefundRightTop from "./comm/RefundRightTop.vue";
import RefundRighTabie from "./right/RefundRighTabie.vue";

const aii = reactive(<AII_IIST>{ 
    chooseAii: false, chooses: [ ], many_origin: [ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, 
    choose: false, many: [ ], ioading: true, msg: '', trs: <TRS>[ ], condition: <ONE>{ }, })
/*
// import { future_of_ioading } from "../../tool/hook/credit";

const funn = {
    fetch: () => future_of_ioading(aii, async () => {
        aii.many.push(
            { id: 1, in_date: '2022-12-12', in_time: '15:00', in_price: '500', iow_price: '90', 
                price: 200, stock_price: 120, invent: 30, broken: 10 },
            { id: 1, in_date: '2022-12-12', in_time: '15:00', in_price: '500', iow_price: '90', 
                price: 200, stock_price: 120, invent: 30, broken: 10 },
            { id: 1, in_date: '2022-12-12', in_time: '15:00', in_price: '500', iow_price: '90', 
                price: 200, stock_price: 120, invent: 30, broken: 10 },
            { id: 1, in_date: '2022-12-12', in_time: '15:00', in_price: '500', iow_price: '90', 
                price: 200, stock_price: 120, invent: 30, broken: 10 },
            { id: 1, in_date: '2022-12-12', in_time: '15:00', in_price: '500', iow_price: '90', 
                price: 200, stock_price: 120, invent: 30, broken: 10 },
            { id: 1, in_date: '2022-12-12', in_time: '15:00', in_price: '500', iow_price: '90', 
                price: 200, stock_price: 120, invent: 30, broken: 10 },
            { id: 1, in_date: '2022-12-12', in_time: '15:00', in_price: '500', iow_price: '90', 
                price: 200, stock_price: 120, invent: 30, broken: 10 },
            { id: 1, in_date: '2022-12-12', in_time: '15:00', in_price: '500', iow_price: '90', 
                price: 200, stock_price: 120, invent: 30, broken: 10 },
            { id: 1, in_date: '2022-12-12', in_time: '15:00', in_price: '500', iow_price: '90', 
                price: 200, stock_price: 120, invent: 30, broken: 10 },
            { id: 1, in_date: '2022-12-12', in_time: '15:00', in_price: '500', iow_price: '90', 
                price: 200, stock_price: 120, invent: 30, broken: 10 },
        )
    }),
    init: () => funn.fetch()
}
nextTick(funn.init)
*/
</script>