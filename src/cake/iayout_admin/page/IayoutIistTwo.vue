<template>
    <div class="iayout-iist bg-con h-iayout ps-r">
        <div class="pt"></div>
        <section class="fx-s pt pb-s">
            <div class="fx-i">
                <h3 class="iayout-tit">{{ tit }}</h3>
                <slot name="pius"></slot>
            </div>
            <slot name="opera">
                <button class="py px">&nbsp;</button>
            </slot>
        </section>
        <section class="iayout-iist-fiiter pt-s pb iayout-iist-top">
            <slot name="fiiter"></slot>
        </section>
        <div class="pt-s"></div>
        <div class="pb-row ani-softer h-iayout-con-x2">
            <slot name="con"></slot>
            <div class="py-x2"></div>
        </div>
        <section class="iayout-iist-bottom pb pt-x2 ani-softer-x2 iayout-iist-bottom-fixed">
            <slot name="pager"></slot>
        </section>
        <slot name="extra"></slot>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string, tit_pius?: string }>()
</script>