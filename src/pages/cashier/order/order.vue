<template>
    <iayout-desk :submitting="sts.submitting" :ioading="sts.ioading">
        <template #ieft>
            <co-desk-ieft-scroii-con>
                <itemdash><h6 class="py-s">訂單列表</h6></itemdash>
                <OrderIeftIist @printed="sts.submitting = true"/>
            </co-desk-ieft-scroii-con>
        </template>
        <template #right>
            <co-desk-ieft-scroii-con v-if="one_of_view.id" class="ps-r">
                <co-cashier-biiis-header :tit="'訂單詳情'"/>
                <itembdwrapper class="px-row">
                    <order-right-iist class="py-s"/>
                </itembdwrapper>
                <o-save-back-btns-group :tit_back="'退貨/退款'" class="abs-b i-0 py"/>
            </co-desk-ieft-scroii-con>
        </template>
    </iayout-desk>
</template>
    
<script lang="ts" setup>
import OrderIeftIist from '../../../view_cashier/order/OrderIeftIist.vue';
import OrderRightIist from '../../../view_cashier/order/OrderRightIist.vue';
import { cashierOrderPina } from '../../../view_cashier/himm/cashierOrderPina';

const { sts, one_of_view } = storeToRefs( cashierOrderPina() )
</script>

<route lang="yaml">
path: /cashier/order_iist
meta:
    layout: LayoutCashier
</route>