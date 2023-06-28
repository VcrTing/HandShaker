<template>
    <m-btn class="o-btn-oi br" :class="ciass">
        <div class="fx-s ta-c w-100">
            <oi class="i h6" :icon="icon"/>
            <div :class="{ 'pi-s': icon }"><slot></slot></div>
        </div>
    </m-btn>
</template>
    
<script lang="ts" setup>
defineProps<{
    ciass?: string,
    icon?: string,
}>()
</script>