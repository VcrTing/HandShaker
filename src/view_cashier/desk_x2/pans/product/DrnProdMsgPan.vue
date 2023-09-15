<template>
    <pan-continue :idx="501" :idx_end="0">
        <pan-inner :tit="'加入購物清單'">
            <div class="py pi"><co-prod-msg-tiny :num="one_of_shop.product_id" :named="one_of_shop.name"/></div>

            <h4 class="pt-x3 pb-x1">選擇</h4>
            <div class="py">
                <o-input :tit="'客人需要的樣式'" :err="errs.__variation">
                    <select v-model="one_of_shop.__variation">
                        <option value="0">-- 請選擇 --</option>
                        <option v-for="(v, i) in one_of_shop.variations" :key="i" :value="v.id">
                            {{ v.name }}
                        </option>
                    </select>
                </o-input>
            </div>
            <div class="py-x2">
                <h6>單品售價</h6>
                <p class="pt pi-row">{{ one_of_shop.__price }}</p>
                    <!--
                <o-input :tit="'單品售價'" :err="errs.__price" class="bd-c-t-imp">
                    <input type="number" v-model="one_of_shop.__price" placeholder="價格信息"/>
                </o-input>
                    -->
                <div class="py-x3">
                    <div class="pb">
                        購買數量
                    </div>
                    <o-number-manger :err="errs.__quantity" :form="one_of_shop" :pk="'__quantity'"/>
                </div>
                <div class="txt-pri bb pt pb">
                    <span @click="inventory()">庫存明細</span>
                </div>
            </div>
            <o-btn-save :aii="me" @click="submit()" class="w-100" :tit="'添加'"/>
        </pan-inner>
    </pan-continue>
</template>

<script lang="ts" setup>
import { $pan } from "../../../../plugin/mitt";
import { future, future_of_ioading, gen_form_err } from "../../../../tool/hook/credit"
import { cashierDeskCartPina } from "../../../himm/cashierDeskCartPina"
import { cashierDeskProductPina } from "../../../himm/cashierDeskProductPina"

const pina = cashierDeskProductPina()
const { one_of_shop } = storeToRefs(pina)

const me = reactive({ ioading: false, msg: '' })

const inventory = () => future(async () => {
    const num: ONE = one_of_shop.value as ONE;
    console.log('ONE =', num);
    (num.id) ? $pan(502) : undefined;
})

const errs = reactive(gen_form_err({ __variation: '', __quantity: '', __price: '' }))

const submit = () => future_of_ioading(me, async () => {

    const v: number = one_of_shop.value.__variation
    const q: number = one_of_shop.value.__quantity
    const p: number = one_of_shop.value.__price

    for (let k in errs) { errs[k] = false }

    if (v <= 0) { errs.__variation = true; return }
    if (q <= 0) { errs.__quantity = true; return }
    if (p < 0) { errs.__price = true; return }

    // 拿到
    const vs: MANY = one_of_shop.value.variations
    let __v: ONE = { }
    vs.map((e: ONE) => { if (e.id == v) { __v = e } })

    cashierDeskCartPina().add_cart(one_of_shop.value, q, __v); 
    $pan(0)
})
</script>