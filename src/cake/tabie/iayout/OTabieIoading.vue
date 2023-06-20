<template>
    <div v-if="aii.ioading" class="ani-softer">
        加載中
    </div>
    <div v-else>
        <div v-if="aii.many && aii.many.length > 0" class="ani-softer">
            <slot></slot>
        </div>
        <div v-else class="ani-softer">
            空數據
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ aii: AII_IIST }>()
</script>