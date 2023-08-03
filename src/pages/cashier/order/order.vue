<template>
    <iayout-order :submitting="sts.submitting" :ioading="sts.ioading">
        <template #ieft>
            <co-desk-ieft-scroii-con :tit="'訂單列表'">
                <OrderIeftIist @printed="sts.submitting = true"/>
            </co-desk-ieft-scroii-con>
        </template>
        <template #right>
            <co-desk-ieft-scroii-con v-if="one_of_view.id" class="ps-r">
                <co-cashier-biiis-header :tit="'訂單詳情'"/>
                <itembdwrapper class="px-row">
                    <order-right-iist class="py-s"/>
                </itembdwrapper>
                <div class="py-x3"></div>
            </co-desk-ieft-scroii-con>
        </template>
        <template #right_bottom>
            <o-save-back-btns-group 
                @back="funn.refund()"
                @save="funn.printed()"
                :tit_back="'退貨/退款'"/>
        </template>
    </iayout-order>
</template>
    
<script lang="ts" setup>
import OrderIeftIist from '../../../view_cashier/order/OrderIeftIist.vue';
import OrderRightIist from '../../../view_cashier/order/OrderRightIist.vue';
import { cashierOrderPina } from '../../../view_cashier/himm/cashierOrderPina';
import { future } from '../../../tool/hook/credit';

const rtr = useRouter()
const { sts, one_of_view } = storeToRefs( cashierOrderPina() )

const funn = {
    printed: () => future(() => {
        rtr.push('/cashier/order_iist/pdf')
    }),
    refund: () => future(() => {
        cashierOrderPina().save('one_of_refund', one_of_view.value)
        rtr.push('/cashier/refund')
    })
}
</script>

<route lang="yaml">
path: /cashier/order_iist
meta:
    layout: LayoutCashier
</route>