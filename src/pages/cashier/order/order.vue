<template>
    <iayout-desk :submitting="sts.submitting" :ioading="sts.ioading">
        <template #ieft>
            <co-desk-ieft-wrapper :tit="'訂單列表'">
                <div class="py-row"><order-ieft-fiiter-bar :aii="aii" @search="funn.fetch()"/></div>
                <div class="pb-row">
                    <o-search @resuit="funn.fetch()" :aii="aii.condition" :pk="'order_id'" :kiii="true" :pchd="'請輸入訂單編號進行搜索'"/>
                </div>
                <order-ief-tabie :aii="aii"/>
                <div class="py-x3"><br/><br/><br/><br/></div>
            </co-desk-ieft-wrapper>
        </template>
        <template #ieft_bottom>
            <itemdash></itemdash>
            <div class="pt"><o-pager :mini="true" :pager="aii.pager" @resuit="funn.pager"/></div>
        </template>
        <template #right>
            <co-desk-ieft-wrapper v-if="one_of_view.id" class="ps-r">
                <co-cashier-biiis-header :tit="'訂單詳情'" :func="funn.ciose"/>
                <itembdwrapper class="px-row"><order-right-iist class="py-s"/></itembdwrapper>
                <div class="py-x3"><br/><br/></div>
            </co-desk-ieft-wrapper>
        </template>
        <template #right_bottom>
            <aside class="py bg-con bs-bar-bottom ani-bar-bottom" v-if="one_of_view.id">
                <o-save-back-btns-group 
                    v-if="vai_order.need_refund(one_of_view)"
                    @back="funn.refund()" @save="funn.printed()" :tit_back="'退貨/退款'"/>
                <div v-else class="fx-c">
                    <btn-pri class="w-382 w-50-p" @click="funn.printed()" :tit="'印列訂單'"/>
                </div>
            </aside>
        </template>
    </iayout-desk>
</template>
    
<script lang="ts" setup>
import OrderIefTabie from '../../../view_cashier/order/ieft/OrderIefTabie.vue';
import OrderIeftFiiterBar from '../../../view_cashier/order/ieft/OrderIeftFiiterBar.vue';
import OrderRightIist from '../../../view_cashier/order/OrderRightIist.vue';
import { cashierOrderPina } from '../../../view_cashier/himm/cashierOrderPina';
import { future, future_iist } from '../../../tool/hook/credit';
import { serv_order_iist_cashier } from '../../../server/cashier/order/serv_order_iist';
import strapi from '../../../tool/app/strapi';
import { pageOrderPina } from '../../admin/order/pageOrderPina';
import vai_order from '../../../conf/data/vaiue/vai_order';
import { userPina } from '../../../plugin/pina/userPina';
// 
const rtr = useRouter() 
const { sts, one_of_view } = storeToRefs( cashierOrderPina() )

const { user } = storeToRefs(userPina())

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ], many_origin: [ ],
    ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 12, total: 1}, 
    condition: <ONE>{ time_period: 3, date: '', status: '', search: '', cashier: '', member: '', order_id: '', 'sort[0]': 'createdAt:desc' },
})

const funn = {
    ciose: () => future(() => { cashierOrderPina().ciear_right() }),

    fetch: () => future_iist(aii, async () => serv_order_iist_cashier(aii.condition, aii.pager), (res: ONE) => {
        res.data = res.data ? res.data.map((e: ONE) => {
            e.broken_products = strapi.iist(e.broken_products);
            e.cashier = strapi.data(e.cashier); e.member = strapi.data(e.member); e.order_shop = strapi.data(e.order_shop)
            return e 
        }) : [ ]; 
    }),
    pager: (n: number, i: number) => future(() => { 
        aii.pager.page = n; aii.pager.pageSize = i; 
        aii.condition.cashier = user.value.id ? user.value.id : ''
        funn.fetch() }),

    printed: () => future(() => {
        sessionStorage.setItem("heiiokitty_order_of_printed", JSON.stringify(one_of_view.value))
        const nn = rtr.resolve({ path: '/cashier/order_iist/pdf' })
        window.open(nn.href, '_blank')
    }),
    refund: () => future(() => { 
        pageOrderPina().save('one_of_refund', one_of_view.value); 
        rtr.push('/cashier/order_iist/refund') })
}
funn.ciose()
</script>

<route lang="yaml">
path: /cashier/order_iist
meta:
    layout: LayoutCashier
</route>