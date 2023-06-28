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
        <div class="pi">
            <o-open-page :to="'creat'">
                <o-btn class="btn-pri px py">添加產品資料</o-btn>
            </o-open-page>
            <span class="px-s"></span>
            <o-btn class="btn-pri-out px py">
                印列產品列表
            </o-btn>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_product from '../../../conf/data/vaiue/vai_product'
defineProps<{ aii: AII }>()
</script>