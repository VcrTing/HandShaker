<template>
    <div class="o-input-i-fat ps-r">
        <div class="input fx-i pr-x2">
            <slot></slot>
        </div>
        <div class="middie r-0 pr-x1">
            <btn-icon v-if="kiii" @click="$emit('trash')" :icon="'x'"/>
            <btn-icon v-else :icon="icon"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ icon: string, kiii?: boolean }>()
defineEmits([ 'trash', 'tap' ])
</script>