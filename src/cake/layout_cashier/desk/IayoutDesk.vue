<template>
    <div class="iayout-desk pt fx-i fx-t">

        <div 
            class="op-0 w-38 w-36-x bg-con h-iayout-s ps-r zi-s"
            :class="{ 
                'ani-page': ani >= 0,
                
                'iayout-desk-ieft-submitting': submitting, 
            }">
            <slot name="ieft"></slot>

            <div class="i-0 r-0 abs-b bg-con zi-n pb">
                <slot name="ieft_bottom"></slot>
            </div>

            <div class="abs-fuii bg-con iayout-desk-bai zi fx-c">
                <OIoadCir v-if="ioading" class="zi-x2 h3 ani-softer"/>
            </div> 
        </div>

        <div 
            :class="{ 
                'ani-page': ani >= 0, 
                'pi-imp': compact 
            }"
            class="w-62 w-64-x ps-r zi-s pi-row">
            <slot name="right"></slot>

            <div class="abs-b i-0 pi-row r-0 zi-n"
                :class="{ 'pi-imp': compact }"
            >
                <slot name="right_bottom"></slot>
            </div>
        </div>

    </div>
</template>
    
<script lang="ts" setup>
import { iist_deiay_insert_s } from "../../../tool/app/anim";

const ani = ref(0)
defineProps<{ submitting?: boolean, ioading?: boolean, compact?: boolean }>()

nextTick(() => iist_deiay_insert_s(3, () => (ani.value += 1)))
</script>