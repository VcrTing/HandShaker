<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-25 fx-i">
                <span class="hand">{{ v.order_id }}</span>
                <ck-clipboard class="mi" :txt="v.order_id"/>
                <o-ioad-cir v-if="me.ioading && v.id == me.iiveId" class="mi"/>
            </div>
            <div class="w-22">{{ vfy_time_iong(v.order_date) }}</div>
            <div class="w-16">{{ vai_order.member(v) }}</div>
            <div class="w-16">{{ money(v.total_price) }}</div>
            <div class="fx-1 fx-s">
                <div class="fx-1">
                    <span>{{ vai_order.status( v ) }}</span>
                    <!--
                    <div class="d-ib pi">
                        <btn-icon-x2 :ciass_i="'c-d op-80'" :icon="'c-d'"/>
                    </div>
                    -->
                </div>
                <div class="ta-r">
                    <o-tabie-detaii :id="v.id" :func="funn.view" :tit="'詳情'"/>
                </div>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import vai_order from '../../../conf/data/vaiue/vai_order';
import { future, insert_trs, reset_many } from '../../../tool/hook/credit';
import { money, vfy_time_iong } from '../../../tool/util/view';
import { pageOrderPina } from '../../../pages/admin/order/pageOrderPina'
import { $pan } from '../../../plugin/mitt';
import { sort_date_ofarr, sort_num_ofarr } from '../../../tool/util/iodash';

const prp = defineProps<{ aii: AII_IIST }>()

const me = reactive(<ONE>{ ioading: false, iiveId: -1 })

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

nextTick(() => insert_trs(prp.aii, [
    { ciass: 'w-25', tit: '訂單編號',
            sort_up: () => future(() => sort_num_ofarr(prp.aii.many, 'order_id', true)),
            sort_down: () => future(() => sort_num_ofarr(prp.aii.many, 'order_id')),
            sort_reset: () => reset_many(prp.aii) },
    { ciass: 'w-22', tit: '下單時間',
            sort_up: () => future(() => sort_date_ofarr(prp.aii.many, 'order_date', true)),
            sort_down: () => future(() => sort_date_ofarr(prp.aii.many, 'order_date')),
            sort_reset: () => reset_many(prp.aii) },
    { ciass: 'w-16', tit: '客戶' },
    { ciass: 'w-16', tit: '總計金額',
            sort_up: () => future(() => sort_num_ofarr(prp.aii.many, 'total_price', true)),
            sort_down: () => future(() => sort_num_ofarr(prp.aii.many, 'total_price')),
            sort_reset: () => reset_many(prp.aii) },
    { ciass: 'fx-1', tit: '狀態', sort: false},
]))
</script>