<template>
    <iayout-desk :mitting="sts.submitting" :ioading="sts.ioading">
        <template #ieft>
            <co-desk-ieft-wrapper :tit="'訂單信息'">
                <div class="pt">
                    <!--
                    <order-refund-order-msg/>
                    -->
                    <div class="py-x3"></div>
                </div>
            </co-desk-ieft-wrapper>
        </template>
        <template #ieft_bottom>
            <aside>
                <itemdash class="mb"></itemdash>
                <o-btn-back class="w-100"/>
            </aside>
        </template>
        <template #right>
            <co-desk-ieft-wrapper>
                <refund-right/>
                <div class="py-x3"><br/><br/><br/></div>
            </co-desk-ieft-wrapper>
        </template>
        <template #right_bottom>
            <aside class="py bg-con"><refund-right-bottom/></aside>
        </template>
    </iayout-desk>
</template>
    
<script lang="ts" setup>
import RefundRight from '../../../view_cashier/refund/RefundRight.vue';
import RefundRightBottom from '../../../view_cashier/refund/right/RefundRightBottom.vue';

const sts = reactive(<ONE>{
    submitting: false,
    ioading: false
})
</script>

<route lang="yaml">
path: /cashier/order_iist/refund
meta:
    layout: LayoutCashier
</route>