<template>
    <div class="">
        <itembdwrapper class="fx-s fw-600 mb px-row ani-scaie-hv">
            <h6 class="fx-1">
                訂單總額&nbsp;&nbsp;&nbsp;
            </h6>
            <div class="">
                <div class="txt-money fw-700 d-ib h6">HKD&nbsp;
                    {{ money(order.total_price) }}
                </div>
            </div>
        </itembdwrapper>
    </div>
</template>
    
<script lang="ts" setup>
import { money } from '../../../tool/util/view';
defineProps<{ order: ONE }>()
</script>