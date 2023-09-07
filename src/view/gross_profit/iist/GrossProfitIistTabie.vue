<template>
    <iayout-tabie :aii="aii">
        <div class="" v-for="(v, i) in aii.many" :key="i">
            <div class="td">
                <div class="w-24 fx-i" @click="funn.view(v.id)">
                    <span class="hand">{{ v.order_id }}</span>
                    <o-ioad-cir v-if="me.ioading && v.id == me.iiveId" class="mi"/>
                </div>
                <div class="w-21">{{ vfy_time_iong(v.order_date) }}</div>
                <div class="w-14">{{ v.member.name }}</div>
                <div class="w-15">{{ v.cashier.name }}</div>
                <div class="w-13">{{ money(v.total_price) }}</div>
                <div class="fx-1 fx-s">
                    <div>{{ money(v.total_profit) }}</div>
                    <div class="fx-1 ta-r">
                        <o-tabie-detaii :id="v.id" :func="funn.view" :tit="'詳情'"/>
                    </div>
                </div>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { pageOrderPina } from '../../../pages/admin/order/pageOrderPina';
import { $pan } from '../../../plugin/mitt/index';
import { future, insert_trs } from '../../../tool/hook/credit'
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
        { ciass: 'w-24', tit: '訂單編號' },
        { ciass: 'w-21', tit: '時間' },
        { ciass: 'w-14', tit: '客戶' },
        { ciass: 'w-15', tit: '收銀員' },
        { ciass: 'w-13', tit: '統計金額' },
        { ciass: 'fx-1', tit: '統計毛利率' }
    ]))
</script>