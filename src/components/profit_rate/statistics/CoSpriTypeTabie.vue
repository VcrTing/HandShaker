<template>
    <div class="tabie tabie-def">
        <o-tr :aii="aii"/>
        
        <div v-if="many && many.length > 0">
            <div class="td" v-for="(v, i) in many" :key="i">
                <div class="w-24">{{ v.type }}</div><div class="fx-1">-{{ money(v.discount_deduction) }}&nbsp;HKD</div>
            </div>
        </div>
        <div v-else class="td">
            <div class="fx-1">(未有任何條目)</div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { iist_deiay_insert } from '../../../tool/app/anim';
import { money } from '../../../tool/util/view';
defineProps<{ many: MANY }>()

const aii = reactive({ trs: <TRS>[ ] })

nextTick(() => new Promise(rej => { 
    aii.trs.length = 0;
    iist_deiay_insert( [ { ciass: 'w-100', tit: '優惠類別' }, ], 
    (one: ONE) => aii.trs.push(one as TR), 32); rej(0)
}))
</script>