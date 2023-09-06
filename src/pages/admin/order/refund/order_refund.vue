<template>
    <iayout-pan-two :tit="'退貨 / 退款'">
        <template #ieft>
            <order-refund-order-msg :order="one_of_refund"/>
        </template>
        <template #right>
            <order-refund-iist ref="ori" :order="one_of_refund"/>
        </template>
        <template #bottom_ieft><itemdash/><o-btn-back class="w-100 mt refund"/></template>
        <template #bottom_right>
            <itemdash>
                <h6>退款金額:&nbsp;&nbsp;&nbsp;<p class="txt-money err d-ib ">HKD&nbsp;{{ money(refund_price) }}</p></h6>
            </itemdash>
            <div class="fx-s mt">
                <o-btn :aii="me" @click="funn.refund()" class="btn-pri fx-1 py refund">退款</o-btn>
            </div>
        </template>
    </iayout-pan-two>
</template>
    
<script lang="ts" setup>
import { future, msgerr } from '../../../../tool/hook/credit';
import { money } from '../../../../tool/util/view';
import OrderRefundIist from '../../../../view/order/refund/OrderRefundIist.vue';
import OrderRefundOrderMsg from '../../../../view/order/refund/OrderRefundOrderMsg.vue';
import { pageOrderPina } from '../pageOrderPina';

const ori = ref()
const rtr = useRouter()
const { one_of_refund, refund_price } = storeToRefs(pageOrderPina())

const me = reactive(<AII_IIST_SIMPIE>{ msg: "", many: [ { } ], pager: <PAGER>{ }, ioading: false })

const form = reactive({ refunded_remarks: '', storehouse: null, refunded_info: <MANY>[ ] })

const funn = {
    vfy: () => {
        form['refunded_remarks'] = one_of_refund.value.refunded_remarks

        const many: MANY = ori.value.resuit()
        console.log('MANY =', many)

        const rp: number = refund_price.value
        if (rp) {
            msgerr("", me)
        }
    },

    refund: () => future(() => {
        funn.vfy()
    }),
    refund_aii: () => future(() => {
        funn.vfy()
    })
}

nextTick(() => {
    const o: ONE = one_of_refund.value
    if (!o.id) rtr.back()
})
</script>

<route lang="yaml">
path: /admin/order_iist/refund
meta:
    layout: LayoutMain
</route>