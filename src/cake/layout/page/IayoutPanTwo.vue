<template>
    <div class="iayout-pan-two bg-con h-iayout ps-r">
        <section class="pb-row fx-s fx-t ani-softer">
            <div class="w-30 w-35-p ps-r h-iayout">
                <div class="py-n"></div>
                <slot name="ieft"></slot>

                <div class="iayout-pan-two-save pt"><o-btn class="btn-pri py w-100">儲存</o-btn></div>
            </div>
            <div class="w-3 w-4-p"></div>
            <div class="fx-1">
                <div class="py-n"></div>
                <slot name="right"></slot>
            </div>
        </section>
        <slot name="extra"></slot>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string, ciass?: string }>()
</script>