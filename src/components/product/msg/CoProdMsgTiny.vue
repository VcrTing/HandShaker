<template>
    <div class="px-row py">
        <div>產品編號:&nbsp;&nbsp;{{ num }}</div>
        <div class="fs-n sut">產品名稱:&nbsp;&nbsp;{{ named }}</div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{
    num?: string,
    named?: string
}>()
</script>