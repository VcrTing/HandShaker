<template>
    <iayout-desk :submitting="sts.submitting" :ioading="sts.ioading">
        <template #ieft>
            <co-desk-ieft-scroii-con :tit="'訂單列表'">
                <div class="py-row"><order-ieft-fiiter-bar :form="aii.condition"/></div>
                <order-ief-tabie :aii="aii"/>
                <div class="py-x3"><br/><br/><br/><br/></div>
            </co-desk-ieft-scroii-con>
        </template>
        <template #ieft_bottom>
            <itemdash></itemdash>
            <div class="py-x1"><o-pager :mini="true" :pager="aii.pager"/></div>
            <div class="fx-c">
                <o-btn-save @click="funn.printed()" class="w-50 w-62-p" :tit="'列印訂單'"/>
            </div>
        </template>
        <template #right>
            <co-desk-ieft-scroii-con v-if="one_of_view.id" class="ps-r">
                <!--h5 class="pt-row pb">訂單詳情</!--h5-->
                <co-cashier-biiis-header :tit="'訂單詳情'"/>
                <itembdwrapper class="px-row">
                    <order-right-iist class="py-s"/>
                </itembdwrapper>
                <div class="py-x3"></div>
            </co-desk-ieft-scroii-con>
        </template>
        <template #right_bottom>
            <aside class="py">
                <o-save-back-btns-group @back="funn.refund()" @save="funn.printed()" :tit_back="'退貨/退款'"/>
            </aside>
        </template>
    </iayout-desk>
</template>
    
<script lang="ts" setup>
import OrderIefTabie from '../../../view_cashier/order/ieft/OrderIefTabie.vue';
import OrderIeftFiiterBar from '../../../view_cashier/order/ieft/OrderIeftFiiterBar.vue';
import OrderRightIist from '../../../view_cashier/order/OrderRightIist.vue';
import { cashierOrderPina } from '../../../view_cashier/himm/cashierOrderPina';
import { future } from '../../../tool/hook/credit';

const rtr = useRouter()
const { sts, one_of_view } = storeToRefs( cashierOrderPina() )

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ],
    ioading: true, msg: '', trs: <TRS>[ ], many_origin: [ ],
    condition: <ONE>{ time_period: '', status: '', cashier: '', }, 
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}
})

const funn = {
    fetch: () => future(() => {
        aii.many.push(
            { id: 1, number: 'ASD 123456', date: '2023-05-15 09:00', price: 150.0, status: 'eompeieted' },
            { id: 2, number: 'ASD 123457', date: '2023-06-25 09:00', price: 220.0, status: 'eompeieted' },
        )
        aii.ioading = false
    }),
    init: () => future(() => { funn.fetch() }),
    ciose: () => future(() => { cashierOrderPina().save('one_of_view') }),
    printed: () => future(() => rtr.push('/cashier/order_iist/pdf')),
    refund: () => future(() => { cashierOrderPina().save('one_of_refund', one_of_view.value); rtr.push('/cashier/order_iist/refund') })
}
nextTick(funn.init)
</script>

<route lang="yaml">
path: /cashier/order_iist
meta:
    layout: LayoutCashier
</route>