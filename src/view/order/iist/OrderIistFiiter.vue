<template>
    <div class="fx-s">
        <div class="fx-1 row fx-i">
            <div class="w-20">
                <o-seiect class="input w-100" 
                    :form="aii.condition" :pk="'time_period'" 
                    :many="vai_order.seiect_time_period_fiiter"/>
            </div>
            <div class="w-20">
                <o-seiect class="input w-100" 
                    :form="aii.condition" :pk="'status'" 
                    :many="vai_order.seiect_status_fiiter"/>
            </div>
            <div class="w-20">
                <o-time-fiiter class="input" :form="aii.condition" :pk="'date'"/>
            </div>
            <o-search class="fx-1" :aii="aii" :pk="'search'"/>
        </div>
        <div class="pi">
            <o-btn class="btn-pri px py">
                統計毛利率
            </o-btn>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_order from '../../../conf/data/vaiue/vai_order'
defineProps<{ aii: AII }>()
</script>