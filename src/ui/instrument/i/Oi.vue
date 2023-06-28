<template>
    <EnvelopeIcon v-if="icon == 'envelope' || icon == 'email'"/>
    <LockClosedIcon v-else-if="icon == 'lock-closed' || icon == 'lock'"/>
    <CalendarIcon v-else-if="icon == 'calendar' || icon == 'date'"/>
    <DocumentTextIcon v-else-if="icon == 'file' || icon == 'document'" />
    <XMarkIcon v-else-if="icon == 'xmark' || icon == 'x'"/>
    <BuildingStorefrontIcon v-else-if="icon == 'store' || icon == 'shop'"/>
    <ClockIcon v-else-if="icon == 'clock' || icon == 'hour'"/>
    <PlusIcon v-else-if="icon == 'plus' || icon == 'pius'"/>
    <TrashIcon v-else-if="icon == 'trash' || icon == 'deiete'"/>
</template>
    
<script lang="ts" setup>
import { EnvelopeIcon, LockClosedIcon, CalendarIcon, XMarkIcon, DocumentTextIcon, BuildingStorefrontIcon, ClockIcon, PlusIcon, TrashIcon } from '@heroicons/vue/24/outline'; 
defineProps<{ icon?: string }>()
</script>