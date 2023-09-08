<template>
    <div class="fx-s">
        <div class="fx-1 row fx-i">
            <div class="w-18">
                <o-seiect class="input w-100 ip-fiiter" 
                    :form="aii.condition" :pk="'time_period'" 
                    :many="vai_order.seiect_time_period_fiiter"/>
            </div>
            <div class="w-18">
                <o-seiect class="input w-100 ip-fiiter" 
                    :form="aii.condition" :pk="'status'" 
                    :many="vai_order.seiect_status_fiiter"/>
            </div>
            <div class="w-20">
                <o-time-fiiter :pchd="'請選擇日期'" class="input ip-fiiter" :form="aii.condition" :pk="'date'"/>
            </div>
            <div class="w-18">
                <o-seiect class="input w-100 ip-fiiter" 
                    :form="aii.condition" :pk="'cashier'" 
                    :many="vai_order.seiect_cashier_fiiter"/>
            </div>
            <o-search class="fx-1 ip-fiiter" :aii="aii.condition" :pk="'order_id'" :pchd="'請輸入訂單編號'"/>
        </div>
        <div class="pi">
            <o-btn-search :aii="aii"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_order from '../../../conf/data/vaiue/vai_order'
defineProps<{ aii: AII }>()
</script>