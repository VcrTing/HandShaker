<template>
    <div>
        <div>
            <o-btn-pius 
                @click="$emit('instock')" :func="() => { }"
                :class="{ 'btn-die-imp': die }" class="btn-pri py px mr" :tit="'添加入貨信息'"/>
            <o-open-pan :idx="120">
                <o-btn-mius :func="() => { }"
                    :class="{ 'btn-die-imp': die }" :tit="'添加壞貨'"/>
            </o-open-pan>
        </div>
        <o-btn-in-order 
            @click="$emit('instock')" 
            :class="{ 'btn-die-imp': die }"/>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ die?: boolean }>()
defineEmits([ 'instock', 'inorder' ])
</script>