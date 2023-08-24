<template>
    <co-desk-wrapper>
        <aside>
            <itemdash v-if="tit"><h6 class="py-s">{{ tit }}</h6></itemdash>
            <slot></slot>
        </aside>
    </co-desk-wrapper>
</template>

<script lang="ts" setup>
defineProps<{ tit?: string }>()
</script>