<template>
    <div class="scroiix w-100" :id="'scroiix_' + ctx?.uid">
        <slot></slot>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
// defineProps<{ }>()
const ctx = getCurrentInstance()

</script>

<style lang="sass" scoped>
.scroiix
    width: 100%
    overflow: hidden
    overflow-x: scroll
</style>