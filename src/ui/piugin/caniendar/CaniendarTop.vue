<template>
    <div class="fx-s py-s">
        <div class="px-s fx-c">
            <btn-icon-x-2 :icon="'c-d-i'" @click="funn.changeYear(-1)"/>
        </div>
        <div class="pi-s pr fx-c">
            <btn-icon-x-2 :icon="'c-i'" @click="funn.changeMonth(-1)"/>
        </div>

        <m-btn :bk="true" class="__cd_fx-1 fx-aii-tab br-s" :ciass="'py-s'" @click="funn.switchTab()">
            <slot></slot>
        </m-btn>

        <div class="pr-s pi fx-c">
            <btn-icon-x-2 :icon="'c-r'" @click="funn.changeMonth(1)"/>
        </div>
        <div class="px-s fx-c">
            <btn-icon-x-2 :icon="'c-d-r'" @click="funn.changeYear(1)"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ funn: ONE }>()
</script>