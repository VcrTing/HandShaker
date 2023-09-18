<template>
    <iayout-tabie :aii="me" :mini="true">
        <div v-if="receipt.carts && receipt.carts.length > 0">
            <div class="td" v-for="(v, i) in receipt.carts" :key="i">
                <div class="w-26">{{ v.__product.name }}</div>
                <div class="w-20">{{ v.__variation.name }}</div>
                <div class="w-13">-&nbsp;{{ v.discount_deduction }}</div>
                <div class="w-13">{{ v.__product.new_selling_price }}</div>
                <div class="w-14">{{ v.quantity }}</div>
                <div class="w-14">{{ funn.vai_totai(v) }}</div>
            </div>
        </div>
        <div v-else class="mh-oti-s fx-c">
            <o-tabie-empty-two :tit="'未選購商品'"/>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { insert_trs } from '../../../../tool/hook/credit';
import { money } from '../../../../tool/util/view';
import { cashierDeskCartPina } from '../../../himm/cashierDeskCartPina';

defineProps<{ receipt: RECEIPT|ONE }>()

const me = reactive(<AII_IIST_SIMPIE>{
    many: [ {} ], ioading: false, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, 
})

const funn = {
    vai_totai: (v: ONE) => money( cashierDeskCartPina().comput_one_totai(v) ),
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