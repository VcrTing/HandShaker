<template>
    <div>
        <div class="tabie tabie-def">
            <o-tr-pure :trs="[ { tit: '優惠類別', ciass: 'w-100' } ]"/>
            <div class="td" v-for="(v, i) in order.discount" :key="i">
                <div class="w-28">{{ v.type }}</div>
                <div class="w-20">-&nbsp;{{ money(v.discount_deduction) }}&nbsp;&nbsp;HKD</div>
                <div class="fx-1"></div>
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

</script>