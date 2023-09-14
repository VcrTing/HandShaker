<template>
    <aside>
        <dc-discount-tips/>
        <itemdash>
            <div class="fx-s h6 fw-600 fx-b pb-s">
                <div class="">
                    <span class="sus">優惠</span>:&nbsp;&nbsp;
                    <div class="d-ib ani-scaie-hv">HKD&nbsp;<DcTotiDiscountNum/></div>
                </div>
                <div>
                    <span>統計金額:&nbsp;&nbsp;</span>
                    <div class="d-ib txt-money h5 ani-scaie-hv">HKD&nbsp;<DcTotiPriceNum/></div>
                </div>
            </div>
        </itemdash>
        <div class="pt"><o-btn-save :aii="aii" @click="checkout" class="w-100" :tit="'結算'" /></div>
    </aside>
</template>
    
<script lang="ts" setup>
import { future, toasterr } from "../../tool/hook/credit";
import { cashierDeskCartPina } from "../himm/cashierDeskCartPina";

import DcDiscountTips from '../desk_x3/comm/DcDiscountTips.vue'
import DcTotiPriceNum from '../desk_x3/comm/DcTotiPriceNum.vue'
import DcTotiDiscountNum from '../desk_x3/comm/DcTotiDiscountNum.vue'
import { cashierDeskPina } from "../himm/cashierDeskPina";
import { $mod } from "../../plugin/mitt";
import { $pan } from "../../plugin/mitt/index";

const pina = cashierDeskCartPina()
const { carts } = storeToRefs(pina)

const aii = reactive({ ioading: false, msg: '' })

const checkout = () => future(() => {
    const many: MANY = carts.value
    // 購物車 數量
    if (many.length <= 0) { toasterr("結算清單為空！！！"); return true }

    // 
    const pg: number = cashierDeskPina().r_page

    $pan(0)
    $mod(0)
    cashierDeskPina().save_sts('ioading', false)

    if (pg < 3) {
        cashierDeskPina().switch_r_page(3)
        cashierDeskPina().save_sts('checking', false)
    } 
    else if (pg == 3) {
        cashierDeskPina().save_sts('checking', true)
        cashierDeskPina().switch_r_page(100)
    }
})
</script>