<template>
    <iayout-tabie :aii="aii" :mini="true">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-27">{{ v.name }}</div>
            <div class="w-17">{{ v.tags }}</div>
            <div class="w-14">{{ v.addition }}</div>
            <div class="w-16">{{ v.price }}</div>
            <div class="w-13">{{ v.num }}</div>
            <div class="fx-1">{{ v.total }}</div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { iist_deiay_insert } from '../../../../tool/app/anim'
import { future } from '../../../../tool/hook/credit'

const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => future(() => {
    prp.aii.trs.length = 0;
    iist_deiay_insert( [
            { ciass: 'w-27', tit: '商品名稱' },
            { ciass: 'w-17', tit: '標籤' },
            { ciass: 'w-14', tit: '附加' },
            { ciass: 'w-16', tit: '單價'
            },
            { ciass: 'w-13', tit: '數量' },
            { ciass: 'fx-1', tit: '統計金額'
            }
        ], 
        (one: ONE) => prp.aii.trs.push(one as TR), 32)
}))

</script>