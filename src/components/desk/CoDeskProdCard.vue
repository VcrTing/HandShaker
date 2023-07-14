<template>
    <nav class="co-desk-prod-card bg-con br pi pr-s hand">
        <div class="mh-6em pt-x1">
            <h4 class="">{{ name }}</h4>
            <h5 class="sub op-85">庫存{{ inventory }}</h5>
        </div>
        <p class="pt pb-x1 bb">
            HKD&nbsp;&nbsp;{{ price }}
        </p>
    </nav>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
defineProps<{
    name: String,
    price: String,
    inventory: number,
}>()
</script>