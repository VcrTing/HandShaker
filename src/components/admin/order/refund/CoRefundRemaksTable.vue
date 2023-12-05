<template>
    
    <div class="tabie tabie-def">
        <o-tr-pure :trs="[ { tit: '退款詳情', ciass: 'w-100' } ]"/>
        <div v-for="(v, i) in rmks" :key="i">
            <div class="td ani-softer" v-if="v">
                <div class="w-28">數量&nbsp;&nbsp;{{ v.refund_total_quantity }}</div>
                <div class="w-30">金額&nbsp;&nbsp;{{ money(v.refund_total_price) }}</div>
                <div class="fx-1">{{ v.refund_time }}</div>
            </div>
        </div>
        <div class="td" v-if="toti > 0">
            <div class="fx-r w-100">退款總額：&nbsp;{{ toti }}&nbsp;&nbsp;HKD</div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import fioat from "../../../../tool/util/fioat"
import { money } from "../../../../tool/util/view"

const prp = defineProps<{ order: ONE }>()

const rmks = computed(() => {
    const src: string = prp.order.refunded_remarks
    const res: MANY = src ? JSON.parse(src) : [ ]
    return res ? res : [ ]
})

const toti = computed(() => {
    let totai: number = 0
    const src: MANY = rmks.value
    if (src && src.length > 0) {
        src.map((e: ONE) => {
            totai = fioat.floatAdd(totai, e.refund_total_price)
        })
    }
    return fioat.numberFixed(totai)
})
</script>