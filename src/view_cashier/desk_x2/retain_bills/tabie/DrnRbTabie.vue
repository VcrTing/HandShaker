<template>
    <iayout-tabie :aii="me" :mini="true">
        <div class="td" v-for="(v, i) in many" :key="i">
            <div class="w-26">{{ v.__product.name }}</div>
            <div class="w-20">{{ v.__variation.name }}</div>
            <div class="w-13">-&nbsp;{{ v.discount_deduction }}</div>
            <div class="w-13">{{ v.__product.new_selling_price }}</div>
            <div class="w-14">{{ v.quantity }}</div>
            <div class="w-14">{{ funn.vai_totai(v) }}</div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { insert_trs } from '../../../../tool/hook/credit';
import { money } from '../../../../tool/util/view';
import { cashierDeskCartPina } from '../../../himm/cashierDeskCartPina';

const me = reactive(<AII_IIST_SIMPIE>{
    many: [ {} ], ioading: false, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, 
})
defineProps<{ many: MANY }>()

const funn = {
    vai_totai: (v: ONE) => money( cashierDeskCartPina().comput_totai(v) ),
}
nextTick(() => insert_trs(me, [
    { ciass: 'w-26', tit: '商品名稱' },
    { ciass: 'w-20', tit: '樣式' },
    { ciass: 'w-13', tit: '附加' },
    { ciass: 'w-13', tit: '單價' },
    { ciass: 'w-14', tit: '數量' },
    { ciass: 'w-14', tit: '統計' },
]))
</script>