<template>
    <iayout-tabie :aii="aii" :mini="true">
        <div class="td" v-for="(v, i) in many" :key="i">
            <div class="w-20">{{ vai_cashier_cart.product_name(v) }}</div>
            <div class="w-15">{{ vai_cashier_cart.variation(v) }}</div>
            <div class="w-12">-{{ money(pina.comput_one_discount(v)) }}</div>
            <div class="w-11">{{ vai_cashier_cart.product_price(v) }}</div>
            <div class="w-11">{{ vai_cashier_cart.proudct_price_restock(v) }}</div>
            <div class="w-9">{{ v.quantity }}</div>
            <div class="w-13">{{ money(pina.comput_num_x_price(v)) }}</div>
            <div class="fx-1 fx-r">{{ money(pina.comput_one_profit(v)) }}</div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import vai_cashier_cart from '../../../conf/data/vai_cashier_cart';
import { insert_trs } from '../../../tool/hook/credit'
import { money } from '../../../tool/util/view';
import { cashierDeskCartPina } from '../../../view_cashier/himm/cashierDeskCartPina';

const pina = cashierDeskCartPina()

const prp = defineProps<{ aii: AII_IIST, many: MANY }>()

nextTick(() => insert_trs(prp.aii, [
    { ciass: 'w-20', tit: '商品名稱' },
    { ciass: 'w-15', tit: '樣式' },
    { ciass: 'w-12', tit: '附加' },
    { ciass: 'w-11', tit: '單價' },
    { ciass: 'w-11', tit: '平均價' },
    { ciass: 'w-9', tit: '數量' },
    { ciass: 'w-13', tit: '統計金額' },
    { ciass: 'fx-1 fx-r', tit: '毛利率' },
]))
</script>