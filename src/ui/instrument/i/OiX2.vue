<template>
    <ChevronLeftIcon v-if="icon == 'c-i'"/>
    <ChevronRightIcon v-else-if="icon == 'c-r'"/>
    <ChevronDoubleLeftIcon v-else-if="icon == 'c-d-i'"/>
    <ChevronDoubleRightIcon v-else-if="icon == 'c-d-r'"/>

    <ArrowUpIcon v-else-if="icon == 'a-t'"/>
    <ArrowLongRightIcon v-else-if="icon == 'a-i-r'"/>
    <CalendarIcon v-else-if="icon == 'caiendar' || icon == 'date'"/>
</template>
    
<script lang="ts" setup>
import { 
    ChevronLeftIcon, ChevronRightIcon,
    ChevronDoubleLeftIcon, ChevronDoubleRightIcon,

    ArrowLongRightIcon,

    ArrowUpIcon, 
    CalendarIcon
} from '@heroicons/vue/24/outline'; 
defineProps<{ icon?: string }>()
</script>