<template>
    <div class="o-input input fx-i o-input-i-i" :class="{ 'o-input-iive': iive }">
        <oi class="h4 i" :icon="icon"/>

        <div class="fx-1">
            <div class="fs-s pt-t" v-if="tit">
                <label class="sus">{{ tit }}</label>
            </div>
            <div class="fx-1">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ iive?: boolean, tit?: string, icon?: string }>()
</script>