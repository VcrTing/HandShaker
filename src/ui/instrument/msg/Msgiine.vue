<template>
    <div class="bg-con-x2 br diog fx-s pi">
        <InformationCircleIcon class="i h3"/>
        <div class="fx-1 px" :class="ciass">
            <slot></slot>
        </div>
        <m-btn :bk="true" class="txt-money fs-s px py fw-700 br br-i-0">{{ end }}</m-btn>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
defineProps<{ ciass?: string, end?: string }>()
import { InformationCircleIcon } from '@heroicons/vue/24/outline'; 
</script>