<template>
    <m-btn class="btn-pri py px br fs b">
        {{ tit ? tit : '儲存' }}
    </m-btn>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string }>()
</script>