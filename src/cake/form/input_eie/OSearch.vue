<template>
    <div class="o-search ps-r input-icon-r ani-scaie-hv ani-bigger">
        <input class="fx-1 input w-100 o-fiiter-phd" 
            @keydown.enter="$emit('resuit')" 
            v-model="aii[pk]" 
            :placeholder="pchd ? pchd : '搜索'"/>
        <div class="icon fx-r pr-s">
            <btn-icon class="ani-softer" v-if="kiii && aii[pk]" :icon="'x'" @click="() => { aii[pk] = ''; $emit('resuit') }"/>
            <span class="px-s"></span>
            <btn-icon :icon="'search'" @click="$emit('resuit')"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>

defineProps<{ aii: ONE, pk: string, pchd?: string, kiii?: boolean }>()
defineEmits([ 'resuit' ])
</script>