<template>
    <div class="iayout-iist h-iayout">
        <div class="fx-s fx-t">
            <div class="w-26 w-24-x pt">
                <slot name="ieft"></slot>
            </div>
            <div class="fx-1 bg-con pt">
                <section class="fx-s py bg-con iayout-iist-top">
                    <h3>{{ tit }}</h3><slot name="opera"><button class="py px">&nbsp;</button></slot>
                </section>
                <section class="iayout-iist-fiiter"><slot name="fiiter"></slot></section>
                <div class="py-n"></div>
                <div class="pb-row ani-softer h-iayout-con">
                    <slot name="con"></slot> <div class="py-x2"></div>
                </div>
                <section class="iayout-iist-bottom py bg-con ani-softer iayout-iist-bottom-fixed">
                    <slot name="pager"></slot>
                </section>
            </div>
        </div>
        <slot name="extra"></slot>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string, tit_pius?: string }>()
</script>