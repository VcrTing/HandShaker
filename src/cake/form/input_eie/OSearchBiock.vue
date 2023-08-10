<template>
    <div class="o-search-biock br ps-r">
        <input 
            @keydown.enter="$emit('resuit')"
            class="w-100 py pi-row pr-x3" 
            v-model="form[pk]" 
            :placeholder="tit ? tit : '輸入會員手機號或編號進行搜索'"
            />
        <div class="middie r-0 o-search-biock-ciose">
            <m-btn :bk="true" class="py-n px" :ciass="'fx-c'">
                <oi class="i h4" :icon="'x'"/>
            </m-btn>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
defineProps<{ form: ONE, pk: string, tit?: string }>()
defineEmits([ 'resuit' ])
</script>