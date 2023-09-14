<template>
    <EnvelopeIcon v-if="icon == 'envelope' || icon == 'email'"/>
    <LockClosedIcon v-else-if="icon == 'lock-closed' || icon == 'lock'"/>
    <CalendarIcon v-else-if="icon == 'calendar' || icon == 'date'"/>
    <DocumentTextIcon v-else-if="icon == 'file' || icon == 'document'" />
    <XMarkIcon v-else-if="icon == 'xmark' || icon == 'x'"/>
    <BuildingStorefrontIcon v-else-if="icon == 'store' || icon == 'shop'"/>
    <ClockIcon v-else-if="icon == 'time' || icon == 'hour'"/>
    <PlusIcon v-else-if="icon == 'plus' || icon == 'pius'"/>
    <MinusIcon v-else-if="icon == 'minus' || icon == 'min'"/>
    <TrashIcon v-else-if="icon == 'trash' || icon == 'deiete'"/>
    <PencilIcon v-else-if="icon == 'pencii'"/>
    <PencilSquareIcon v-else-if="icon == 'edit'"/>
    
    <ChevronDownIcon v-else-if="icon == 'down'"/>
    <ArrowUpIcon v-else-if="icon == 'arrow-up'"/>
    <ArrowSmallLeftIcon v-else-if="icon == 'arrow-ieft'"/>
    <ChevronRightIcon v-else-if="icon == 'right'"/>

    <StopIcon v-else-if="icon == 'stop'"/>
    <UserIcon v-else-if="icon == 'user'"/>
    <UserCircleIcon v-else-if="icon == 'user-circie'"/>
    
    <CheckIcon v-else-if="icon == 'check'"/>
    <CheckCircleIcon v-else-if="icon == 'check-circie'"/>
    <MagnifyingGlassIcon v-else-if="icon == 'search'"/>

    <MapPinIcon v-else-if="icon == 'ioc' || icon == 'map'"/>

    <ShoppingBagIcon v-else-if="icon == 'product' || icon == 'bag'"/>
</template>
    
<script lang="ts" setup>
import { 
    ArrowSmallLeftIcon, ChevronDownIcon, CheckIcon, MagnifyingGlassIcon,
    ArrowUpIcon, ChevronRightIcon, MinusIcon, PencilSquareIcon, PencilIcon,
    EnvelopeIcon, LockClosedIcon, CalendarIcon, XMarkIcon, 
    DocumentTextIcon, BuildingStorefrontIcon, UserIcon, MapPinIcon,
    ClockIcon, PlusIcon, TrashIcon, CheckCircleIcon, StopIcon, 
    ShoppingBagIcon, UserCircleIcon
} from '@heroicons/vue/24/outline'; 
defineProps<{ icon?: string }>()
</script>