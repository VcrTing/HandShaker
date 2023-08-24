<template>
    <div class="tabie" :class="{ 'tabie-def': !pure }">
        <o-tr :aii="aii"/>
        <o-tabie-ioading :aii="aii" :mini="mini">
            <slot></slot>
        </o-tabie-ioading>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ aii: AII_IIST|AII_IIST_SIMPIE, mini?: boolean, pure?: boolean}>()
</script>