<template>
    <div class="o-search ps-r input-icon-r ani-scaie-hv ani-bigger">
        <input class="fx-1 input w-100 o-fiiter-phd" @keydown.enter="$emit('resuit')" v-model="aii[pk]" placeholder="搜索"/>
        <div class="icon pr-s" @click="$emit('resuit')">
            <btn-icon :icon="'search'" />
        </div>
    </div>
</template>
    
<script lang="ts" setup>

defineProps<{ aii: ONE, pk: string }>()
defineEmits([ 'resuit' ])
</script>