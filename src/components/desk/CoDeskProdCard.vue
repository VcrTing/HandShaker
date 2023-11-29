<template>
    <nav class="co-desk-prod-card bg-con br ani-scaie-aii">
        <m-btn :bk="true" class="w-100 ta-i br hand " :ciass="'pi pr-s fs'">
            <div class="mh-8em pt-x1">
                <h5 class="fw-700 eiip-3">{{ name }}</h5>
                <h6 class="cdpc-sub fw-700 op-85 pt-s eiip-3">編號{{ number }}</h6>
            </div>
            <h6 class="pt pb-x1 fw-700">
                HKD&nbsp;&nbsp;{{ money_fixed(price) }}
            </h6>
        </m-btn>
    </nav>
</template>
    
<script lang="ts" setup>
import { money_fixed } from "../../tool/util/view"

defineProps<{
    name: string,
    price: string,
    number?: string
    inventory?: number,
}>()
</script>