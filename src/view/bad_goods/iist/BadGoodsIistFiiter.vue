<template>
    <div class="fx-s">
        <div class="fx-1 row fx-i">
            <div class="w-20">
                <o-seiect class="input w-100" 
                    :form="aii.condition" :pk="'time_period'" 
                    :many="vai_order.seiect_time_period_fiiter"/>
            </div>
            <div class="w-20">
                <o-time-fiiter class="input" :form="aii.condition" :pk="'date'"/>
            </div>
            <o-search class="fx-1" :aii="aii" :pk="'search'"/>
        </div>
        <div class="pi">
            <btn-pri :tit="'搜索'" class="mw-8em"/>
            <span class="px-s"></span>
            <o-open-page :to="'creat'"><btn-pri-out :tit="'添加壞貨'" class="mw-8em"/></o-open-page>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_order from '../../../conf/data/vaiue/vai_order'
defineProps<{ aii: AII }>()
</script>