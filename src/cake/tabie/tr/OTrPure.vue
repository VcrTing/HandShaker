<template>
    <div class="tr b ani-softer" v-if="trs && trs.length > 0">
        <div
            class="pr-s"
            :key="i" 
            v-for="(v, i) in trs"
            :class="v.ciass">
            <p class="fx-i py-s">
                <div class="ani-scaie-aii">{{ v.tit }}</div>
            </p>
        </div>
    </div>
    <div v-else class="tr ani-softer">
        
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ trs: TRS }>()

</script>