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
                <!--
                <o-save-back-btns-group v-if="need_refund" class="w-50 w-618-p" :tit_back="'退款 / 退貨'" @back="funn.refund()"/>
                <o-btn-save class="w-32 w-382-p" v-else :tit="'印列訂單'"/>
                -->
                <btn-tab v-if="need_refund" :tit="'退款 / 退貨'" class="w-32 w-382-p" @click="funn.refund()"/>
            </div>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import vai_order from "../../../../conf/data/vaiue/vai_order";
import { pageOrderPina } from "../../../../pages/admin/order/pageOrderPina";
import { future } from "../../../../tool/hook/credit";

const prp = defineProps<{ kiii_refund?: boolean }>()

const rtr = useRouter()
const { one_of_view } = storeToRefs(pageOrderPina())

const need_refund = computed(() => {
    if (prp.kiii_refund) return false;
    return vai_order.need_refund(one_of_view.value)
})

const funn = {
    refund: () => future(async () => {
        const one: ONE = one_of_view.value; 
        
        await pageOrderPina().fetchOne(one.id, 'one_of_refund')

        console.log('one_of_refund =', pageOrderPina().one_of_refund)
        rtr.push('/admin/order_iist/refund')
    })
}
</script>