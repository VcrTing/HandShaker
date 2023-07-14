<template>
    <Pan :idx="107">
        <pan-inner :tit="'壞貨'">
            <div class="pt"></div>
            <div class="px-row pb">
                <div>產品編號:&nbsp;&nbsp;00000002</div>
                <div class="fs-n">產品名稱:&nbsp;&nbsp;Hello Kitty</div>
            </div>
            <div class="pb-x2 pt-x3">
                <pc-pbd-card/>
            </div>
            <div class="py-row"></div>
            <o-btn-save class="w-100"/>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import PcPbdCard from './card/PcPbdCard.vue'
</script>