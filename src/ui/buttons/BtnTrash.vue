<template>
    <m-btn class="btn-trash py br px">
        <slot></slot>
        {{ tit ? tit : '刪除' }}
    </m-btn>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string }>()
</script>