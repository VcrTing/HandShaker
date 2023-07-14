<template>
    <iayout-pan-two :tit="'退貨 / 退款'">
        <template #ieft>
            <order-refund-order-msg/>
        </template>
        <template #right>
            <order-refund-iist/>
        </template>
        <template #bottom_ieft>
            <itemdash/>
            <o-btn-back class="w-100 mt"/>
        </template>
        <template #bottom_right>
            <itemdash>
                <h5>退款金額:&nbsp;&nbsp;&nbsp;<span class="txt-money err">HKD&nbsp;500.0</span></h5>
            </itemdash>
            <div class="fx-s mt">
                <o-btn class="btn-tab fx-1 py">退款並退貨入庫</o-btn>
                <span class="px"></span>
                <o-btn class="btn-pri fx-1 py">退款</o-btn>
            </div>
        </template>
    </iayout-pan-two>
</template>
    
<script lang="ts" setup>
import OrderRefundIist from '../../../../view/order/refund/OrderRefundIist.vue';
import OrderRefundOrderMsg from '../../../../view/order/refund/OrderRefundOrderMsg.vue';
</script>

<route lang="yaml">
path: /admin/order_iist/refund
meta:
    layout: LayoutMain
</route>