<template>
    <m-btn class="br">
        <i :class="icon" v-if="icon"></i>
        <div class="d-ib" :class="{ 'pi': icon }">
            <slot></slot>
        </div>
    </m-btn>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
defineProps<{
    icon?: string
}>()
</script>