<template>
    <o-btn class="btn-pri py px">
        {{ tit ? tit : '儲存' }}
    </o-btn>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string }>()
</script>