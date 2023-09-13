<template>
    <iayout-pdf>
        <div class="fx-c" v-for="(_, i) in me.many" :key="i">
            <!--
            <co-order-pdf :one="v"/>
            -->
        </div>
        <div class="py-x3"><br/><br/><br/></div>
    </iayout-pdf>
</template>
    
<script lang="ts" setup>
import { cashierOrderPina } from "../../../view_cashier/himm/cashierOrderPina";

const { one_of_printed } = storeToRefs(cashierOrderPina())

const me = reactive({ many: <MANY>[ ] })

const funn = {
    effect: () => {
        me.many.length = 0
        const src: ONE = one_of_printed.value
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