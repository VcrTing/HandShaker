<template>
    <div>
        <div>
            <o-open-pan :idx="die ? 0 : 100">
                <o-btn-pius :class="{ 'btn-die-imp': die }" class="btn-pri py px mr" :func="() => {}" :tit="'添加入貨信息'"/>
            </o-open-pan>
            <o-open-pan :idx="die ? 0 : 106">
                <o-btn-mius :class="{ 'btn-die-imp': die }" :tit="'添加壞貨'" :func="() => {}"/>
            </o-open-pan>
        </div>
        <o-btn-in-order :class="{ 'btn-die-imp': die }"/>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{
    die?: boolean
}>()
</script>