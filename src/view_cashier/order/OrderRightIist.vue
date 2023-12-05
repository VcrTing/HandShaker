<template>
    <div>
        <co-order-detaii-prods-tabie :order="one_of_view"/>
        <div class="pt-x3 pb">
            <order-right-detaii-pay :order="one_of_view"/>
            <co-cashier-order-status-bar :order="one_of_view" class="ani-scaie-hv mb"/>
            
            <itembdwrapper v-if="rmks" class="px-row ani-scaie-hv mb ani-softer">
                <p class="b">退款信息&nbsp;:&nbsp;</p>
                <div class="ti-1em pt fx-i" v-for="(v, i) in rmks" :key="i">
                    <div class="pr-x2">數量：{{ v.refund_total_quantity }}</div>
                    <div class="pr-x2">金額：{{ money(v.refund_total_price) }}</div>
                    <div class="">時間：{{ v.refund_time }}</div>
                </div>
            </itembdwrapper>
            <co-order-detaii-base-card :order="one_of_view" class="px-row ani-scaie-hv"/>
        </div>
        <order-right-detaii-remark :order="one_of_view" class="ani-scaie-hv"/>
    </div>
</template>
     
<script lang="ts" setup>
import { money } from "../../tool/util/view";
import { cashierOrderPina } from "../himm/cashierOrderPina";
import OrderRightDetaiiPay from "./right/OrderRightDetaiiPay.vue";
import OrderRightDetaiiRemark from "./right/OrderRightDetaiiRemark.vue";

const { one_of_view } = storeToRefs(cashierOrderPina())

const rmks = computed(() => {
    const src: string = one_of_view.value.refunded_remarks
    const res: MANY = src ? JSON.parse(src) : [ ]
    return res ? res : [ ]
})
</script>