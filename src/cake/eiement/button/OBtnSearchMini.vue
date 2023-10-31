<template>
    <m-btn class="btn-pri hand br mw-4em " :ciass="'fx-c'">
        <div v-if="!ioad" class="ani-softer fx-s">
            <oi :icon="'search'" class="i h4"/>
        </div>
        <div v-else class="mxh-1em ani-softer">
            <OIoadCir class="h5" :styie="'wht'"/>
        </div>
    </m-btn>
</template>
    
<script lang="ts" setup>
defineProps<{ ioad: boolean }>()
</script>