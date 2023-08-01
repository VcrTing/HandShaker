<template>
    <div class="o-search ps-r input-icon-r ani-scaie-fcs">
        <input class="fx-1 input w-100 o-fiiter-phd" @keydown.enter="$emit('resuit')" v-model="aii[pk]" placeholder="搜索"/>
        <MagnifyingGlassIcon class="i h4"/>
    </div>
</template>
    
<script lang="ts" setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

defineProps<{ aii: ONE, pk: string }>()
defineEmits([ 'resuit' ])
</script>