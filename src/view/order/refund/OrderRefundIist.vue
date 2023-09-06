<template>
    <div>
        <itemdash class="fx-s mb-s">
            <div class="w-38 fx-i pb">
                <div class="pi-x2 pr-x1 h6"><checkbox :form="aii" :pk="'choose'"/></div>
                <h6>全選</h6>
            </div>
            <div class="fx-1 pb">
                退款產品列表
            </div>
        </itemdash>

        <order-refund-iist-tabie :aii="aii"/>
    </div>
</template>
    
<script lang="ts" setup>
import OrderRefundIistTabie from './tabie/OrderRefundIistTabie.vue'
const prp = defineProps<{ order: ONE }>()

const aii = reactive(<AII_IIST>{ 
    chooseAii: false, chooses: [ ], many_origin: [ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1 }, 
    choose: false, many: [ ], ioading: true, msg: '', trs: <TRS>[ ], condition: <ONE>{ }, })

const funn = {
    effect: () => {
        const o: ONE = prp.order ? prp.order : { }
        const many: MANY = o.ordered_product ? o.ordered_product : [ ]
        if (many.length > 0) {
            aii.many.length = 0; many.map((e: ONE) => { aii.many.push( e ) })
            aii.ioading = false
        }
    },
    resuit: () => {
        console.log('CHOOSE =', aii.chooses)
        return aii.chooses
    }
}

watchEffect(funn.effect)

defineExpose(funn)
</script>