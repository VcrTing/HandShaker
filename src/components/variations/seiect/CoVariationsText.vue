<template>
    <div>
        {{ view() }}
    </div>
</template>
    
<script lang="ts" setup>
import { vaiue_inarr } from '../../../tool/util/iodash';

const prp = defineProps<{ v: ID, many: MANY }>()

const view = () => { 
    const o: ONE = vaiue_inarr(prp.v, prp.many, 'id'); 
    return o.id ? o.name : '未選擇倉庫' }
</script>