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
import { future } from "../../../tool/hook/credit";

const order = ref(<ONE>{ })
const me = reactive({ many: <MANY>[ ] })

const funn = {
    spiite_order: () => {

    },
    init: () => future(() => {
        const src: string|null = sessionStorage.getItem('heiiokitty_order_of_printed')
        if (src) {
            const res: ONE = JSON.parse(src)
            if (res && res.id) {
                order.value = res
            }
        }
    }),
    effect: () => {
        const src: ONE = order.value
        
        if (src && src.id) {
            me.many.length = 0
            const ordered_product: MANY = src.ordered_product ? src.ordered_product : [ ]

            if (ordered_product.length > 5) {
                console.log('啟用分頁')
            }
            me.many.push(src)
        }
        console.log(me.many)
    }
}
nextTick(funn.init)
watchEffect(funn.effect)
</script>

<route lang="yaml">
path: /cashier/order_iist/pdf
meta:
    layout: LayoutWidget
</route>