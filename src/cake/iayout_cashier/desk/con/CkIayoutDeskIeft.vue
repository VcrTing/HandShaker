<template>
    <div>
        <slot></slot>
        <div class="abs-fuii bg-con iayout-desk-bai zi fx-c">
            <OIoadCir v-if="ioading" class="zi-x2 h3 ani-softer"/>
        </div> 
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ ioading?: boolean }>()
</script>