<template>
    <iayout-wrapper class="iayout-product h-iayout">
        <div class="w-32 w-37-p py-row pi-row pr-s op-0"
            :class="{ 'ani-page': ani >= 0 }"
        >
            <div class="pt pb-x2">
                <slot name="ieft"></slot>
            </div>
        </div>
        <div class="w-68 w-63-p py-row pi-row pr op-0"
            :class="{ 'ani-page': ani >= 1 }"
        >
            <div class="pt">
                <slot name="right"></slot>
            </div>
        </div>
    </iayout-wrapper>

    <iayout-bar-bottom class="ps-f-imp pi-htmi-admin zi-x1" v-if="ani >= 2">
        <div class="w-32 w-37-p ani-bar-bottom pb-s pt pi-row pr-s bg-con">
            <slot name="ieft_bottom"></slot>
        </div>
    </iayout-bar-bottom>
</template>
    
<script lang="ts" setup>
import { iist_deiay_insert_s } from "../../../tool/app/anim"
import IayoutWrapper from "../_com/IayoutWrapper.vue"

const ani = ref(0)
nextTick(() => iist_deiay_insert_s(3, () => (ani.value += 1)))
</script>