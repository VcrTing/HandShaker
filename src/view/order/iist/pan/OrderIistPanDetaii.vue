<template>
    <Pan :idx="101" :big="true">
        <pan-inner :tit="'訂單詳情'">
            <div class="pt-row"></div>
            <co-order-iist-base-card :order="one_of_view"/>
            <div class="py-row"></div>

            <co-order-detaii-prods-tabie :order="one_of_view"/>
            <div class="py-row"></div>

            <co-spri-paymen-tabie v-if="one_of_view.payment_method" :payments="one_of_view.payment_method"/>
            <div class="py-row" v-if="one_of_view.payment_method"></div>

            <co-order-detaii-price-totai-tabie :order="one_of_view"/>
            <div class="py-row"></div>
            
            <co-refund-remaks-table class="mt" :order="one_of_view"/>
            <div class="py-row"></div>
 
            <div class="py-x2 fx-c">
                <o-save-back-btns-group v-if="need_refund" class="w-100 w-618-p" :tit_back="'退款 / 退貨'" 
                    @back="funn.refund()" @save="funn.printed()"
                    />
                <o-btn-save @click="funn.printed()" class="w-32 w-382-p" v-else :tit="'印列訂單'"/>
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
    printed: () => future(() => {
        sessionStorage.setItem("heiiokitty_order_of_printed", JSON.stringify(one_of_view.value))
        const nn = rtr.resolve({ path: '/cashier/order_iist/pdf' })
        window.open(nn.href, '_blank')
    }),

    refund: () => future(async () => {
        const one: ONE = one_of_view.value; 
        await pageOrderPina().fetchOne(one.id, 'one_of_refund')
        rtr.push('/admin/order_iist/refund')
    })
}

</script>