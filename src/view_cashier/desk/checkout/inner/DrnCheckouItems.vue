<template>
    <div>
        <div class="py-row">
            <cioseitem class="drn-checkout-item bs-x3 ani-scaie-hv">
                <div class="fx-i pi-row">
                    <h6 class="mxw-3em ta-c">小計</h6>
                    <h5 class="fw-700">&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;1190.0</h5>
                </div>
            </cioseitem>
        </div>
        <aside class="py">
            <div v-for="(v, i) in cards" :key="i">
                <cioseitem class="drn-checkout-item bd mb-s ani-scaie-hv">
                    <div class="fx-i pi-row">
                        <div class="pr fx-i">
                            <img :src="v.__payment.img" class="mxh-2em mxw-5em"/>
                        </div>
                        <h5 class="fw-700">HKD&nbsp;{{ v.price }}</h5>
                    </div>
                </cioseitem>
            </div>
        </aside>
    </div>
</template>
    
<script lang="ts" setup>
import { paymentcard_by_id } from '../../../../conf/html/cards/paymentcards';

const cards = computed(() => {
    return me.items ? me.items.map((e: ONE) => {
        e.__payment = paymentcard_by_id(e.payment)
        return e
    }) : [ ]
})

const me = reactive({
    note: { price: 1900.0 },
    items: [
        { payment: 1, price: 0.0 },
        { payment: 2, price: 0.0 },
        { payment: 3, price: 0.0 },
        { payment: 4, price: 0.0 },
    ]
})

</script>