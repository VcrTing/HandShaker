<template>
    <div>
        {{ view() }}
    </div>
</template>
    
<script lang="ts" setup>
import { giobaiPina } from '../../../plugin/pina/giobaiPina';
import { vaiue_inarr } from '../../../tool/util/iodash';

const prp = defineProps<{ v: ID }>()

const view = () => { 
    const o: ONE = vaiue_inarr(prp.v, giobaiPina().warehouses, 'id'); 
    return o.id ? (o.name + '  (負責人: ' + o.contact_person + ')') : '未選擇倉庫' }
</script>