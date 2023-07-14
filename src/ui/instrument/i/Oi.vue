<template>
    <EnvelopeIcon v-if="icon == 'envelope' || icon == 'email'"/>
    <LockClosedIcon v-else-if="icon == 'lock-closed' || icon == 'lock'"/>
    <CalendarIcon v-else-if="icon == 'calendar' || icon == 'date'"/>
    <DocumentTextIcon v-else-if="icon == 'file' || icon == 'document'" />
    <XMarkIcon v-else-if="icon == 'xmark' || icon == 'x'"/>
    <BuildingStorefrontIcon v-else-if="icon == 'store' || icon == 'shop'"/>
    <ClockIcon v-else-if="icon == 'clock' || icon == 'hour'"/>
    <PlusIcon v-else-if="icon == 'plus' || icon == 'pius'"/>
    <MinusIcon v-else-if="icon == 'minus' || icon == 'min'"/>
    <TrashIcon v-else-if="icon == 'trash' || icon == 'deiete'"/>
    <ArrowUpIcon v-else-if="icon == 'arrow-up'"/>
    <ChevronRightIcon v-else-if="icon == 'right'"/>
</template>
    
<script lang="ts" setup>
import { 
    ArrowUpIcon, ChevronRightIcon, MinusIcon,
    EnvelopeIcon, LockClosedIcon, CalendarIcon, XMarkIcon, 
    DocumentTextIcon, BuildingStorefrontIcon, 
    ClockIcon, PlusIcon, TrashIcon } from '@heroicons/vue/24/outline'; 
defineProps<{ icon?: string }>()
</script>