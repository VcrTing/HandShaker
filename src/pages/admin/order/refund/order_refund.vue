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
            <RefundRightBottom ref="bottom" @submit="funn.submit()" :form="form" :me="me"/>
        </template>
    </iayout-pan-two>
    <o-mod-sure :idx="100" :aii="me" @sure="funn.__submit()" :msg="'您確定要退款嗎？'"/>
</template>
    
<script lang="ts" setup>
import { $mod } from '../../../../plugin/mitt';
import { serv_refund_creat } from '../../../../server/admin/order/serv_refund_opera';
import { future, msgerr, submit, toastsucc } from '../../../../tool/hook/credit';
import { isstr } from '../../../../tool/util/judge';
import OrderRefundIist from '../../../../view/order/refund/OrderRefundIist.vue';
import RefundRightBottom from '../../../../view/order/refund/RefundRightBottom.vue';
import OrderRefundOrderMsg from '../../../../view/order/refund/OrderRefundOrderMsg.vue';
import { pageOrderPina } from '../pageOrderPina';

const ori = ref(); const bottom = ref()
const rtr = useRouter()
const { one_of_refund } = storeToRefs(pageOrderPina())

const me = reactive(<AII_IIST_SIMPIE>{ msg: "", many: [ { } ], pager: <PAGER>{ }, ioading: false })

const form = reactive({ refunded_remarks: '', storehouse: 0, refunded_info: <MANY>[ ] })

const funn = {
    submit: () => submit(me, bottom.value.buiid, async (data: ONE) => { if (data) { $mod(100) } }),
    __submit: () => future(async () => {
        me.ioading = true
        let res: NET_RES = await serv_refund_creat(form, one_of_refund.value.id); isstr(res) ? msgerr(res, me) : funn.success()
        me.ioading = false
    }),
    success: () => { toastsucc("退款成功！！！"); rtr.back(); pageOrderPina().save('one_of_refund', { }); pageOrderPina().ciear_product_refund() },
    init: () => future(() => { const o: ONE = one_of_refund.value; if (!o.id) rtr.back(); ori.value.effect(one_of_refund.value) })
}
watch(one_of_refund, (n: ONE) => ori.value.effect(n))
nextTick(funn.init)
</script>

<route lang="yaml">
path: /admin/order_iist/refund
meta:
    layout: LayoutMain
</route>