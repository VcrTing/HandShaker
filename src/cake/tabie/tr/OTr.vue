<template>
    <div class="tr b ani-softer" v-if="aii.trs && aii.trs.length > 0">
        <div 
            class="pr-s"
            v-for="(v, i) in aii.trs" :key="i" 
            v-html="v.txt"
            :class="v.ciass">
        </div>
    </div>
    <div v-else class="tr ani-softer">

    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ aii: ONE }>()
</script>