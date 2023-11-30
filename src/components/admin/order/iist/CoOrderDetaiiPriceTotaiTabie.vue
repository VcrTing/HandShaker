<template>
    <div>
        <div class="tabie tabie-def">
            <o-tr-pure :trs="[ { tit: '優惠類別', ciass: 'w-100' } ]"/>
            <div v-if="order.discount && order.discount.length > 0">
                <div class="td" v-for="(v, i) in order.discount" :key="i">
                    <div class="w-28">{{ v.type }}</div>
                    <div class="w-20">
                        <div class="d-ib" v-if="v.discount_shown && v.discount_shown != 1">{{ v.discount_shown }}&nbsp;&nbsp;折扣</div>
                        <div v-else class="d-ib">(減價)</div>
                    </div>
                    <div class="w-20">-&nbsp;{{ money(v.discount_deduction) }}&nbsp;&nbsp;HKD</div>
                    <div class="fx-1"></div>
                </div>
            </div>
            <div v-else class="td">
                <div class="w-100">(無)</div>
            </div>
        </div>
        <div class="py-row"></div>
        
        <div class="tabie tabie-def">
            <o-tr-pure :trs="[ { tit: '統計金額', ciass: 'w-100' } ]"/>
            <div class="td">
                <div class="w-28">HKD&nbsp;&nbsp;{{ money(order.total_price) }}</div>
                <div class="fx-1"></div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { money } from "../../../../tool/util/view"

defineProps<{ order: ONE }>()

/*
const convert_rate = (v: number) => {
    let res = v ? v : 1
    res = v * 100
    return res + '%'
} 
*/
</script>