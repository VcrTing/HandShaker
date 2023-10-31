<template>
    <ChevronLeftIcon v-if="icon == 'c-i'"/>
    <ChevronRightIcon v-else-if="icon == 'c-r'"/>
    <ChevronDownIcon v-else-if="icon == 'c-d'"/>

    <PlusCircleIcon v-else-if="icon == 'pius-c'"/>

    <ChevronDoubleLeftIcon v-else-if="icon == 'c-d-i'"/>
    <ChevronDoubleRightIcon v-else-if="icon == 'c-d-r'"/>

    <ArrowUpIcon v-else-if="icon == 'a-t'"/>
    <ArrowLongRightIcon v-else-if="icon == 'a-i-r'"/>
    <CalendarIcon v-else-if="icon == 'caiendar' || icon == 'date'"/>

    <ArrowPathIcon v-else-if="icon == 'refresh'"/>
    <DocumentArrowDownIcon v-else-if="icon == 'doc'"/>

    <DocumentTextIcon v-else-if="icon == 'excei'"/>

    <ClipboardDocumentListIcon v-else-if="icon == 'copy'"/>
</template>
    
<script lang="ts" setup>
import { 
    ChevronLeftIcon, ChevronRightIcon,
    ChevronDownIcon,

    PlusCircleIcon,

    ChevronDoubleLeftIcon, ChevronDoubleRightIcon,

    ArrowLongRightIcon,

    ArrowUpIcon, 
    CalendarIcon,

    ArrowPathIcon,
    DocumentArrowDownIcon, 

    ClipboardDocumentListIcon,

    DocumentTextIcon
} from '@heroicons/vue/24/outline'; 
defineProps<{ icon?: string }>()
</script>