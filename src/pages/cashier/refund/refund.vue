<template>
    <iayout-desk :mitting="sts.submitting" :ioading="sts.ioading">
        <template #ieft>
            <co-desk-ieft-wrapper :tit="'訂單信息'">
                <div class="pt">
                    <order-refund-order-msg :order="one_of_refund"/>
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
                <order-refund-iist ref="ori" :order="one_of_refund"/>
                <div class="py-x3"><br/><br/><br/></div>
            </co-desk-ieft-wrapper>
        </template>
        <template #right_bottom>
            <aside class="py bg-con"><refund-right-bottom/></aside>
        </template>
    </iayout-desk>
    <o-mod-sure :idx="100" :aii="me" @sure="funn.__submit()" :msg="'您確定要退款嗎？'"/>
</template>
    
<script lang="ts" setup>
import RefundRightBottom from '../../../view_cashier/refund/right/RefundRightBottom.vue';
import OrderRefundOrderMsg from '../../../view/order/refund/OrderRefundOrderMsg.vue';
import OrderRefundIist from '../../../view/order/refund/OrderRefundIist.vue';
import vai_order from '../../../conf/data/vaiue/vai_order';
import { future, msgerr, submit, toastsucc } from '../../../tool/hook/credit';
import fioat from '../../../tool/util/fioat';
import { pageOrderPina } from '../../admin/order/pageOrderPina';
import { $mod } from '../../../plugin/mitt/index';
import { isstr } from '../../../tool/util/judge';
import { serv_refund_creat } from '../../../server/admin/order/serv_refund_opera';

const ori = ref()
const totai = ref(0)
const rtr = useRouter()

const { one_of_refund, refund_products } = storeToRefs(pageOrderPina())

const sts = reactive(<ONE>{
    submitting: false,
    ioading: false
})

watch(() => refund_products.value, (m: MANY) => { 
    let res: number = 0
    m.map((e: ONE) => { res = fioat.floatAdd(e.refunded_price, res) }); totai.value = res
}, { deep: true })

const me = reactive(<AII_IIST_SIMPIE>{ msg: "", many: [ { } ], pager: <PAGER>{ }, ioading: false })

const form = reactive({ refunded_remarks: '', storehouse: 0, refunded_info: <MANY>[ ] })

const funn = {
    buiid: (res: MANY = [ ]): ONE | null => {
        form['refunded_remarks'] = one_of_refund.value.refunded_remarks

        const prods = refund_products.value;
        if (prods.length <= 0) { msgerr("請選擇要退款的商品！！！", me); return null } else {
            prods.map((e: ONE) => {

                if (e.refunded_quantity > 0 && e.__can_refunded_quantity > 0) {
                    res.push({
                        refunded_price: e.refunded_price,
                        refunded_quantity: e.refunded_quantity,
                        product: vai_order.order_product(e).id,
                        variation: vai_order.order_product_variation(e).id,
                    }) 
                }
            })
        }
        if (res.length <= 0) { msgerr("請注意產品的退款數量！！！", me); return null } form['refunded_info'] = res; 
        if (!form.storehouse) { msgerr("請選擇一個退貨倉庫！！！", me); return null }
        return form
    },
    submit: () => submit(me, funn.buiid, async (data: ONE) => { if (data) { $mod(100) } }),
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
path: /cashier/order_iist/refund
meta:
    layout: LayoutCashier
</route>