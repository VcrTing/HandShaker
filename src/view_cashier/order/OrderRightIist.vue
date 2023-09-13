<template>
    <div>
        <co-order-detaii-prods-tabie :order="one_of_view"/>
        <div class="pt-x3 pb">
            <order-right-detaii-pay/>
            <co-cashier-order-status-bar :order="one_of_view" class="ani-scaie-hv mb"/>
            <co-order-detaii-base-card :order="one_of_view" class="px-row ani-scaie-hv"/>
        </div>
        <!--
        <order-right-detaii-remark class="ani-scaie-hv"/>
        -->
    </div>
</template>
    
<script lang="ts" setup>
import { future } from "../../tool/hook/credit"
import { cashierOrderPina } from "../himm/cashierOrderPina";
import OrderRightDetaiiPay from "./right/OrderRightDetaiiPay.vue";
// import OrderRightDetaiiRemark from "./right/OrderRightDetaiiRemark.vue";

const { one_of_view } = storeToRefs(cashierOrderPina())

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ],
    ioading: true, msg: '', trs: <TRS>[ ], many_origin: [ ],
    condition: <ONE>{ time_period: '', status: '', cashier: '', }, 
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}
})

const funn = {
    printed: () => future(() => { }),
    init: () => future(() => {
        aii.many.push(
            { name: 'Hello Kitty MG 01', tags: '粉紅色', 
                addition: -100, price: 120.0, num: 20, total: 2400 }
        )
        aii.ioading = false
    })
}
nextTick(funn.init)
</script>