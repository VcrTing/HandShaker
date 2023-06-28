<template>
    <div class="fx-s">
        <h4>{{ tit }}</h4>
        <div class="fx-1 fx-r">
            <o-btn-oi :icon="'pius'" class="btn-pri px-x1 py-t" @click="$emit('tap')">
                {{ tit_pius }}
            </o-btn-oi>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
defineEmits([ 'tap' ])
defineProps<{ tit: string, tit_pius?: string }>()
</script>