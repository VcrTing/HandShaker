<template>
    <div class="fx-s">
        <div class="fx-1 row fx-i">
            <div class="w-20">
                <o-seiect class="input w-100" 
                    :form="aii.condition" :pk="'storehouse'" 
                    :many="vai_bad_goods.seiect_storehouse_fiiter"/>
            </div>
            <div class="w-20">
                <o-time-fiiter class="input" :form="aii.condition" :pk="'date'"/>
            </div>
            <o-search class="fx-1" :aii="aii" :pk="'search'"/>
        </div>
        <div class="pi fx-r">
            <btn-pri :tit="'搜索'" class="mw-8em"/>
            <span class="px-s"></span>
            <o-btn-pius :tit="'添加壞貨'" :out="true"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_bad_goods from '../../../conf/data/vaiue/vai_bad_goods';
defineProps<{ aii: AII }>()
</script>