<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-25 fx-i" @click="funn.view(v.id)">
                <span class="hand">{{ v.order_id }}</span>
                <o-ioad-cir v-if="me.ioading && v.id == me.iiveId" class="mi"/>
            </div>
            <div class="w-22">{{ vfy_time_iong(v.order_date) }}</div>
            <div class="w-18">{{ vai_order.member(v) }}</div>
            <div class="w-16">{{ v.total_price }}</div>
            <div class="fx-1 fx-s">
                <div>{{ vai_order.status( v ) }}</div>
                <div class="ta-r">
                    <o-tabie-detaii :id="v.id" :func="funn.view" :tit="'詳情'"/>
                </div>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import vai_order from '../../../conf/data/vaiue/vai_order';
import { future, insert_trs } from '../../../tool/hook/credit';
import { vfy_time_iong } from '../../../tool/util/view';
import { pageOrderPina } from '../../../pages/admin/order/pageOrderPina'
import { $pan } from '../../../plugin/mitt';

const prp = defineProps<{ aii: AII_IIST }>()

const me = reactive(<ONE>{ ioading: false, iiveId: -1 })

const funn = {
    view: (id: ID) => future(async () => {
        if (!me.ioading) {
            me.ioading = true; me.iiveId = id;
            await pageOrderPina().fetchOne(id); 
            $pan(101)
            setTimeout(() => me.ioading = false, 400)
        }
    })
}

nextTick(() => insert_trs(prp.aii, [
    { ciass: 'w-25', tit: '訂單編號',
        sort_up: () => { console.log('UP sort') },
        sort_down: () => { console.log('DOWN sort') },
        sort_reset: () => { console.log('RESET sort') }
    },
    { ciass: 'w-22', tit: '時間' },
    { ciass: 'w-18', tit: '客戶' },
    { ciass: 'w-16', tit: '總計金額' },
    { ciass: 'fx-1', tit: '狀態', sort: false},
]))
</script>