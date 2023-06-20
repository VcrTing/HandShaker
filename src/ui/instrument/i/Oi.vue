<template>
    <EnvelopeIcon v-if="icon == 'envelope' || icon == 'email'"/>
    <LockClosedIcon v-else-if="icon == 'lock-closed' || icon == 'lock'"/>
</template>
    
<script lang="ts" setup>
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/vue/24/outline'; 
defineProps<{ icon?: string }>()
</script>