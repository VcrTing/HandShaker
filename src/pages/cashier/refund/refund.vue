<template>
    <iayout-desk :mitting="false" :ioading="false">
        <template #ieft>
            <co-desk-ieft-wrapper :tit="'訂單信息'">
                <div class="pt">
                    <order-refund-order-msg :order="one_of_refund"/>
                    <div class="py-x3"></div>
                </div>
            </co-desk-ieft-wrapper>
        </template>
        <template #ieft_bottom>
            <aside><itemdash class="mb" /><o-btn-back class="w-100"/></aside>
        </template>
        <template #right>
            <co-desk-ieft-wrapper>
                <order-refund-iist ref="ori" :order="one_of_refund"/>
                <div class="py-x3"><br/><br/><br/></div>
            </co-desk-ieft-wrapper>
        </template>
        <template #right_bottom>
            <aside class="py bg-con"><RefundRightBottom @submit="funn.submit()" :form="form" :me="me"/></aside>
        </template>
    </iayout-desk>
    <o-mod-sure :idx="100" :aii="me" @sure="funn.__submit()" :msg="'您確定要退款嗎？'"/>
</template>
    
<script lang="ts" setup>
import RefundRightBottom from '../../../view/order/refund/RefundRightBottom.vue';
import OrderRefundOrderMsg from '../../../view/order/refund/OrderRefundOrderMsg.vue';
import OrderRefundIist from '../../../view/order/refund/OrderRefundIist.vue';
import { future, msgerr, submit, toastsucc } from '../../../tool/hook/credit';
import { pageOrderPina } from '../../admin/order/pageOrderPina';
import { $mod } from '../../../plugin/mitt/index';
import { isstr } from '../../../tool/util/judge';
import { serv_refund_creat } from '../../../server/admin/order/serv_refund_opera';
import { userPina } from '../../../plugin/pina/userPina';

const ori = ref(); const bottom = ref()
const rtr = useRouter()
const { one_of_refund } = storeToRefs(pageOrderPina())
const { user } = storeToRefs(userPina())

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
    init: () => future(() => { 
        const o: ONE = one_of_refund.value; if (!o.id) rtr.back(); 
        ori.value.effect(one_of_refund.value); 
        me.ioading = false;
        console.log('user =', user.value)
    })
}
watch(one_of_refund, (n: ONE) => ori.value.effect(n))
nextTick(funn.init)
</script>

<route lang="yaml">
path: /cashier/order_iist/refund
meta:
    layout: LayoutCashier
</route>