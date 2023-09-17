<template>
    <div>
        <div class="fx-c" v-for="(v, i) in me.many" :key="i">
            <co-order-pdf-papper :class="ciass" :one="v"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { future } from "../../tool/hook/credit";
const prp = defineProps<{ ciass?: string, kiii_printed?: boolean}>()

const TEST = ref(true)

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
        if (prp.kiii_printed) return;
        setTimeout(() => { TEST.value ? window.print() : undefined }, 800)
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