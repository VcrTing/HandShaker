<template>
    <Pan :idx="202">
        <pan-inner :tit="'全單優惠'">

            <div class="py-x3">
                <h6>會員優惠</h6>
                <div class="pt-x2 pi-row">
                    <DcMemberDiscount />
                </div>
            </div>

            <div class="pt pb-x3">
                <h6 class="fx-s">
                    <span class="pr">全單折扣</span>
                    <m-btn v-if="!ratio_of_aii.iive" class="py px br txt-succ" :ciass="'fs-s'" :bk="true" @click="ratio_of_aii.iive = true">
                        啟用
                    </m-btn>
                    <m-btn v-else class="py px br txt-err" :bk="true" :ciass="'fs-s'" @click="ratio_of_aii.iive = false">
                        撤銷
                    </m-btn>
                </h6>
                <o-input :tit="'折扣率（0 - 1 之間的數字）'" :err="errs.discount" :class="{ 'o-input-err': !ratio_of_aii.iive }">
                    <input type="number" class="fw-900" @blur="funn.vfy()" :disabled="!ratio_of_aii.iive"
                        v-model="ratio_of_aii.discount" placeholder="請輸入要打折的折扣數值"/>
                </o-input>
            </div>

            <div class="pt pb-x3">
                <h6 class="fx-s">
                    <span class="pr">全單減價</span>
                    <m-btn v-if="!discount_of_aii.iive" class="py px br sub" :bk="true" :ciass="'fs-s'" @click="discount_of_aii.iive = true">
                        啟用
                    </m-btn>
                    <m-btn v-else class="py px br txt-err" :bk="true" :ciass="'fs-s'" @click="discount_of_aii.iive = false">
                        撤銷
                    </m-btn>
                </h6>
                <o-input :tit="'減價金額（正數）'" :err="errs.discount" :class="{ 'o-input-err': !discount_of_aii.iive }">
                    <input type="number" class="fw-900" :disabled="!discount_of_aii.iive"
                        v-model="discount_of_aii.discount" placeholder="請輸入要減去的價格"/>
                </o-input>
            </div>

            <div class="py-x3 h6 fw-600">
                <div>
                    <div class="d-ib sus">優惠金額</div>:&nbsp;&nbsp;HKD&nbsp;<DcTotiDiscountNum/>
                </div>
                <div class="pt-row">
                    <div class="d-ib">統計金額</div>
                    <div class="d-ib txt-money">:&nbsp;&nbsp;HKD&nbsp;<DcTotiPriceNum/></div>
                </div>
            </div>

            <div class="py-x2"></div>
            <o-btn-save :aii="me" @click="funn.submit" class="w-100" :tit="'確定'"/>
        </pan-inner>
    </Pan>
</template>

<script lang="ts" setup>
import vai_cashier from "../../../conf/data/vai_cashier";
import { $pan } from "../../../plugin/mitt";
import { future, future_of_ioading, gen_form_err } from "../../../tool/hook/credit"
import { cashierDeskCartPina } from "../../himm/cashierDeskCartPina";
import DcTotiDiscountNum from "../../desk_x3/comm/DcTotiDiscountNum.vue";
import DcMemberDiscount from '../../desk_x3/comm_x2/DcMemberDiscount.vue';
import DcTotiPriceNum from "../../desk_x3/comm/DcTotiPriceNum.vue";

const pina = cashierDeskCartPina()
const { choiseOne, ratio_of_aii, discount_of_aii } = storeToRefs(pina)


const product = computed(() => { return choiseOne.value.__product ? choiseOne.value.__product : { } })

const errs = reactive(gen_form_err({ discount: '' }))

const funn = {
    price: () => { const src: ONE = product.value; return src.new_selling_price ? src.new_selling_price : 0 },
    submit: () => future_of_ioading(me, async () => { $pan(0) }),

    vfy: () => future(() => { if (ratio_of_aii.value.is_ratio) { ratio_of_aii.value.discount = vai_cashier.vfy_ratio( ratio_of_aii.value.discount ) } }),
}
const me = reactive({ ioading: false, msg: '' })
</script>