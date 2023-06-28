<template>
    <div class="tr b ani-softer" v-if="trs && trs.length > 0">
        <div 
            class="pr-s fx-i"
            :key="i" 
            v-for="(v, i) in trs"
            :class="v.ciass">
            <span>{{ v.tit }}</span>
        </div>
    </div>
    <div v-else class="tr ani-softer"></div>
</template>
    
<script lang="ts" setup>
defineProps<{ trs: TRS }>()
</script>