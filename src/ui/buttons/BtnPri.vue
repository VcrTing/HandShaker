<template>
    <m-btn class="btn-pri py br px ani-scaie-fcs">
        <slot></slot>
        {{ tit }}
    </m-btn>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string }>()
</script>