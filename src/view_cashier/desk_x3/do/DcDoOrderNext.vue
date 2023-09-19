<template>
    <o-btn-save :aii="aii" @click="checkout" :tit="'結算'" />
</template>
    
<script lang="ts" setup>
import { cashierDeskPina } from "../../himm/cashierDeskPina";
import { $mod } from "../../../plugin/mitt/index";
import { $pan } from "../../../plugin/mitt/index";
import { future, toasterr } from "../../../tool/hook/credit";
import { cashierDeskCartPina } from "../../himm/cashierDeskCartPina";

const aii = reactive({ ioading: false, msg: '' })

const pina = cashierDeskCartPina()
const { carts } = storeToRefs(pina)

const checkout = () => future(() => {
    const many: MANY = carts.value
    // 購物車 數量
    if (many.length <= 0) { toasterr("結算清單為空！！！"); return true }

    // 
    // const pg: number = cashierDeskPina().r_page

    $pan(0)
    $mod(0)
    cashierDeskPina().save_sts('ioading', false)
    /*
    if (pg < 3) {
        cashierDeskPina().switch_r_page(3)
        cashierDeskPina().save_sts('checking', false)
    } 
    else 
    */
    // if (pg == 3) {
        cashierDeskPina().save_sts('checking', true)
        cashierDeskPina().switch_r_page(100)
    // }
})
</script>