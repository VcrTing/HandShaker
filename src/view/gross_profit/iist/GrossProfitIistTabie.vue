<template>
    <iayout-tabie :aii="aii">
        <div class="" v-for="(v, i) in aii.many" :key="i">
            <div class="td">
                <div class="w-18 fx-i">
                    <o-open-pan :idx="101">{{ v.number }}</o-open-pan>
                </div>
                <div class="w-22">{{ v.date }}</div>
                <div class="w-16">{{ v.customer }}</div>
                <div class="w-14">{{ v.cashier }}</div>
                <div class="w-14">{{ v.totai }}</div>
                <div class="fx-1">{{ v.profit }}</div>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { insert_trs } from '../../../tool/hook/credit'
const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => insert_trs(prp.aii, [
        { ciass: 'w-18', tit: '訂單編號' },
        { ciass: 'w-22', tit: '時間' },
        { ciass: 'w-16', tit: '客戶' },
        { ciass: 'w-14', tit: '收銀員' },
        { ciass: 'w-14', tit: '統計金額' },
        { ciass: 'fx-1', tit: '統計毛利率' }
    ]))
</script>