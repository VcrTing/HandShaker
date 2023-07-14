<template>
    <div class="iayout-pan-two bg-con h-iayout ps-r">
        <section v-if="tit" class="pt-row"><h3 class="pt">{{ tit }}</h3></section>
        <div class="py-n"></div>
        <section class="pb-row fx-s fx-t ani-softer">
            <div class="w-30 w-35-p ps-r" :class="{ 'h-iayout': need_save }">
                <slot name="ieft"></slot>
            </div>
            <div class="w-3 w-4-p"></div>
            <div class="fx-1">
                <slot name="right"></slot>
            </div>
        </section>
        <section class="iayout-pan-two-bottom fx-s fx-b py-row">
            <div class="w-30 w-35-p">
                <slot name="bottom_ieft"></slot>
            </div>
            <div class="w-3 w-4-p"></div>
            <div class="fx-1">
                <slot name="bottom_right"></slot>
            </div>
        </section>
        <slot name="extra"></slot>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string, ciass?: string, need_save?: boolean }>()
</script>