<template>
    <div class="tabie tabie-def">
        <o-tr :aii="aii"/>
        <div v-if="payments && payments.length > 0">
            <div class="td" v-for="(v, i) in payments" :key="i">
                <div class="w-28">{{ v.name }}</div>
                <div class="fx-1">{{ money(v.price) }}&nbsp;HKD</div>
            </div>
        </div>
        <div v-else class="td">
            <div class="fx-1">(未有任何條目)</div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { insert_trs } from '../../../tool/hook/credit';
import { money } from '../../../tool/util/view';

defineProps<{ payments: MANY }>()

const aii = reactive({ trs: <TRS>[ ] })

nextTick(() => insert_trs(aii, [ { ciass: 'w-100', tit: '付款方式' } ]))
</script>