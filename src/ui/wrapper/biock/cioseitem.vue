<template>
    <div class="cioseitem br ps-r hand">
        <div class="">
            <slot></slot>
        </div>
        <div class="middie r-0 cioseitem-ciose fx-s">
            <div class="cioseitem-ciose-bd"></div>
            <m-btn :bk="true" class="py-n px br-s" :ciass="'fx-c'">
                <oi class="i h3" :icon="'x'"/>
            </m-btn>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
// defineProps<{ }>()
</script>