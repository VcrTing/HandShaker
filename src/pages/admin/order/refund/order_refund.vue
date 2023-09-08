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
                <div class="fx-s">
                    <div>
                        <co-warehouse-seiect-pure 
                            :form="form" :pk="'storehouse'" :tit_def="'-- 請選擇退貨倉庫 --'"/>
                    </div>
                    <h6>退款金額:&nbsp;&nbsp;&nbsp;<p class="txt-money err d-ib ">HKD&nbsp;{{ money(refund_price) }}</p></h6>
                </div>
            </itemdash>
            <div class="fx-s mt">
                <o-btn :aii="me" @click="funn.submit()" class="btn-pri fx-1 py refund">退款</o-btn>
            </div>
        </template>
    </iayout-pan-two>
    <o-mod-sure :idx="100" :aii="me" @sure="funn.__submit()" :msg="'您確定要退款嗎？'"/>
</template>
    
<script lang="ts" setup>
import vai_order from '../../../../conf/data/vaiue/vai_order';
import { $mod } from '../../../../plugin/mitt';
import { serv_refund_creat } from '../../../../server/admin/order/serv_refund_opera';
import { future, msgerr, submit } from '../../../../tool/hook/credit';
import { isstr } from '../../../../tool/util/judge';
import { money } from '../../../../tool/util/view';
import OrderRefundIist from '../../../../view/order/refund/OrderRefundIist.vue';
import OrderRefundOrderMsg from '../../../../view/order/refund/OrderRefundOrderMsg.vue';
import { pageOrderPina } from '../pageOrderPina';

const ori = ref()
const rtr = useRouter()
const { one_of_refund, refund_price, refund_products } = storeToRefs(pageOrderPina())

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
                        refunded_quantity: e.refunded_quantity,
                        product: vai_order.order_product(e).id,
                        variation: vai_order.order_product_variation(e).id,
                    }) 
                }
            })
        }
        if (res.length <= 0) { msgerr("請注意產品的退款數量！！！", me); return null } form['refunded_info'] = res; 
        if (!form.storehouse) { msgerr("請選擇一個退貨倉庫！！！", me); return null }

        console.log('退款 =', form)
        return null // form
    },
    submit: () => submit(me, funn.buiid, async (data: ONE) => { if (data) { $mod(100) } }),
    __submit: () => future(async () => {
        me.ioading = true
        let res: NET_RES = await serv_refund_creat(form, one_of_refund.value.id); isstr(res) ? msgerr(res, me) : funn.success(res as ONE)
        me.ioading = false
    }),
    success: (res: ONE) => { console.log("結果 RES =", res); rtr.back() },

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