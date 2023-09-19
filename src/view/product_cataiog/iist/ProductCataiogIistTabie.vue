<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-45">{{ v.name }}</div>
            <div class="w-55 fx-s">
                <div>{{ v.product_id }}</div>
                <o-tabie-trash @click="funn.sureTrash(v)">移除</o-tabie-trash>
            </div>
        </div>

    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { iabeiPina } from '../../../plugin/pina/iabeiPina';
import { future, insert_trs } from '../../../tool/hook/credit';
import { $mod } from '../../../plugin/mitt';

const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => insert_trs(prp.aii, [
    { ciass: 'w-45', tit: '產品名稱' },
    { ciass: 'w-55 pr-0', tit: '產品編號', sort: true,
        sort_up: () => { },
        sort_down: () => { },
        sort_reset: () => { } },
]))

const funn = { sureTrash: (v: ONE) => future(() => { $mod(-201); iabeiPina().save('prod_of_trash', v) }) }
</script>