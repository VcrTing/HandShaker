<template>
    <Pan :idx="201">
        <pan-inner :tit="'單品優惠'">
            <div>
                <div class="py pi"><co-prod-msg-tiny :num="product.product_id" :named="product.name"/></div>

            </div>
            <div class="pi-row">
                <div class="pi">商品單價:&nbsp;&nbsp;{{ funn.price() }}</div>
                <div class="pi py-s">購買數量:&nbsp;&nbsp;{{ choiseOne.quantity }}</div>
                <div class="pi py-s">單品總價:&nbsp;&nbsp;
                    <div class="d-ib" :class="{ 'txt-money': !pina.comput_num_x_price(choiseOne) }">
                        HKD&nbsp;{{ money( pina.comput_num_x_price(choiseOne) ) }}</div>
                </div>
            </div>

            <div class="py-x3">
                <div class="fx-i">
                    <m-btn :bk="true" @click="funn.switchMod(false)"
                        :class="{ 'btn-pri': !choiseOne.is_ratio }" 
                        class="px py br br-r-0 ani-scaie-aii">單品減價</m-btn>

                    <m-btn :bk="true" @click="funn.switchMod(true)"
                        :class="{ 'btn-pri': choiseOne.is_ratio }" 
                        class="px py br br-i-0 ani-scaie-aii">單品折扣</m-btn>
                </div>
            </div>

            <div v-if="choiseOne.is_ratio" class="py-x3">
                <h6 class="pb">
                    單品折扣
                </h6>
                <o-input :tit="'折扣率（0 - 1 之間的數字）'" :err="errs.discount">
                    <input type="number" @blur="funn.vfy()" v-model="choiseOne.discount" placeholder="請輸入要打折的折扣數值"/>
                </o-input>
            </div>

            <div v-else class="py-x3">
                <h6 class="pb">
                    單品減價
                </h6>
                <o-input :tit="'減價金額（正數）'" :err="errs.discount">
                    <input type="number" v-model="choiseOne.discount" placeholder="請輸入要減去的價格"/>
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
            <div class="">
                <h6>計算&nbsp;&nbsp;</h6>
                <div class="pi pt-x2">
                    <div class="fx-i pi-row">
                        <p>{{ pina.comput_num_x_price(choiseOne) }}&nbsp;&nbsp;</p>
                        <p>{{ choiseOne.is_ratio ? 'x' : '-' }}&nbsp;&nbsp;</p>
                        <p>{{ choiseOne.discount }}&nbsp;&nbsp;</p>
                        <p>=&nbsp;&nbsp;</p>
                        <p>{{ pina.comput_one_totai(choiseOne) }}</p>
                    </div>
                </div>
            </div>
            <div class="py-x3"></div>
            <o-btn-save :aii="me" @click="funn.submit" class="w-100" :tit="'確定'"/>
        </pan-inner>
    </Pan>
</template>

<script lang="ts" setup>
import vai_cashier from "../../../conf/data/vai_cashier";
import { $pan } from "../../../plugin/mitt";
import { future, future_of_ioading, gen_form_err } from "../../../tool/hook/credit"
import { money } from "../../../tool/util/view";
import { cashierDeskCartPina } from "../../himm/cashierDeskCartPina";

const pina = cashierDeskCartPina()
const { choiseOne } = storeToRefs(pina)

const product = computed(() => { return choiseOne.value.__product ? choiseOne.value.__product : { } })

const errs = reactive(gen_form_err({ discount: '' }))

watch(() => choiseOne.value.discount, (n: number) => {
    const totai: number = pina.comput_one_totai(choiseOne.value)

    // 非 ratio
    if (!choiseOne.value.is_ratio) {
        if (totai <= 0) { 
            choiseOne.value.discount = pina.comput_num_x_price(choiseOne.value);
            errs.discount = true
        } else {
            errs.discount = false
        }
        if (!n) { n = 0 }
    } else {
        // choiseOne.value.discount = vai_cashier.vfy_ratio(n)
    }
})

const funn = {
    price: () => { const src: ONE = product.value; return src.new_selling_price ? src.new_selling_price : 0 },
    submit: () => future_of_ioading(me, async () => { $pan(0) }),

    switchMod: (b: boolean) => future(() => {
        choiseOne.value.is_ratio = b
        if (b) { choiseOne.value.discount = 1;  }
        else { choiseOne.value.discount = 0; }
        errs.discount = false
    }),
    vfy: () => { if (choiseOne.value.is_ratio) { choiseOne.value.discount = vai_cashier.vfy_ratio( choiseOne.value.discount ) } }
}

const me = reactive({
    nows: [ 0 ], now: 0, ioading: false, msg: ''
})
</script>