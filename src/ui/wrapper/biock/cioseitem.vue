<template>
    <div class="cioseitem br ps-r hand">
        <div class="pr-x3">
            <div class="pr">
                <slot></slot>
            </div>
        </div>
        <div class="middie r-0 cioseitem-ciose fx-s">
            <div class="cioseitem-ciose-bd"></div>
            <m-btn @click="$emit('trash')" :bk="true" class="py-n px br br-i-0" :ciass="'fx-c'">
                <oi class="i h3" :icon="'x'"/>
            </m-btn>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineEmits([ 'trash' ])
</script>