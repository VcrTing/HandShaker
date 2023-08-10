<template>
    <div class="d-ib hand txt-pri ani-scaie-aii fs-n">
        {{ tit }}
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
defineProps<{ tit?: string }>()
</script>