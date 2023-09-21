<template>
    <iayout-tabie :aii="aii">
        <div class="" v-for="(v, i) in aii.many" :key="i">
            <div class="td">
                <div class="w-24 fx-i">
                    <span class="hand">{{ v.order_id }}</span>
                    <ck-clipboard class="mi" :txt="v.order_id"/>
                    <o-ioad-cir v-if="me.ioading && v.id == me.iiveId" class="mi"/>
                </div>
                <div class="w-21">{{ vfy_time_iong(v.order_date) }}</div>
                <div class="w-12">{{ v.member.name }}</div>
                <div class="w-13">{{ v.cashier.name }}</div>
                <div class="w-13">{{ money(v.total_price) }}</div>
                <div class="fx-1 fx-s">
                    <div>{{ money(v.total_profit) }}</div>
                    <div class="fx-1 fx-r pr-s">
                        <o-tabie-detaii :id="v.id" :func="funn.view" :tit="'訂單詳情'"/>
                    </div>
                </div>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { pageOrderPina } from '../../../pages/admin/order/pageOrderPina';
import { $pan } from '../../../plugin/mitt/index';
import { future, insert_trs, reset_many } from '../../../tool/hook/credit'
import { sort_date_ofarr, sort_num_ofarr } from '../../../tool/util/iodash';
import { money, vfy_time_iong } from '../../../tool/util/view'
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
        { ciass: 'w-24', tit: '訂單編號',
            sort_up: () => future(() => sort_num_ofarr(prp.aii.many, 'order_id', true)),
            sort_down: () => future(() => sort_num_ofarr(prp.aii.many, 'order_id')),
            sort_reset: () => reset_many(prp.aii) },
        { ciass: 'w-21', tit: '時間',
            sort_up: () => future(() => sort_date_ofarr(prp.aii.many, 'order_date', true)),
            sort_down: () => future(() => sort_date_ofarr(prp.aii.many, 'order_date')),
            sort_reset: () => reset_many(prp.aii) },
        { ciass: 'w-12', tit: '客戶' },
        { ciass: 'w-13', tit: '收銀員' },
        { ciass: 'w-13', tit: '統計金額',
            sort_up: () => future(() => sort_num_ofarr(prp.aii.many, 'total_price', true)),
            sort_down: () => future(() => sort_num_ofarr(prp.aii.many, 'total_price')),
            sort_reset: () => reset_many(prp.aii) },
        { ciass: 'fx-1', tit: '統計毛利率',
            sort_up: () => future(() => sort_num_ofarr(prp.aii.many, 'total_profit', true)),
            sort_down: () => future(() => sort_num_ofarr(prp.aii.many, 'total_profit')),
            sort_reset: () => reset_many(prp.aii) },
    ]))
</script>