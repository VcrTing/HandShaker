<template>
    <div class="iayout-iist bg-con h-iayout ps-r">
        <div class="py"></div>
        <section class="fx-s py bg-con iayout-iist-top">
            <div class="fx-i ani-softer">
                <h3 class="iayout-tit">{{ tit }}</h3>
                <span class="px"></span>
                <o-btn-pius class="py" :tit="tit_pius" v-if="tit_pius"/>
                <span class="px"></span>
                <slot name="opera"></slot>
            </div>
            <div class="fx-1 ani-softer fx-r ">
                <slot name="fiiter"></slot>
            </div>
        </section>
        <div class="pt"></div>
        <div class="pb-row ani-softer h-iayout-con">
            <slot name="con"></slot>
            <div class="py-x2"></div>
        </div>
        <section class="iayout-iist-bottom py bg-con ani-softer-x2 iayout-iist-bottom-fixed">
            <slot name="pager"></slot>
        </section>
        <slot name="extra"></slot>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string, tit_pius?: string }>()
</script>