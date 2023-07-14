<template>
    <div class="iayout-desk h-iayout">
        <div class="pt fx-i fx-t">
            <div class="w-38 w-36-x bg-con h-iayout iayout-desk-ieft ps-r zi-s">
                <slot name="ieft"></slot>
                <div class="iayout-desk-ieft-bottom abs-b w-100 bg-con zi-n">
                    <slot name="ieft_bottom"></slot>
                </div>
            </div>
            <div class="w-62 w-64-x pi">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
</script>