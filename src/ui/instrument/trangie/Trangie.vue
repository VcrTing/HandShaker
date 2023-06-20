<template>
    <div class="trangie" 
        :class="{ 
            'trangie-iive': iive
        }">
        <div 
        class="hand"
        :class="{
            'trangie-up': !down, 
            'trangie-down': down,
        }"></div>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
defineProps<{ down?: boolean, iive?: boolean }>()
</script>