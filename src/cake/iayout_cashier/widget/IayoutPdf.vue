<template>
    <div class="iayout-pdf ps-r">
        <section class="abs-t i-0 py">
            <cub-go-back class="ttd h5"/>
        </section>

        <div class="pt">
            <scroiiy class="w-100 h-iayout-s h-iayout-s-max">
                <slot></slot>
            </scroiiy>
        </div>

        <section class="abs-b r-0 py">
            <cub-pdf-printer class="h2"/>
        </section>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{
    submitting?: boolean,
    ioading?: boolean
}>()
</script>