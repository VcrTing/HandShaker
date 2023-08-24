<template>
    <div class="iayout-pan-two bg-con h-iayout ps-r">
        <div class="fx-i fx-wp fx-t ani-softer">
            <scroiiy class="w-35 w-49-p w-34-w w-32-x w-100-m ps-r iayout-pan-scroii h-iayout-max">
                <div class="pi-row pr-s">
                    <div class="py-row"></div>
                    <slot name="ieft"></slot>
                    <div class="py-x3"></div>
                </div>
            </scroiiy>
            <div class="w-1 w-2-p w-100-m"></div>
            <scroiiy class="w-36 w-49-p w-35-w w-33-x w-100-m h-iayout-max">
                <section>
                    <div class="py-row"></div>
                    <slot name="right"></slot>
                    <div class="py-x3"></div>
                </section>
            </scroiiy>
        </div>
        <slot name="extra"></slot>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ ciass?: string }>()
</script>