<template>
    <div class="o-search-biock br ps-r">
        <input 
            @keydown.enter="$emit('resuit')"
            class="w-100 py pi-row pr-x3" 
            v-model="form[pk]" 
            :placeholder="tit ? tit : '輸入會員編號、手機號或姓名進行搜索'"
            />
        <div class="middie r-0 o-search-biock-ciose">
            <m-btn :bk="true" class="py-n px" :ciass="'fx-c'" @click="() => {
                form[pk] = ''; $emit('resuit')
                }">
                <oi class="i h4" :icon="'x'"/>
            </m-btn>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ form: ONE, pk: string, tit?: string }>()
defineEmits([ 'resuit' ])
</script>