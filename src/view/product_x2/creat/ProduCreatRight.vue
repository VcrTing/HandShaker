<template>
    <div>
        <!-- 入貨 -->
        <div class="py-row"></div>
        <div class="tabie tabie-def">
            <o-tr :aii="{ trs: trs_instock_new }"/>
            <div class="mh-8em"></div>
        </div>

        <!-- 倉庫 -->
        <div class="py-row"></div>
        <div class="tabie tabie-def">
            <o-tr :aii="{ trs: trs_house}"/>
            <div class="mh-8em"></div>
        </div>
        
        <!-- 入貨 -->
        <div class="py-row"></div>
        <div class="tabie tabie-def">
            <o-tr :aii="{ trs: trs_instock }"/>
            <div class="mh-8em"></div>
        </div>

        <!-- 總價 -->
        <div class="py-row"></div>
        <div class="tabie tabie-def">
            <o-tr-pure :trs="trs_inprice"/>
            <div class="td">
                <div class="w-24">&nbsp;</div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { trs_instock_new, trs_house, trs_instock, trs_inprice } from '../_com/product_trs'
</script>