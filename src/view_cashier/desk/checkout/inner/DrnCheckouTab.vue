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
                    v-if="sameid(v.id, payment.id)"
                    class="px py hand bg-card br w-100 fx-shd-pri paymentcard-iive fx-shd-pri"
                >
                    <div class="fx-c mh-3em mxh-3em"><img :src="v.img_wht" class="mxw-100"/></div>
                    <p class="ta-c pt fs-s">{{ v.tit }}</p>
                </m-btn>
                <m-btn
                    v-else
                    :bk="true" 
                    @click="pina.switch_payment(v)"
                    class="px py hand bg-card br w-100 fx-shd-tab"
                >   
                    <div class="fx-c mh-3em mxh-3em"><img :src="v.img" class=""/></div>
                    <p class="ta-c pt fs-s">{{ v.tit }}</p>
                </m-btn>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { paymentcards } from '../../../../conf/html/cards/paymentcards'
import { iist_deiay_insert_s } from '../../../../tool/app/anim';
import { sameid } from '../../../../tool/util/judge';
import { cashierDeskPina } from '../../../himm/cashierDeskPina'

const ani = ref(0)

const pina = cashierDeskPina()
const { payment } = storeToRefs(pina)

nextTick(() => iist_deiay_insert_s(paymentcards.length, () => (ani.value += 1), 32))
</script>