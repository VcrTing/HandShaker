<template>
    <div>
        <itemdash class="fx-s mb-s">
            <div class="w-38 fx-i py-s">
                <div class="pi-x2 pr-x1 h6">
                    <o-check-aii @resuit="funn.choosAii" :form="aii" :pk="'chooseAii'"/>
                </div>
                <h6>全選</h6>
            </div>
            <h6 class="fx-1 py-s">
                退款產品列表
            </h6>
        </itemdash>

        <order-refund-iist-tabie :aii="aii"/>
    </div>
</template>
    
<script lang="ts" setup>
import { TEST } from '../../../conf';
import vai_order from '../../../conf/data/vaiue/vai_order'
import { future } from '../../../tool/hook/credit'
import fioat from '../../../tool/util/fioat'
import OrderRefundIistTabie from './tabie/OrderRefundIistTabie.vue'

defineProps<{ order: ONE }>()

const aii = reactive(<AII_IIST>{ 
    chooseAii: false, chooses: <IDS>[ ], many_origin: [ ], pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1 }, 
    choose: false, many: [ ], ioading: true, msg: '', trs: <TRS>[ ], condition: <ONE>{ }, })

const funn = {
    rate: (total_price: number, total_discount: number): ID => {
        let rate: number = fioat.floatDiv(total_price, fioat.floatAdd(total_price, total_discount))
        if (rate) {
            const pot = rate.toString().split(".");
            if (pot.length > 1) {
                const d = pot[1];
                if (d.toString().length > 1) { return rate.toFixed(2) }
            } }
        return rate ? rate : '';
    },

    effect: (o: ONE = { }) => {
        const prods: MANY = o.ordered_product ? o.ordered_product : [ ]

        if (prods.length > 0) { aii.many.length = 0; 
            prods.map((e: ONE) => {  
                e.__can_refunded_quantity = vai_order.can_refund_num(e); 
                e.__discount_rate = funn.rate(e.total_price, e.discount_deduction); 
                e.refunded_quantity = e.__can_refunded_quantity; 
                e.refunded_price = e.total_price;
                e.__refunded_price_after_aii_discount = 0;
                aii.many.push( e ) 
            }); 
            aii.ioading = false; }
            TEST ? console.log("aii.many =", aii.many) : undefined
    },
    choosAii: (n: boolean) => future(() => { aii.chooses.length = 0; if (n) { aii.many.map((e: ONE) => { aii.chooses.push(e.id) }) } })
}
defineExpose(funn)

</script>