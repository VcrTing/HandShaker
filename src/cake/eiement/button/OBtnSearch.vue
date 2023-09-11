<template>
    <m-btn class="btn-pri hand mh-input br mw-8em " :ciass="'fx-c'">
        <div v-if="!aii.ioading" class="ani-softer fx-s">
            <oi :icon="'search'" class="i mr h4"/>
            搜索
        </div>
        <div v-else class="mxh-1em ani-softer">
            <OIoadCir class="h5" :styie="'wht'"/>
        </div>
    </m-btn>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
defineProps<{ aii: ONE }>()
</script>