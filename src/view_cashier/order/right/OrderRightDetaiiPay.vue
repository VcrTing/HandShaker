<template>
    <div class="">
        <itembdwrapper class="fx-s fw-600 mb px-row ani-scaie-hv">
            <div class="fx-1">
                支付方式&nbsp;:&nbsp;&nbsp;支付寶
            </div>
            <div class="">
                實在&nbsp;:&nbsp;&nbsp;<div class="txt-money fw-700 d-ib h6">HKD&nbsp;{{ money(1500.0) }}</div>
            </div>
        </itembdwrapper>
    </div>
</template>
    
<script lang="ts" setup>
import { money } from '../../../tool/util/view';

// import { reactive } from 'vue'
// defineProps<{ }>()
</script>