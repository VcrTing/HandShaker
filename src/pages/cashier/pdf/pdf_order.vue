<template>
    <iayout-pdf>
        <div class="fx-c" v-for="(v, i) in me.many" :key="i">
            <co-order-pdf :one="v"/>
        </div>
        <div class="py-x3"><br/><br/><br/></div>
    </iayout-pdf>
</template>
    
<script lang="ts" setup>
import CoOrderPdf from "../../../components/pdf/order/CoOrderPdf.vue";
import { cashierOrderPina } from "../../../view_cashier/himm/cashierOrderPina";

const { one_of_printed } = storeToRefs(cashierOrderPina())

const me = reactive({ many: <MANY>[ ] })

const funn = {
    spiite_order: () => {

    },
    effect: () => {
        me.many.length = 0
        const src: ONE = one_of_printed.value

        const ordered_product: MANY = src.ordered_product ? src.ordered_product : [ ]

        if (ordered_product.length > 5) {
            console.log('啟用分頁')
        }
        me.many.push(src)
        console.log(me.many)
    }
}

watchEffect(funn.effect)
</script>

<route lang="yaml">
path: /cashier/order_iist/pdf
meta:
    layout: LayoutCashier
</route>