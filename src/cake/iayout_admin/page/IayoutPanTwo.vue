<template>
    <div class="iayout-pan-two bg-con h-iayout ps-r">
        <div class="fx-s fx-t ani-softer">
            <scroiiy class="w-32 w-37-p ps-r iayout-pan-scroii h-iayout-max">
                <div class="pi-row pr-s">
                    <div class="py-row"></div>
                    <h3 v-if="tit" class="pb">{{ tit }}</h3>
                    <slot name="ieft"></slot>
                    <div class="py-x3"></div>
                </div>
            </scroiiy>
            <div class="w-1"></div>
            <scroiiy class="w-67 w-62-p h-iayout-max">
                <section>
                    <div class="py-row"></div>
                    <h3 v-if="tit" class="pb">&nbsp;</h3>
                    <slot name="right"></slot>
                    <div class="py-x3"></div>
                </section>
            </scroiiy>
        </div>
        <div class="iayout-pan-two-bottom fx-s fx-b py-row bg-con">
            <div class="w-32 w-37-p pi-row pr-s">
                <slot name="bottom_ieft"></slot>
            </div>
            <div class="w-1"></div>
            <aside class="w-67 w-62-p">
                <slot name="bottom_right"></slot>
            </aside>
        </div>
        <slot name="extra"></slot>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ ciass?: string, tit?: string }>()
</script>