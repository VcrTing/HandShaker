<template>
    
    <itemdash class="px mt-s ani-softer bg-card br-s ani-scaie-hv" v-if="vai_order.discounts(order).length > 0">
        <div class="fw-700">優惠信息</div>
        <div class="pt">
            <div class="fx-s ta-r ani-softer" v-for="(v, i) in vai_order.discounts(order)" :key="i">
                <div>{{ v.type }}:&nbsp;&nbsp;&nbsp;</div>
                <div class="w-35">
                    <div class="d-ib" v-if="v.discount_shown && v.discount_shown != 1">{{ v.discount_shown }}&nbsp;&nbsp;折扣</div>
                    <div v-else class="d-ib"></div>
                </div>
                <div class="fx-1">-&nbsp;{{ v.discount_deduction }}&nbsp;&nbsp;HKD</div>
            </div>
        </div>
        <div class="fw-700 pt">全單優惠計算結果</div>
        <div class="pt">
            {{origin}}&nbsp;
            <div class="d-ib">
                <div class="d-ib ani-softer" v-for="(v, i) in vai_order.discounts(order)" :key="i">
                    -&nbsp;{{ v.discount_deduction }}&nbsp;
                </div>
            </div>
            =&nbsp;&nbsp;{{ order.total_price }}&nbsp;
        </div>
    </itemdash>

    <itemdash class="px mt-s ani-softer bg-card br-s ani-scaie-hv" v-else>
        該訂單未有任何全單優惠
    </itemdash>
    
</template>
    
<script lang="ts" setup>
import vai_order from "../../../../conf/data/vaiue/vai_order"
import fioat from "../../../../tool/util/fioat"

const prp = defineProps<{ order: ONE,  }>()

const origin = computed(() => {
    const one: ONE = prp.order
    const fin: number = one.total_price

    let res: number = fin

    const discounts: MANY = one.discount
    discounts.map((e) => {
        res = fioat.floatAdd(e.discount_deduction, res)
    })

    return res
})
</script>