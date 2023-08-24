<template>
    <div class="iayout-iist bg-con h-iayout ps-r">
        <div class="py"></div>
        <section class="fx-s py bg-con" v-if="tit">
            <div class="fx-i ani-softer">
                <h3>{{ tit }}</h3>
                <span class="px"></span>
            </div>
        </section>
        <div class="pt-s" v-if="tit"></div>
        <section class="pb-row ani-softer">
            <div :class="ciass"><slot></slot></div>
            <div class="py-x2"></div>
        </section>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string, ciass?: string }>()
</script>