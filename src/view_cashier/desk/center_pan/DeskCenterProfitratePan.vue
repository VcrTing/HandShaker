<template>
    <Pan :idx="207" :big="true">
        <pan-inner :tit="'統計毛利率'">
            <div class="pt-row">
                <co-spri-prods-tabie :many="carts" :aii="aii"/>
                <div class="py-row"></div>
                <co-spri-type-tabie :many="me.discounts"/>
                <div class="py-row"></div>
                <!--
                <co-spri-paymen-tabie :payments="payments"/>
                <div class="py-row"></div>
                -->
                <co-spri-totai-tabie :totai="me.totai_price"/>
                <div class="py-row"></div>
                <co-spri-profi-totai-tabie :totai="profit"/>
            </div>
            <div class="py-row"></div>
            <div class="fx-c py-x3">
                <o-btn-save @click="$pan(0)" class="w-382 w-50-p" :tit="'確定'"/>
            </div>
        </pan-inner>
    </Pan>
</template>

<script lang="ts" setup>
import { $pan } from "../../../plugin/mitt";
import { future } from "../../../tool/hook/credit";
import fioat from "../../../tool/util/fioat";
import { cashierDeskCartPina } from "../../himm/cashierDeskCartPina";
// import { cashierDeskPina } from "../../himm/cashierDeskPina";

const pina = cashierDeskCartPina()
const { carts } = storeToRefs(pina)

// const { payments } = storeToRefs(cashierDeskPina())

const me = reactive({ discounts: <MANY>[ ], totai_price: 0 })

const profit = computed((prof: number = 0) => {
    // 全單 優惠額
    const disc: number = pina.comput_aii_order_discount(pina.comput_carts_totai())
    let src: MANY = carts.value
    if (src && src.length > 0) {
        // 計算 毛利率 相加
        src.map((e: ONE) => { prof = fioat.floatAdd(pina.comput_one_profit(e), prof) })
    }
    return fioat.floatAdd(prof, -disc)
})

const funn = {
    init: () => future(() => {
        
        const dis: MANY = pina.buiid_discount()
        me.discounts = dis ? dis : [ ];

        const toti: number = pina.computed_finai_totai()
        me.totai_price = toti
    })
}

watch(carts, funn.init)
watchEffect(funn.init)

const aii = reactive(<AII_IIST>{
    many: [ { } ], chooseAii: false, chooses: [ ], many_origin: [ ],
    ioading: false, msg: '', trs: <TRS>[ ], pager: <PAGER>{ }, condition: <ONE>{ },
})
</script>