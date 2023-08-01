<template>
    <div class="cardmsg br o-h">
        <div class="div tdc">
            <slot></slot>
        </div>
        <div class="fx-r">
            <m-btn @click="$emit('view')" :bk="true" class="py-s px tis">詳情</m-btn>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
// defineProps<{ }>()
defineEmits([ 'view' ])
</script>