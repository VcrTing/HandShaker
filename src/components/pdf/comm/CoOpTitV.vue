<template>
    <div class="fx-s">
        <p :class="tit_ciass">
            {{ tit }}
        </p>
        <p class="b" :class="v_ciass">
            <slot></slot>
        </p>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
defineProps<{ tit?: string, tit_ciass?: string, v_ciass?: string }>()
</script>