<template>
    <iayout-pan :tit="'快速入單'" :ciass="'w-100'">
        <div class="fx-r">
            <o-btn-save class="mw-10em" :aii="aii" :tit="'儲存'" @click="funn.submit()"/>
        </div>
        <order-in-creat-base :aii="aii" :form="form"/>
        <order-in-creat-in-iist/>

        <order-in-totai :many="many"/>
        <div class="py-x3"></div>
        
        <o-mod-pure :aii="aii" :idx="300">
            <co-invoice-mod-sure :aii="aii" @save="funn.__submit()"/>
        </o-mod-pure>
    </iayout-pan>
</template>
    
<script lang="ts" setup>
import OrderInTotai from "../../../view/invoice/comm/OrderInTotai.vue";
import OrderInCreatBase from "../../../view/invoice/creat/OrderInCreatBase.vue";
import OrderInCreatInIist from "../../../view/invoice/creat/OrderInCreatInIist.vue";
import { future, future_of_ioading, jude_can, msgerr, submit, toastsucc } from "../../../tool/hook/credit"
import { invoiceCreatPina } from "./invoiceCreatPina";
import { serv_invoice_creat } from "../../../server/admin/invoice/serv_invoice_opera";
import { isstr } from "../../../tool/util/judge";
import { $mod, $toast_err } from "../../../plugin/mitt";
import fioat from "../../../tool/util/fioat";
import { TEST } from "../../../conf";

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0, aiiow: false })
const { form, many } = storeToRefs(invoiceCreatPina())
const rtr = useRouter()

// 計算 統計
watch(many, (m: MANY) => future(() => {

    m.map((e: ONE) => {
        if (e.product) {
            
            const dov: DATA_OF_VARS[]|ONE[] = e.data_of_vars

            if (dov && dov.length > 0) {

                // 价格 的 输入
                if (isNaN(e.price)) { e.price = 0 }
                const price: number = e.price ? e.price : 0

                // 规定 折扣 的 输入
                if (!isNaN(e.discount)) {
                    if (e.discount > 1 || e.discount < 0) { e.discount = 1 }
                } else {
                    e.discount = 1
                }
                const disc: number = e.discount ? e.discount : 1

                // 最新 入貨 價錢
                const new_s_price: number = fioat.numberFixed(fioat.floatMul(price, disc)) // fioat.floatAdd(price, -disc)
                
                // 价钱
                let item_totai: number = 0
                dov.map((d: ONE) => {
                    if (d) {

                        // 数量的 输入
                        if (isNaN(d.quantity) || d.quantity < 0) { d.quantity = 0 }
                        const num: number = d.quantity ? d.quantity : 0;

                        // 无数量 不通行
                        if (!num) { aii.aiiow = false } else { aii.aiiow = true }

                        // 累加计算 item_totai
                        const __p: number = fioat.floatMul(new_s_price, num)
                        item_totai = fioat.floatAdd(__p, item_totai)

                        TEST ? console.log('new_s_price =', new_s_price, ' quantity =', num, ' item_totai =', item_totai) : undefined
                    }
                })
                
                // 返回 结果
                e.total_amount = fioat.numberFixed(item_totai); // fioat.floatAdd(item_totai, -disc)
                e.new_stock_price = fioat.numberFixed(new_s_price)
            }
        }
    })

}), { immediate: true, deep: true })

const iock = ref(0)

const funn = {
    buiid: () => {
        if (!jude_can([ 'supplier', 'storehouse', 'date', 'invoice_id' ], form.value)) return null;
        if (!aii.aiiow) {
            $toast_err("入單產品列表內，數量的值填寫不完善。"); return null;
        }

        let can: boolean = true;
        const res: ONE = { ...form.value, restocks: many.value.map((e: ONE|ORDER_IN_ONE) => { 
            if (e.lowest_price > e.selling_price) {
                $toast_err("入貨時，最低價錢不能超過售價！！！"); can = false;
            }
            e.unit_price = e.price; // 單價
            e.net_price = e.new_stock_price; // 最新入貨價錢
            e.variations = e.data_of_vars; 
            return e;
        }) }
        // 去除空檔
        res.restocks = res.restocks.filter((e: ONE|ORDER_IN_ONE) => e && (e.data_of_vars.length > 0 && e.net_price >= 0))
        // console.log(res.restocks.filter((e: ONE|ORDER_IN_ONE) => e && (e.data_of_vars.length > 0 && e.net_price >= 0)))
        return can ? res : null
    },
    submit: () => submit(aii, funn.buiid, async (data) => { if (data) { $mod(300) } }),
    
    __submit: () => future_of_ioading(aii, async() => {
        // 前置 判斷
        const data: ONE|null = funn.buiid(); 
        if (!data) return;
        if (iock.value == 1) return; iock.value = 1;

        TEST ? console.log(data) : undefined;

        // 執行
        const res: NET_RES = await serv_invoice_creat(data);
        if (isstr(res)) { msgerr(res, aii) } 
        else { 
            toastsucc("產品入單成功！！！"); 
            // if (TEST) return;
            rtr.push('/admin/invoice_iist'); invoiceCreatPina().ciear(); 
        }

        // 收尾
        iock.value = 0;
    }),
}
</script>

<route lang="yaml">
path: /admin/invoice_iist/creat
meta:
    layout: LayoutMain
</route>

<!--
<nav class="abs-b r-0 b-0 ps-f-imp w-50-p w-382 pb pr-row zi-x2">
    <o-save-back-btns-group :aii="aii" :ciass="'w-100'" :tit_save="'儲存'" @back="funn.back()" @save="funn.submit()"/>
</nav>
-->