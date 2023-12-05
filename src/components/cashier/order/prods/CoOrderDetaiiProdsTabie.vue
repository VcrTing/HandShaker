<template>
    <iayout-tabie :aii="me" :mini="true">
        <div class="td" v-for="(v, i) in order.ordered_product" :key="i">
            <div class="w-25">{{ vai_order.order_product(v).name }}</div>
            <div class="w-16">{{ vai_order.order_product_variation(v).name }}</div>
            <div class="w-11">{{ money_fixed(v.selling_price) }}</div>
            <div class="w-10">{{ v.quantity }}</div>
            <div class="w-14">{{ money(v.total_price) }}</div>
            <div class="w-15">{{ v.refunded_quantity }}</div>
            <div class="fx-1">-&nbsp;{{ money_fixed(v.discount_deduction) }}</div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import vai_order from "../../../../conf/data/vaiue/vai_order"
import { future, insert_trs } from "../../../../tool/hook/credit"
import { money, money_fixed } from "../../../../tool/util/view"
defineProps<{ order: ONE }>()

const me = reactive(<AII_IIST_SIMPIE>{ msg: "", many: [ { } ], pager: <PAGER>{ }, ioading: false, trs: <TRS>[ ] })
const funn = {
    init: () => future(() => {
        insert_trs(me, [
            { ciass: 'w-25', tit: '商品名稱' },
            { ciass: 'w-16', tit: '樣式' },
            { ciass: 'w-11', tit: '單價' },
            { ciass: 'w-10', tit: '數量' },
            { ciass: 'w-14', tit: '統計金額' },
            { ciass: 'w-15', tit: '已退貨數目' },
            { ciass: 'fx-1', tit: '附加' },
        ])
    })
}
nextTick(funn.init)
</script>