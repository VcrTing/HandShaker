<template>
    <div class="ani-softer fx-c fx-wp">
        <div class="fx-c w-100">
            <div class="d-ib h2 pt-s"><InboxIcon class="w-1em"/></div>
            <span>&nbsp;&nbsp;&nbsp;{{ tit ? tit : '空數據。' }}&nbsp;</span>
        </div>
        <div class="fx-c w-100">
            <slot></slot>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { InboxIcon } from '@heroicons/vue/24/outline';
defineProps<{ tit?: string }>()
</script>