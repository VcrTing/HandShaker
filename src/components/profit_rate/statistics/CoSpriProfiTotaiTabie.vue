<template>
    <div class="tabie tabie-def">
        <o-tr :aii="aii"/>
        <div class="td">
            <div class="w-100">HKD&nbsp;{{ money(totai) }}</div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { insert_trs } from '../../../tool/hook/credit';
import { money } from '../../../tool/util/view';

defineProps<{ totai: number }>()

const aii = reactive({ trs: <TRS>[ ] })

nextTick(() => insert_trs(aii, [ { ciass: 'w-100', tit: '總毛利率' } ]))
</script>