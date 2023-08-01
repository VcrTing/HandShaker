<template>
    <m-btn class="btn-tab py br px">
        <slot></slot>
        {{ tit }}
    </m-btn>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string }>()
</script>