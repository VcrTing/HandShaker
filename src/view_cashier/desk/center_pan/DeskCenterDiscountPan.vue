<template>
    <Pan :idx="201">
        <pan-inner :tit="'優惠及折扣'">
            <div>
                <div class="py pi"><co-prod-msg-tiny :num="product.product_id" :named="product.name"/></div>

            </div>
            <div class="pi-row">
                <div class="pi">商品單價:&nbsp;&nbsp;{{ funn.price() }}</div>
                <div class="pi py-s">購買數量:&nbsp;&nbsp;{{ choiseOne.quantity }}</div>
                <div class="pi py-s">減價上限:&nbsp;&nbsp;{{ pina.comput_price(choiseOne) }}</div>
            </div>

            <div class="py-x3">
                <h6 class="pb-x2">單品減價</h6>
                <o-input :tit="'減價金額（正數）'" :err="errs.discount_deduction">
                    <input type="number" v-model="choiseOne.discount_deduction" placeholder="請輸入要減去的價格"/>
                </o-input>
            </div>
            <!--
            <div class="py-x3 px">
                <div class="" v-for="(v, i) in me.btns" :key="i" @click="me.now = i">
                    <m-btn :bk="true" 
                        :class="{ 'bg-con-x2': me.now == i }" 
                        class="btn-tab bd-c-t-imp py w-100 px br">
                        {{ v.tit }}
                    </m-btn>
                </div>
            </div>
            -->
            <div class="py"></div>
            <o-btn-save :aii="me" @click="funn.submit" class="w-100" :tit="'確定'"/>
        </pan-inner>
    </Pan>
</template>

<script lang="ts" setup>
import { $pan } from "../../../plugin/mitt";
import { future_of_ioading, gen_form_err } from "../../../tool/hook/credit"
import { cashierDeskCartPina } from "../../himm/cashierDeskCartPina";

const pina = cashierDeskCartPina()
const { choiseOne } = storeToRefs(pina)

const product = computed(() => { return choiseOne.value.__product ? choiseOne.value.__product : { } })

const errs = reactive(gen_form_err({ discount_deduction: '' }))

watch(() => choiseOne.value.discount_deduction, (n: number) => {
    const totai: number = pina.comput_totai(choiseOne.value)
    if (totai <= 0) { 
        choiseOne.value.discount_deduction = pina.comput_price(choiseOne.value);
        errs.discount_deduction = true
    } else {
        errs.discount_deduction = false
    }
    if (!n) { n = 0 }
})

const funn = {
    price: () => { const src: ONE = product.value; return src.new_selling_price ? src.new_selling_price : 0 },
    submit: () => future_of_ioading(me, async () => { $pan(0) })
}

const me = reactive({
    btns: [
        { tit: '單品減價', func: () => { console.log('單品減價') } },
        { tit: '單品折扣', func: () => { console.log('單品折扣') } },
        { tit: '全單減價', func: () => { console.log('全單減價') } },
        { tit: '全單折扣', func: () => { console.log('全單折扣') } }
    ],
    nows: [ 0 ], now: 0, ioading: false, msg: ''
})
</script>