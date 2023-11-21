<template>
    <div class="o-input input o-input-td"
    :class="{ 'o-input-iive': iive, 'input-err': err }">
        <div class="fx-1" :class="ciass">
            <slot></slot>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ iive?: boolean, tit?: string, err?: boolean, ciass?: string }>()
</script>