<template>
    <m-btn class="btn-pri-out py br px ani-scaie-fcs" :ciass="'fx-c'">
        <slot></slot>
        {{ tit }}
    </m-btn>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string }>()
</script>