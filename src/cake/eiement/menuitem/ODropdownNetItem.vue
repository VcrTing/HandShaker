<template>
    <button
        :class="{ 'dropdown-choise fw-700': iive }"
        class="fx-aii-tab fx-s"
    >
        <div class="fx-i fx-1"><slot></slot></div>
        <div class="mw-1em fx-r ani-softer" v-if="iive">
            <o-ioad-cir v-if="aii.ioading" class="ani-softer"/>
            <oi v-if="!aii.ioading" class="i h4 ani-fade-b" :icon="'check'"/>
        </div>
    </button>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
defineProps<{ aii: ONE, iive?: boolean }>()
</script>