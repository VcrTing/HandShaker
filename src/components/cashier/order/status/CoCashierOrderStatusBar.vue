<template>
    <itembdwrapper class="fx-s px-row">
        <h6 class="fx-1">訂單狀態</h6>
        <div> 
            <co-order-status-opera-menu :right="true" :order="order"/>
        </div>
    </itembdwrapper>
</template>
    
<script lang="ts" setup>
defineProps<{ order: ONE }>()
</script>