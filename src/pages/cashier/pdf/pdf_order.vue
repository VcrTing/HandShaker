<template>
    <iayout-pdf :ink="me.ink" @printed="funn.printed()">
        <div class="pt-s"></div>
        <CoOrderPdfParcei class="co-order-pdf-parcei" :kiii_printed="true"/>
        <div class="py-x3"><br/><br/><br/></div>
    </iayout-pdf>
</template>
    
<script lang="ts" setup>
import { future } from "../../../tool/hook/credit";
const rtr = useRouter()
const order = ref(<ONE>{ })
const me = reactive({ ink: '', many: <MANY>[ ] })

const funn = {
    printed: () => {
        me.ink = ''
        setTimeout(() => {
            const rts = rtr.resolve({ path: `/widget/pdf/cashier` })
            // window.open(rts.href, '_blank')
            me.ink = rts.href
        }, 800)
    },
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
            }
            me.many.push(src)
        }
    }
}
nextTick(funn.init)
watchEffect(funn.effect)
</script>

<route lang="yaml">
path: /cashier/order_iist/pdf
meta:
    layout: LayoutPrinted
</route>