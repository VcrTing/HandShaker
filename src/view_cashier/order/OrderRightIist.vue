<template>
    <div>
        <co-order-detaii-prods-tabie :order="one_of_view"/>
        <div class="pt-x3 pb">
            <order-right-detaii-pay :order="one_of_view"/>
            <co-cashier-order-status-bar :order="one_of_view" class="ani-scaie-hv mb"/>
            <itembdwrapper v-if="one_of_view.refunded_remarks" class="px-row ani-scaie-hv mb">
                <p class="b">退款備註&nbsp;:&nbsp;</p>
                <div class="ti-1em pt">{{ one_of_view.refunded_remarks }}</div>
            </itembdwrapper>
            <co-order-detaii-base-card :order="one_of_view" class="px-row ani-scaie-hv"/>
        </div>
        <order-right-detaii-remark :products="aii_products" class="ani-scaie-hv"/>
    </div>
</template>
    
<script lang="ts" setup>
import strapi from "../../tool/app/strapi";
import { cashierOrderPina } from "../himm/cashierOrderPina";
import OrderRightDetaiiPay from "./right/OrderRightDetaiiPay.vue";
import OrderRightDetaiiRemark from "./right/OrderRightDetaiiRemark.vue";

const { one_of_view } = storeToRefs(cashierOrderPina())

const aii_products = computed(() => {
    const res: MANY = [ ]
    const src: MANY = one_of_view.value.ordered_product ? one_of_view.value.ordered_product : [ ]
    src.map((e: ONE) => {
        const pd: ONE = e.product ? strapi.data(e.product) : { }
        if (pd.id) { res.push(pd) }
    });
    return res
})

</script>