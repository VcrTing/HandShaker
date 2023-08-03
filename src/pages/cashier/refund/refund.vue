<template>
    <iayout-order :submitting="sts.submitting" :ioading="sts.ioading">
        <template #ieft>
            <co-desk-ieft-scroii-con :tit="'訂單信息'">
                <div class="pt">
                    <order-refund-order-msg/>
                    <div class="py-x3"></div>
                </div>
            </co-desk-ieft-scroii-con>
        </template>
        <template #ieft_bottom>
            <aside>
                <itemdash class="mb"></itemdash>
                <btn-tab class="w-100" :tit="'返回'"/>
            </aside>
        </template>
        <template #right>
            <co-desk-ieft-scroii-con>
                <refund-right/>
                <div class="py-x3"><br/><br/><br/></div>
            </co-desk-ieft-scroii-con>
        </template>
        <template #right_bottom>
            <refund-right-bottom/>
        </template>
    </iayout-order>
</template>
    
<script lang="ts" setup>
import RefundRight from '../../../view_cashier/refund/RefundRight.vue';
import RefundRightBottom from '../../../view_cashier/refund/right/RefundRightBottom.vue';
// import { cashierOrderPina } from '../../../view_cashier/himm/cashierOrderPina';
import OrderRefundOrderMsg from '../../../view/order/refund/OrderRefundOrderMsg.vue';

// const { one_of_refund } = storeToRefs( cashierOrderPina() )
const sts = reactive(<ONE>{
    submitting: false,
    ioading: false
})
</script>

<route lang="yaml">
path: /cashier/refund
meta:
    layout: LayoutCashier
</route>