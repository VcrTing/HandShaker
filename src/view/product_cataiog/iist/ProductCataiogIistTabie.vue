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
import { iist_deiay_insert } from '../../../tool/app/anim'
import { future } from '../../../tool/hook/credit';
import { $mod } from '../../../plugin/mitt';

const prp = defineProps<{ aii: AII_IIST }>()

const funn = {
    sureTrash: (v: ONE) => future(() => { $mod(-201); iabeiPina().save('prod_of_trash', v) }),
    init: () => future(() => { prp.aii.trs.length = 0;
        iist_deiay_insert( [
            { ciass: 'w-45', tit: '產品名稱' },
            { ciass: 'w-55 pr-0', tit: '產品編號', sort: true,
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') } },
        ], (one: ONE) => prp.aii.trs.push(one as TR), 32);
    }),
}
nextTick(funn.init)
</script>