<template>
    <div class="tabie tabie-def">
        <o-tr :aii="aii"/>
        <div class="td">
            <div class="w-24">單品減價</div><div class="fx-1">-10.0&nbsp;HKD</div>
        </div>
        <div class="td">
            <div class="w-24">全單減價</div><div class="fx-1">-90.0&nbsp;HKD</div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { iist_deiay_insert } from '../../../tool/app/anim';

const aii = reactive({ trs: <TRS>[ ] })

nextTick(() => new Promise(rej => { 
    aii.trs.length = 0;
    iist_deiay_insert( [ { ciass: 'w-100', tit: '優惠類別' }, ], 
    (one: ONE) => aii.trs.push(one as TR), 32); rej(0)
}))
</script>