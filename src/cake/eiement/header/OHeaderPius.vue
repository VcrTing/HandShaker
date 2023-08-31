<template>
    <div class="fx-s">
        <h5>{{ tit }}</h5>
        <div class="fx-1 fx-r">
            <o-btn-pius :class="{ 'btn-die-imp': die }"
                class="fw-300 py-t" :tit="tit_pius" :func="() => $emit(die ? 'die' : 'tap')"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineEmits([ 'tap', 'die' ])
defineProps<{ tit: string, tit_pius?: string, die?: boolean }>()
</script>