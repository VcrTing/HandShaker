<template>
    <pan-continue :idx="501" :idx_end="0">
        <pan-inner :tit="'加入購物清單'">
            <div class="py pi"><co-prod-msg-tiny :num="one_of_shop.product_id" :named="one_of_shop.name"/></div>

            <h4 class="pt-x3">選擇</h4>
            <div class="py-x2">
                <o-input :tit="'客人需要的樣式'" :err="errs.__variation">
                    <select v-model="one_of_shop.__variation">
                        <option value="0">-- 請選擇 --</option>
                        <option v-for="(v, i) in one_of_shop.variations" :key="i" :value="v.id">
                            {{ v.name }}
                        </option>
                    </select>
                </o-input>
            </div>
            <div class="py pi-row ani-bigger br tr-bg fx-aii-weak ts ani-scaie-hv">
                <p class="" v-if="one_of_shop.__variation" :class="{ 'txt-err': need_err }">
                    <div class="ani-softer d-ib">{{ inventorys_of_variation }}</div>&nbsp;&nbsp;件庫存
                    <div v-if="inventorys_of_variation == 0" class="ani-softer d-ib">(缺貨)</div>
                </p>
                <p v-else class="sus">沒有庫存信息，請先選擇一個樣式</p>
                <p class="pt">{{ money(one_of_shop.__price) }}&nbsp;HKD</p>
            </div>
            <div class="pb-x3 pt">
                <div class="py-x3">
                    <div class="pb">購買數量</div>
                    <o-number-manger :err="errs.__quantity" :form="one_of_shop" :max="inventorys_of_variation" :pk="'__quantity'"/>
                </div>
                <div class="txt-pri bb pt-x2 pb"><span @click="went_inventory()">庫存明細</span></div>
            </div>
            <o-btn-save :aii="me" @click="submit()" class="w-100" :tit="'添加'"/>
        </pan-inner>
    </pan-continue>
</template>

<script lang="ts" setup>
import vai_cashier_product from "../../../../conf/data/cashier/vai_cashier_product";
import { $pan } from "../../../../plugin/mitt";
import { userPina } from "../../../../plugin/pina/userPina";
import { future, future_of_ioading, gen_form_err, toasterr } from "../../../../tool/hook/credit"
import { money } from "../../../../tool/util/view";
import { cashierDeskCartPina } from "../../../himm/cashierDeskCartPina"
import { cashierDeskProductPina } from "../../../himm/cashierDeskProductPina"

const pina = cashierDeskProductPina()
const { one_of_shop } = storeToRefs(pina)
const { mystore } = storeToRefs(userPina())

const me = reactive({ ioading: false, msg: '' })

nextTick(() => future(() => {
    if (mystore.value == 0) { toasterr("該收銀員未綁定倉庫！！！") }
}))

const went_inventory = () => future(async () => {
    const num: ONE = one_of_shop.value as ONE; 
    (num.id) ? $pan(502) : undefined;
})

const stores = computed((): MANY => vai_cashier_product.storehouses(one_of_shop.value))

// 該樣式的庫存
const inventorys_of_variation = computed(() => {
    const store_id_of_user: ID = mystore.value ? mystore.value : 0
    return vai_cashier_product.quatitys_of_variation_in_store(stores.value, one_of_shop.value.__variation, store_id_of_user)
})

// 需不需要樣式標紅
const need_err = computed(() => ( (one_of_shop.value.__variation || one_of_shop.value.__variation <= 0) && inventorys_of_variation.value <= 0))

const errs = reactive(gen_form_err({ __variation: '', __quantity: '', __price: '' }))

const submit = () => future_of_ioading(me, async () => {
    const src: ONE = one_of_shop.value
    const v: number = src.__variation
    const q: number = src.__quantity
    const p: number = src.__price

    for (let k in errs) { errs[k] = false }

    if (v <= 0) { errs.__variation = true; return }
    if (q <= 0) { errs.__quantity = true; return }
    if (p < 0) { errs.__price = true; return }

    // 拿到
    const vs: MANY = src.variations; let __v: ONE = { }
    vs.map((e: ONE) => { if (e.id == v) { __v = e } })

    cashierDeskCartPina().add_cart(src, q, __v); 
    $pan(0)
})
</script>