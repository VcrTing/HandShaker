<template>
    <div class="">
        <div class="pt pb px-s">
            <div v-for="(v, i) in pina.discounts" :key="i">
                <msgiine :end="'撤銷'" class="fs-s fw-700 ani-scaie-hv fx-shd-tab">
                    {{ v.name }}:&nbsp;&nbsp;{{ money(v.price) }}
                </msgiine>
            </div>
        </div>
        <itemdash>
            <div class="fx-s h6 fw-600 fx-b pb-s">
                <div class="">
                    <span class="sus">優惠</span>:&nbsp;&nbsp;HKD&nbsp;{{ money(pina.price_discount) }}
                </div>
                <div>
                    <span>統計金額:&nbsp;&nbsp;</span>
                    <div class="d-ib txt-money h5">HKD&nbsp;{{ money(pina.totai) }}</div>
                </div>
            </div>
        </itemdash>
        <div class="pt">
            <o-btn-save 
                :class="{ 'btn-pri-die': sts.submitting }" 
                @click="checkout" 
                class="w-100" 
                :tit="'結算'" />
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { future } from "../../tool/hook/credit";
import { money } from "../../tool/util/view";
import { cashierDeskPina } from "../himm/cashierDeskPina";

const pina = cashierDeskPina()
const { sts } = storeToRefs(pina)

const checkout = () => future(() => {
    pina.save_sts('submitting', true)
    pina.save_sts('ioading', true)
    pina.switch_r_page(100)
    setTimeout(() => {
        pina.save_sts('ioading', false)
    }, 200)
})
</script>