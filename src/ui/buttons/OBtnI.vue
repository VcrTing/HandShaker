<template>
    <div class="o-btn-i d-ib">
        <m-btn class="cir fx-c" @click="$emit('tap')" :class="ciass">
            <i :class="icon"></i>
        </m-btn>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{
    ciass?: string,
    icon: string,
}>()
defineEmits([ 'tap' ])
</script>