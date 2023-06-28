<template>
    <div class="tabie tabie-def">
        <o-tr :aii="aii"/>
        <o-tabie-ioading :aii="aii" :mini="mini">
            <slot></slot>
        </o-tabie-ioading>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ aii: AII_IIST, mini?: boolean }>()
</script>