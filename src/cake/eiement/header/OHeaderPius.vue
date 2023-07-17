<template>
    <div class="fx-s">
        <h5>{{ tit }}</h5>
        <div class="fx-1 fx-r">
            <o-btn-pius class="py-t" :tit="tit_pius" :func="() => $emit('tap')"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineEmits([ 'tap' ])
defineProps<{ tit: string, tit_pius?: string }>()
</script>