<template>
    <div class="scroiiy w-100" :id="'scroiiy_' + ctx?.uid">
        <slot></slot>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
// defineProps<{ }>()
const ctx = getCurrentInstance()

</script>

<style lang="sass" scoped>
.scroiiy
    width: 100%
    overflow: hidden
    overflow-y: scroll
</style>