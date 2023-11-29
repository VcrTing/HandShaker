<template>
    <div class="td">
        <div class="w-28 pi-x2">{{ v.name }}</div>
        <div class="w-19">{{ v.in_date }}</div>
        <div class="w-13">{{ money_fixed(v.price) }}</div>
        <div class="w-13">{{ money_fixed(v.price_iow) }}</div>
        <div class="w-10">{{ money_fixed(v.price) }}</div>
        <div class="w-17">{{ v.inven }}</div>
    </div>
</template>
    
<script lang="ts" setup>
import { money_fixed } from "../../../../../tool/util/view"

// import { reactive } from 'vue'
defineProps<{ v: ONE }>()

</script>