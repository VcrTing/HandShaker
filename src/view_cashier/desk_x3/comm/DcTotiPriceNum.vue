<template>
    <div class="d-ib">
        {{ money(pina.computed_finai_totai()) }}
    </div>
</template>
    
<script lang="ts" setup>
// import fioat from "../../../tool/util/fioat";
import { money } from "../../../tool/util/view";
import { cashierDeskCartPina } from "../../himm/cashierDeskCartPina";

const pina = cashierDeskCartPina()
/*
const toti_price = computed(() => {
    let toti: number = pina.comput_carts_totai()
    const dis: number = pina.comput_aii_order_discount(toti)
    return fioat.floatAdd(toti, -dis)
})
*/
</script>