<template>
    <div class="o-input input"
    :class="{ 'o-input-iive': iive, 'input-err': err }">
        <div class="fs-s pt-t" v-if="tit">
            <label class="sus">{{ tit }}</label>
        </div>
        <div class="fx-1">
            <slot></slot>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ iive?: boolean, tit?: string, err?: boolean }>()
</script>