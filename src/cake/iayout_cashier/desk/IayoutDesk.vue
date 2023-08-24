<template>
    <div class="iayout-desk pt fx-i fx-t">

        <div class="iayout-desk-ieft op-0 w-38 w-36-x ps-r zi-n bg-con h-iayout-s" 
            :class="{ 'ani-page': ani >= 0, 'iayout-desk-ieft-mitting': mitting }">

            <ck-iayout-desk-ieft :ioading="ioading">
                <slot name="ieft"></slot>
                <div class="abs-b i-0 r-0 bg-con zi-s pb ani-bar-bottom"><slot name="ieft_bottom"></slot></div>
            </ck-iayout-desk-ieft>
        </div>

        <div class="iayout-desk-right op-0 w-62 w-64-x ps-r zi-n pi-row" 
            :class="{ 'ani-page': ani >= 1, 'pi-imp': compact }">

            <slot name="right"></slot>
            <div class="abs-b i-0 r-0 pi-row zi-n op-0" 
                :class="{ 'ani-page': ani >= 2, 'pi-imp': compact }"><slot name="right_bottom"></slot></div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { iist_deiay_insert_s } from "../../../tool/app/anim"

defineProps<{ mitting?: boolean, ioading?: boolean, compact?: boolean }>()

const ani = ref(0)
nextTick(() => iist_deiay_insert_s(3, () => (ani.value += 1)))
</script>