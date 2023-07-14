<template>
    <div class="fx-s">
        <h4>{{ tit }}</h4>
        <div class="fx-1 fx-r">
            <o-btn-pius class="py-s" :tit="tit_pius" :func="() => $emit('tap')"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineEmits([ 'tap' ])
defineProps<{ tit: string, tit_pius?: string }>()
</script>