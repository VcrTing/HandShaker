<template>
    <div class="w-100 ani-softer">
        <m-btn :bk="true" @click="$emit('tap')" :class="{ 'btn-die-imp': disabied }" class="btn-tab sub w-100 py px-t br ani-scaie-aii">
            <slot></slot>
        </m-btn>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{
    disabied?: boolean
}>()
defineEmits([ 'tap' ])
</script>