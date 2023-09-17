<template>
    <div class="w-100 ani-softer">
        <m-btn :bk="true" @click="$emit('tap')" class="btn-tab sub w-100 py px-t br ani-scaie-aii">
            <slot></slot>
        </m-btn>
    </div>
</template>
    
<script lang="ts" setup>
defineEmits([ 'tap' ])
</script>