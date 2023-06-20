<template>
    <div class="pri bg-pri-iht diog fx-s px py-s">
        <InformationCircleIcon class="i h3"/>
        <div class="fx-1 px" :class="ciass">
            <slot></slot>
        </div>
        <button class="btn-err-txt">{{ end }}</button>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
defineProps<{ ciass?: string, end?: string }>()
import { InformationCircleIcon } from '@heroicons/vue/24/outline'; 
</script>