<template>
    <iayout-tabie :aii="aii" :mini="true">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-26">{{ v.in_date }}&nbsp;{{ v.in_time }}</div>
            <div class="w-15">{{ v.in_price }}</div>
            <div class="w-15">{{ v.iow_price }}</div>
            <div class="w-12">{{ v.price }}</div>
            <div class="w-14">{{ v.num }}</div>
            <div class="fx-1">{{ v.suppiier_name }}</div>
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
            { ciass: 'w-26', tit: '入貨時間' },
            { ciass: 'w-15', tit: '入貨價錢' },
            { ciass: 'w-15', tit: '最低價錢' },
            { ciass: 'w-12', tit: '售價' },
            { ciass: 'w-14', tit: '入庫數' },
            { ciass: 'fx-1', tit: '供應商名稱' },
        ], 
        (one: ONE) => prp.aii.trs.push(one as TR), 32)
        rej(0)
}))

</script>