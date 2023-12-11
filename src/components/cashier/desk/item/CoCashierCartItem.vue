<template>
    <m-btn :bk="true" class="w-100 ta-i br fx-aii-tab" @click="funn.chiose(i)">
        <itembdwrapper class="ps-r" :class="{ 'bg-con-x2': cart.__choise }">
            <div class="td tit-son">
                <div class="fx-1 px fx-i">
                    <div class="mw-2em">{{ i + 1 }} &nbsp;&nbsp;</div>
                    <div>
                        <p>{{ cart.__product.name }}</p>
                        <p class="sus fs-s">{{ cart.__variation.name }}</p>
                    </div>
                </div>
                <div class="w-15 fs-n">
                    <span v-if="cart.is_ratio">x</span>
                    <span v-else>-</span>{{ cart.discount }}
                </div>
                <div class="w-19 fs-n fw-300">{{ cart.__product.new_selling_price }}&nbsp;*&nbsp;{{ cart.quantity }}</div>
                <div class="w-18 fs-n fx-r pr fw-800">{{ funn.vai_totai(cart) }}</div>
            </div>
            <!--
            <div class="abs-i b-0" v-if="is_stockout">
                <span class="fs-s txt-err">產品缺貨</span>
            </div>
            -->
        </itembdwrapper>
    </m-btn>
</template>
    
<script lang="ts" setup>
// import vai_cashier_cart from "../../../../conf/data/vai_cashier_cart";
// import { userPina } from "../../../../plugin/pina/userPina";
import { future } from "../../../../tool/hook/credit";
import { money } from "../../../../tool/util/view"
import { cashierDeskCartPina } from "../../../../view_cashier/himm/cashierDeskCartPina";

defineProps<{ cart: ONE, i: number }>()

const pina = cashierDeskCartPina();

/*
const prp = 
const is_stockout = computed((res: number = 0) => {
    const sid: ID = userPina().mystore;
    const vid: ID = prp.cart.variation
    const ivs: MANY = vai_cashier_cart.onestore_inventory_iist(prp.cart, sid)
    ivs.map((e: ONE) => { if (e.id == vid) { res = e.quantity } }); 
    return res <= 0
})
*/

const funn = {
    vai_totai: (v: ONE) => money( pina.comput_one_totai(v) ),
    chiose: (i: number) => future(() => { pina.switch_cart_choise(i) }),
}
</script>