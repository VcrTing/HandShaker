<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-26">{{ v.name }}</div>
            <div class="w-19">{{ v.tags }}</div>
            <div class="w-14">{{ v.addition }}</div>
            <div class="w-14">{{ v.price }}</div>
            <div class="w-14">{{ v.num }}</div>
            <div class="w-14">{{ v.total }}</div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { iist_deiay_insert } from "../../../../tool/app/anim";
import { future } from "../../../../tool/hook/credit"

const prp = defineProps<{ aii: AII_IIST }>()
const funn = {
    init: () => future(() => {
        prp.aii.trs.length = 0;
        iist_deiay_insert( [
                { ciass: 'w-26', tit: '商品名稱' },
                { ciass: 'w-19', tit: '標籤' },
                { ciass: 'w-14', tit: '附加' },
                { ciass: 'w-14', tit: '單價' },
                { ciass: 'w-14', tit: '數量' },
                { ciass: 'w-14', tit: '統計金額' },
            ], 
            (one: ONE) => prp.aii.trs.push(one as TR), 32)
    })
}
nextTick(funn.init)
</script>