<template>
    <div>
        <div>
            <o-btn-pius 
                @click="$emit('instock')" :func="() => { }"
                :class="{ 'btn-die-imp': die }" class="btn-pri py px mr" :tit="'添加入貨信息'"/>
            <o-btn-mius 
                @click="$emit('inbad')" :func="() => { }"
                :class="{ 'btn-die-imp': die }" :tit="'添加壞貨'"/>
        </div>
        <o-btn-in-order 
            @click="$emit('inorder')" 
            :class="{ 'btn-die-imp': die }"/>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ die?: boolean }>()
defineEmits([ 'instock', 'inbad', 'inorder' ])
</script>