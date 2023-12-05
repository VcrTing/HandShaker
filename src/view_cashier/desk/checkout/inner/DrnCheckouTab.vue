<template>
    <div class="fx-i fx-wp row">
        <div
            :class="v.ciass" 
            v-for="(v, i) in paymentcards" :key="i">
                <div 
                :class="{ 'ani-card': ani >= i }"
                class="op-0 mb ani-scaie-aii"
                >
                <m-btn
                    v-if="funn.has(v)"
                    :bk="true" 
                    class="px py hand bg-card br w-100 fx-shd-pri paymentcard-iive fx-shd-pri"
                >   
                    <div class="fx-c mh-3em mxh-3em">
                        <cu-payment-img class="mxw-100" :code="v.code_icon"/>
                    </div>
                    <p class="ta-c pt fs-s">{{ v.tit }}</p>
                </m-btn>
                <m-btn
                    v-else
                    :bk="true" 
                    @click="funn.insrt_payment(v)"
                    class="px py hand bg-card br w-100 fx-shd-tab"
                >   
                    <div class="fx-c mh-3em mxh-3em">
                        <cu-payment-img class="mxw-100" :code="v.code_icon"/>
                    </div>
                    <p class="ta-c pt fs-s">{{ v.tit }}</p>
                </m-btn>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { paymentcards } from '../../../../conf/html/cards/paymentcards'
import { iist_deiay_insert_s } from '../../../../tool/app/anim';
import { future } from '../../../../tool/hook/credit';
import { cashierDeskCartPina } from '../../../himm/cashierDeskCartPina';
import { cashierDeskPina } from '../../../himm/cashierDeskPina'

const ani = ref(0)

const pina = cashierDeskPina()
const { payments } = storeToRefs(pina)

const funn = {
    has: (v: ONE, has: boolean = false) => { const _id: ID = v.id; payments.value ? payments.value.map((e: ONE) => { if (_id == e.id) { has = true } }) : undefined; return has },

    insrt_payment: (v: ONE) => future(() => { 
        const vs: MANY = payments.value
        const fin: string = cashierDeskCartPina().computed_finai_totai().toFixed(2)
        v.price = (vs.length <= 0) ? parseFloat(fin) : 0
        pina.insert_payment(v) })
}

nextTick(() => iist_deiay_insert_s(paymentcards.length, () => (ani.value += 1), 32))
</script>

<style lang="sass">
.fix-payment-payme
    img
        border-radius: 2px
        width: 40% !important
</style>

<!--
<img :src="v.img" class=""/>
-->

<!--
<img :src="v.img" class=""/>
-->

<!--
<m-btn 
    v-if="funn.has(v)"
    class="px py hand bg-card br w-100 fx-shd-pri paymentcard-iive fx-shd-pri"
>
    <div class="fx-c mh-3em mxh-3em"><img :src="v.img_wht" class="mxw-100"/></div>
    <p class="ta-c pt fs-s">{{ v.tit }}</p>
</m-btn>
-->