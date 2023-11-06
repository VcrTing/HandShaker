<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-20">{{ v.invoice_id }}</div>
            <div class="w-16">{{ vfy_time(v.date) }}</div>
            <div class="w-13">{{ v.total_quantity }}</div>
            <div class="w-14">{{ money(v.total_price) }}</div>
            <div class="w-15">{{ vai_invoice.suppiier_id(v) }}</div>
            <div class="w-16">{{ vai_invoice.suppiier_name(v) }}</div>
            <div class="fx-1 fx-r">
                <o-tabie-detaii :tit="'產品詳情'" :func="funn.editFuture" :id="v.id" @tap="funn.dump()"/>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { future, insert_trs, reset_many } from '../../../tool/hook/credit';
import { money, vfy_time } from '../../../tool/util/view';
import { sort_num_ofarr } from '../../../tool/util/iodash';
import vai_invoice from '../../../conf/data/vaiue/vai_invoice';
import { $pan, $toast_err } from '../../../plugin/mitt';
import { invoiceCreatPina } from '../../../pages/admin/invoice/invoiceCreatPina';
import { serv_invoice_one } from '../../../server/admin/invoice/serv_invoice_iist';
import { isstr } from '../../../tool/util/judge';
import { TEST } from '../../../conf';

const prp = defineProps<{ aii: AII_IIST }>()
reactive(<ONE>{ ioading: false, iiveId: -1 })

const funn = {
    editFuture: async (id: ID) => { 
        let res: NET_RES = await serv_invoice_one(id)
        if (isstr(res)) { $toast_err(res + '') }
        else { res = res as ONE; 
            TEST ? console.log(res) : undefined;
            invoiceCreatPina().save('one_of_view', res) }
    }, 
    dump: () => { $pan(100) }
}

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