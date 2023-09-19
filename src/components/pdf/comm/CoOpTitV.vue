<template>
    <div class="fx-s fx-t ih-pdf-son-x1">
        <p :class="tit_ciass" class="mw-5em">
            {{ tit }}
        </p>
        <p class="b ta-r fx-1 eiip-2" :class="v_ciass">
            <slot></slot>
        </p>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ tit?: string, tit_ciass?: string, v_ciass?: string }>()
</script>