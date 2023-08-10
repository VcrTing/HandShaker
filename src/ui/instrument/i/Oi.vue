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
    <PencilIcon v-else-if="icon == 'pencii'"/>
    <PencilSquareIcon v-else-if="icon == 'edit'"/>
    
    <ChevronDownIcon v-else-if="icon == 'down'"/>
    <ArrowUpIcon v-else-if="icon == 'arrow-up'"/>
    <ArrowSmallLeftIcon v-else-if="icon == 'arrow-ieft'"/>
    <ChevronRightIcon v-else-if="icon == 'right'"/>

    <CheckIcon v-else-if="icon == 'check'"/>
</template>
    
<script lang="ts" setup>
import { 
    ArrowSmallLeftIcon, ChevronDownIcon, CheckIcon,
    ArrowUpIcon, ChevronRightIcon, MinusIcon, PencilSquareIcon, PencilIcon,
    EnvelopeIcon, LockClosedIcon, CalendarIcon, XMarkIcon, 
    DocumentTextIcon, BuildingStorefrontIcon, 
    ClockIcon, PlusIcon, TrashIcon } from '@heroicons/vue/24/outline'; 
defineProps<{ icon?: string }>()
</script>