<template>
    <aside>
        <dc-discount-tips/>
        <itemdash>
            <div class="fx-s h6 fw-600 fx-b pb-s">
                <div class="">
                    <span class="sus">優惠</span>:&nbsp;&nbsp;
                    <div class="d-ib ani-scaie-hv">HKD&nbsp;<DcTotiDiscountNum/></div>
                </div>
                <div>
                    <span>統計金額:&nbsp;&nbsp;</span>
                    <div class="d-ib txt-money h5 ani-scaie-hv">HKD&nbsp;<DcTotiPriceNum/></div>
                </div>
            </div>
        </itemdash>
        <DcDoOrderNext class="mt w-100"/>
    </aside>
</template>
    
<script lang="ts" setup>

import DcDiscountTips from '../desk_x3/comm/DcDiscountTips.vue'
import DcTotiPriceNum from '../desk_x3/comm/DcTotiPriceNum.vue'
import DcTotiDiscountNum from '../desk_x3/comm/DcTotiDiscountNum.vue'

import DcDoOrderNext from '../desk_x3/do/DcDoOrderNext.vue'
</script>