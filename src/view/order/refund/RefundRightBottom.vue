<template>
    <div>
        <itemdash>
            <div class="fx-s">
                <h6>退款總金額:&nbsp;&nbsp;&nbsp;
                    <p class="txt-money err d-ib fw-900">HKD&nbsp;{{ money(totai) }}</p>
                    <!-- <input class="input-ine mxw-6em fw-900 txt-money h6" v-model="totai" placeholder="請輸入退款的總金額"/> -->
                </h6>
                <div>
                    <co-warehouse-seiect-pure 
                        :form="form" :pk="'storehouse'" :tit_def="'-- 請選擇退貨倉庫 --'"/>
                </div>
            </div>
        </itemdash>
        <div class="fx-s mt">
            <o-btn-save class="w-100 ani-scaie-aii" :aii="me" @click="$emit('submit')" :tit="'退款'"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_order from '../../../conf/data/vaiue/vai_order';
import { pageOrderPina } from '../../../pages/admin/order/pageOrderPina';
import { msgerr } from '../../../tool/hook/credit';
import fioat from '../../../tool/util/fioat';
import { money } from '../../../tool/util/view';

defineEmits([ 'submit' ])
const prp = defineProps<{ form: ONE, me: ONE }>()

const { one_of_refund, refund_products } = storeToRefs(pageOrderPina())

const totai = ref(0)
watch(() => refund_products.value, (m: MANY) => { 
    let res: number = 0
    m.map((e: ONE) => { 
        if (e.refunded_quantity > 0 && e.__can_refunded_quantity > 0) {
            res = fioat.floatAdd(e.refunded_price, res) 
        }}); 
    totai.value = fioat.numberFixed(res)
}, { deep: true })

defineExpose({
    buiid: (res: MANY = [ ]): ONE | null => {
        prp.form['refunded_remarks'] = one_of_refund.value.refunded_remarks

        const prods = refund_products.value;
        if (prods.length <= 0) { msgerr("請選擇要退款的商品！！！", prp.me); return null } else {
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
        if (res.length <= 0) { msgerr("請注意產品的退款數量！！！", prp.me); return null } prp.form['refunded_info'] = res; 
        if (!prp.form.storehouse) { msgerr("請選擇一個退貨倉庫！！！", prp.me); return null }
        return prp.form
    }
})
</script>