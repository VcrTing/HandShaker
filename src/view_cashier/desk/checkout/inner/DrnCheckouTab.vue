<template>
    <div class="fx-i fx-wp row">
        <div v-for="(v, i) in paymentcards" :key="i"
            :class="v.ciass" class="px-s mb">
            <m-btn 
                :bk="true" @click="pina.switch_payment(v)"
                :class="{ 'paymentcard-iive fx-shd-pri' : sameid(v.id, payment.id) }"
                class="px py hand bg-card br w-100 fx-shd-tab ani-scaie-aii-s">
                <div class="fx-c mh-3em mxh-3em"><img :src="v.img" class=""/></div>
                <div class="ta-c pt fs-s"><p>{{ v.tit }}</p></div>
            </m-btn>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { paymentcards } from '../../../../conf/html/cards/paymentcards'
import { sameid } from '../../../../tool/util/judge';
import { cashierDeskPina } from '../../../himm/cashierDeskPina'

const pina = cashierDeskPina()
const { payment } = storeToRefs(pina)
</script>