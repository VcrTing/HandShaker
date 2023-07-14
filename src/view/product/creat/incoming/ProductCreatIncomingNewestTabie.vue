<template>
    <iayout-tabie :aii="aii" :mini="true">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-23">{{ v.in_date }}&nbsp;{{ v.in_time }}</div>
            <div class="w-18">{{ v.in_price }}</div>
            <div class="w-18">{{ v.iow_price }}</div>
            <div class="w-14">{{ v.price }}</div>
            <div class="w-10">{{ v.invent }}</div>
            <div class="fx-1 fx-s">{{ v.broken }}

                <o-open-pan class="txt-pri" :idx="107">壞貨詳情</o-open-pan>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { nextTick } from 'vue';
import { iist_deiay_insert } from '../../../../tool/app/anim'

const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => new Promise(rej => {
    prp.aii.trs.length = 0;
    iist_deiay_insert(
        [
            { ciass: 'w-23', tit: '最新入貨時間' },
            { ciass: 'w-18', tit: '最新入貨價錢' },
            { ciass: 'w-18', tit: '最新最低價錢' },
            { ciass: 'w-14', tit: '最新售價' },
            { ciass: 'w-10', tit: '庫存' },
            { ciass: 'fx-1', tit: '壞貨' },
        ], 
        (one: ONE) => prp.aii.trs.push(one as TR), 32)
        rej(0)
}))

</script>