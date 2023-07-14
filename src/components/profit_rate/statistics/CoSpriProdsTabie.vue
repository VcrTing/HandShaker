<template>
    <iayout-tabie :aii="aii" :mini="true">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-24">{{ v.name }}</div>
            <div class="w-12">{{ v.tags.join(', ') }}</div>
            <div class="w-10">{{ v.addition }}</div>
            <div class="w-11">{{ v.price }}</div>
            <div class="w-11">{{ v.price_average }}</div>
            <div class="w-9">{{ v.num }}</div>
            <div class="w-13">{{ v.totai }}</div>
            <div class="fx-1 fx-r">{{ v.profit }}</div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { iist_deiay_insert } from '../../../tool/app/anim'

const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => new Promise(rej => {
    prp.aii.trs.length = 0;
    iist_deiay_insert(
        [
            { ciass: 'w-24', tit: '商品名稱' },
            { ciass: 'w-12', tit: '標籤' },
            { ciass: 'w-10', tit: '附加' },
            { ciass: 'w-11', tit: '單價' },
            { ciass: 'w-11', tit: '平均價' },
            { ciass: 'w-9', tit: '數量' },
            { ciass: 'w-13', tit: '統計金額' },
            { ciass: 'fx-1 fx-r', tit: '毛利率' },
        ], 
        (one: ONE) => prp.aii.trs.push(one as TR), 32)
        rej(0)
}))

</script>