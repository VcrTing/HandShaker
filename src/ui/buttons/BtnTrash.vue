<template>
    <m-btn class="btn-trash py br px ani-scaie-fcs">
        <slot></slot>
        {{ tit ? tit : '刪除' }}
    </m-btn>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string }>()
</script>