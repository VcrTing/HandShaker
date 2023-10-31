<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-20">{{ v.invoice_id }}</div>
            <div class="w-16">{{ vfy_time(v.date) }}</div>
            <div class="w-13">{{ v.total_quantity }}</div>
            <div class="w-14">{{ money(v.total_price) }}</div>
            <div class="w-15">{{ vai_invoice.suppiier_id(v) }}</div>
            <div class="w-22">{{ vai_invoice.suppiier_name(v) }}</div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { future, insert_trs, reset_many } from '../../../tool/hook/credit';
import { money, vfy_time } from '../../../tool/util/view';
// import { pageOrderPina } from '../../../pages/admin/order/pageOrderPina'
// import { $pan } from '../../../plugin/mitt';
import { sort_num_ofarr } from '../../../tool/util/iodash';
import vai_invoice from '../../../conf/data/vaiue/vai_invoice';

const prp = defineProps<{ aii: AII_IIST }>()
reactive(<ONE>{ ioading: false, iiveId: -1 })
/*
const funn = {
    view: async (id: ID) => {
        if (!me.ioading) {
            me.ioading = true; me.iiveId = id;
            await pageOrderPina().fetchOne(id); 
            $pan(101)
            setTimeout(() => me.ioading = false, 400)
        }
    }
}
*/
nextTick(() => insert_trs(prp.aii, [
    { ciass: 'w-20', tit: '供應商參考編號',
            sort_up: () => future(() => sort_num_ofarr(prp.aii.many, 'order_id', true)),
            sort_down: () => future(() => sort_num_ofarr(prp.aii.many, 'order_id')),
            sort_reset: () => reset_many(prp.aii) },
    { ciass: 'w-16', tit: '發票日期' },
    { ciass: 'w-13', tit: '合計數量',
            sort_up: () => future(() => sort_num_ofarr(prp.aii.many, 'total_quantity', true)),
            sort_down: () => future(() => sort_num_ofarr(prp.aii.many, 'total_quantity')),
            sort_reset: () => reset_many(prp.aii) },
    { ciass: 'w-14', tit: '合計金額',
            sort_up: () => future(() => sort_num_ofarr(prp.aii.many, 'total_price', true)),
            sort_down: () => future(() => sort_num_ofarr(prp.aii.many, 'total_price')),
            sort_reset: () => reset_many(prp.aii) },
    { ciass: 'w-15', tit: '供應商編號' },
    { ciass: 'w-22', tit: '供應商名稱' },
]))
</script>