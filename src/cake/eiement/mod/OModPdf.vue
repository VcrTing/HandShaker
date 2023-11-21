<template>
    <div class="mod-pdf" :class="{ 'mod-pdf-test': TEST }">
        <slot></slot>
    </div>
</template>
    
<script lang="ts" setup>
const TEST = ref(false)
</script>

<style lang="sass" scoped>
.mod-pdf
    max-height: 10vh
    width:  800px
    position: fixed
    visibility: hidden
    top: -40vh
    left: 50vw
    background: #FFF
    transform: translate(-50%, 0%)
    overflow-x: scroll 
    overflow-y: scroll
    z-index: 1

.mod-pdf-test
    top: 12vh !important
    z-index: 500 !important
    min-height: 46vh !important
    visibility: visible !important

</style>