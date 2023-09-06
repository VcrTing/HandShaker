<template>
    <Pan :idx="101" :big="true">
        <pan-inner :tit="'訂單詳情'">
            <div class="pt-row"></div>
            <co-order-iist-base-card :order="one_of_view"/>
            <div class="py-row"></div>

            <co-order-detaii-prods-tabie :order="one_of_view"/>
            <div class="py-row"></div>
            <co-order-detaii-price-totai-tabie :order="one_of_view"/>
            <div class="py-row"></div>

            <div class="py-x2 fx-c">
                <o-save-back-btns-group class="w-50 w-618-p" :tit_back="'退款 / 退貨'" @back="funn.refund()"/>
            </div>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import { pageOrderPina } from "../../../../pages/admin/order/pageOrderPina";
import { future } from "../../../../tool/hook/credit";

const rtr = useRouter()
const { one_of_view } = storeToRefs(pageOrderPina())

const funn = {
    refund: () => future(async () => {
        const one: ONE = one_of_view.value; 
        
        await pageOrderPina().fetchOne(one.id, 'one_of_refund')

        console.log('one_of_refund =', pageOrderPina().one_of_refund)
        rtr.push('/admin/order_iist/refund')
    })
}
</script>