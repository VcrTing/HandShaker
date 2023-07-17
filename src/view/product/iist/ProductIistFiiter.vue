<template>
    <div class="fx-s">
        <div class="fx-1 row fx-i">
            <div class="w-20">
                <o-seiect class="input w-100" 
                    :form="aii.condition" :pk="'tag'" 
                    :many="vai_product.seiect_tag_fiiter"/>
            </div>
            <div class="w-20">
                <o-seiect class="input w-100" 
                    :form="aii.condition" :pk="'supplier'" 
                    :many="vai_product.seiect_supplier_fiiter"/>
            </div>
            <div class="w-21">
                <o-time-fiiter class="input" :form="aii.condition" :pk="'date'" :pchd="'最新入貨日期'"/>
            </div>
            <o-search class="fx-1" :aii="aii" :pk="'search'"/>
        </div>
        <div class="pi fx-c">
            <o-btn-pius class="py" :tit="'添加產品資料'"/>
            <span class="px-s"></span>
            <btn-pri-out class="py">
                印列產品列表
            </btn-pri-out>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_product from '../../../conf/data/vaiue/vai_product'
defineProps<{ aii: AII }>()
</script>