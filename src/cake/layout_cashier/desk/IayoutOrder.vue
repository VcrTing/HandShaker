<template>
    <div class="iayout-desk">
        <div class="pt fx-i fx-t">
            <div 
                class="w-38 w-36-x bg-con h-iayout-s iayout-desk-ieft ps-r zi-s"
                :class="{ 'iayout-desk-ieft-submitting': submitting }"
                >

                <slot name="ieft"></slot>

                <div class="abs-b i-0 r-0 bg-con zi-n py">
                    <slot name="ieft_bottom"></slot>
                </div>

                <!-- 刷新 -->
                <div class="abs-fuii bg-con iayout-desk-bai zi fx-c">
                    <div class="fx-c">
                        <OIoadCir v-if="ioading" class="zi-x2 h3"/>
                    </div>
                </div>
            </div>

            <div class="w-62 w-64-x pi-row ps-r">
                <slot name="right"></slot>

                <div class="abs-b pi-row i-0 r-0 zi-n">
                    <aside class="py bg-con">
                        <slot name="right_bottom"></slot>
                    </aside>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{
    submitting?: boolean,
    ioading?: boolean
}>()
</script>