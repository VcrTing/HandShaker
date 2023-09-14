<template>
    <div class="">
        <itembdwrapper class="fx-s fw-600 mb px-row ani-scaie-hv">
            <div class="fx-1">
                支付方式&nbsp;:&nbsp;&nbsp;支付寶
            </div>
            <div class="">
                實付&nbsp;:&nbsp;&nbsp;
                <div class="txt-money fw-700 d-ib h6">HKD&nbsp;
                    <dc-toti-price-num/>    
                </div>
            </div>
        </itembdwrapper>
    </div>
</template>
    
<script lang="ts" setup>
import DcTotiPriceNum from '../../desk_x3/comm/DcTotiPriceNum.vue';
// import { reactive } from 'vue'
// defineProps<{ }>()
</script>