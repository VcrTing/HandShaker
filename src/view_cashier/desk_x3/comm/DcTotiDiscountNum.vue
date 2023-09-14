<template>
    <div class="d-ib">
        {{ money(toti_discount) }}
    </div>
</template>
    
<script lang="ts" setup>
// import fioat from "../../../tool/util/fioat";
import { money } from "../../../tool/util/view";
import { cashierDeskCartPina } from "../../himm/cashierDeskCartPina";

const pina = cashierDeskCartPina()
// const { ratio_of_member, ratio_of_aii, discount_of_aii } = storeToRefs(pina)

const toti_discount = computed(() => {
    let toti: number = pina.comput_carts_totai()
    return pina.comput_aii_order_discount(toti)
})

</script>