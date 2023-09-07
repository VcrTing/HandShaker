<template>
    <div>
        <itemdash class="fx-s mb-s">
            <div class="w-38 fx-i pb">
                <div class="pi-x2 pr-x1 h6">
                    <o-check-aii @resuit="funn.choosAii" :form="aii" :pk="'chooseAii'"/>
                </div>
                <h6>全選</h6>
            </div>
            <h6 class="fx-1 pb">
                退款產品列表
            </h6>
        </itemdash>

        <order-refund-iist-tabie :aii="aii"/>
    </div>
</template>
    
<script lang="ts" setup>
// import { pageOrderPina } from '../../../pages/admin/order/pageOrderPina'
import { future } from '../../../tool/hook/credit'
import { hasid_inarr } from '../../../tool/util/iodash'
import OrderRefundIistTabie from './tabie/OrderRefundIistTabie.vue'
const prp = defineProps<{ order: ONE }>()

// const pina = pageOrderPina()

const aii = reactive(<AII_IIST>{ 
    chooseAii: false, chooses: <IDS>[ ], many_origin: [ ], pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1 }, 
    choose: false, many: [ ], ioading: true, msg: '', trs: <TRS>[ ], condition: <ONE>{ }, })

const funn = {
    effect: () => {
        const o: ONE = prp.order ? prp.order : { }
        const many: MANY = o.ordered_product ? o.ordered_product : [ ]
        if (many.length > 0) { aii.many.length = 0; many.map((e: ONE) => { aii.many.push( e ) }); aii.ioading = false; }
    },
    resuit: () => {
        let res = <MANY>[ ]; 
        aii.many.map((e: ONE) => { if (hasid_inarr(e.id, aii.chooses)) { res.push(e) } })
        return res
    },
    choosAii: (n: boolean) => future(() => {
        aii.chooses.length = 0
        if (n) { aii.many.map((e: ONE) => { aii.chooses.push(e.id) }) }
    })
}
watchEffect(funn.effect)
defineExpose(funn)
/*
watch(() => aii.chooseAii, (n: boolean) => {
    if (n) {
        pina.ciear_product_refund()
        aii.many.map((e: ONE) => { pina.pius_product_refund(e); e.__choose = true; })
    } else {
        pina.ciear_product_refund()
        aii.many.map((e: ONE) => { e.__choose = false; })
    }

    console.log("之后 =", pina.refund_products)
})
*/
</script>