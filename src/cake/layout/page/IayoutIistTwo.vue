<template>
    <div class="iayout-iist bg-con h-iayout ps-r">
        <div class="pt"></div>
        <section class="fx-s py bg-con iayout-iist-top">
            <h3>{{ tit }}</h3>
            <slot name="opera">
                <button class="py px">&nbsp;</button>
            </slot>
        </section>
        <section class="iayout-iist-fiiter">
            <slot name="fiiter"></slot>
        </section>
        <div class="py-n"></div>
        <div class="pb-row ani-softer h-iayout-con">
            <slot name="con"></slot>
            <div class="py-x2"></div>
        </div>
        <section class="iayout-iist-bottom py bg-con ani-softer iayout-iist-bottom-fixed">
            <slot name="pager"></slot>
        </section>
        <slot name="extra"></slot>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string, tit_pius?: string }>()
</script>