<template>
    <Pan :idx="idx ? idx : 101" :huge="true">
        <pan-inner :tit="'訂單詳情'">
            <div class="pt-row"></div>
            <co-order-iist-base-card/>
            <div class="py-row"></div>
            <!--
            <co-order-detaii-prods-tabie/>
            -->
            <p>這裡一個 產品 列表</p>
            <div class="py-row"></div>
            <co-order-detaii-price-totai-tabie/>
            <div class="py-row"></div>
            <div class="fx-c pt">
                <div class="w-50 fx-s">
                    <cub-go-refund class="btn-tab fx-1 py br refund"/>
                    <span class="px"></span>
                    <m-btn class="btn-pri fx-1 py br">印列訂單</m-btn>
                </div>
            </div>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
defineProps<{ idx?: number }>()
</script>