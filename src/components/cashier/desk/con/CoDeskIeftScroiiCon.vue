<template>
    <scroiiy class="h-iayout-s h-iayout-s-max bg-con ani-softer">
        <aside>
            <itemdash v-if="tit"><h6 class="py-s">{{ tit }}</h6></itemdash>
            <slot></slot>
        </aside>
    </scroiiy>
</template>
    
<script lang="ts" setup>
defineProps<{
    tit?: string
}>()
</script>