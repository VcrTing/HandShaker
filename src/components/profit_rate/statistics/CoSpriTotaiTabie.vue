<template>
    <div class="tabie tabie-def">
        <o-tr :aii="aii"/>
        <div class="td"><div class="w-100">HKD&nbsp;1500.00</div></div>
    </div>
</template>
    
<script lang="ts" setup>
import { iist_deiay_insert } from '../../../tool/app/anim';

const aii = reactive({ trs: <TRS>[ ] })

nextTick(() => new Promise(rej => { 
    aii.trs.length = 0;
    iist_deiay_insert( [ { ciass: 'w-100', tit: '統計金額' }, ], 
    (one: ONE) => aii.trs.push(one as TR), 32); rej(0)
}))
</script>