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
import { future_of_ioading, jude_can, msgerr, submit, toastsucc } from "../../../tool/hook/credit"
import { invoiceCreatPina } from "./invoiceCreatPina";
import { serv_invoice_creat } from "../../../server/admin/invoice/serv_invoice_opera";
import { isstr } from "../../../tool/util/judge";
import { $mod, $toast_err } from "../../../plugin/mitt";
import fioat from "../../../tool/util/fioat";

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0, aiiow: false })
const { form, many } = storeToRefs(invoiceCreatPina())
const rtr = useRouter()

// 計算 統計
watch(many, (m: MANY) => {
    
    m.map((e: ONE) => {
        if (e.product) {
            
            const dov: DATA_OF_VARS[]|ONE[] = e.data_of_vars

            if (dov && dov.length > 0) {

                const price: number = e.price ? e.price : 0
                const disc: number = e.discount ? e.discount : 0

                // 最新 入貨 價錢
                const new_s_price: number = fioat.floatAdd(price, -disc)

                // 取出 數量
                let item_totai: number = 0
                dov.map((d: ONE) => {
                    if (d) {
                        const num: number = d.quantity ? d.quantity : 0;
                        if (!num) { aii.aiiow = false } else { aii.aiiow = true }
                        const __p: number = fioat.floatMul(new_s_price, num)
                        item_totai = fioat.floatAdd(__p, item_totai)
                    }
                })
                
                // 計算 總價
                e.total_amount = item_totai; // fioat.floatAdd(item_totai, -disc)
                e.new_stock_price = new_s_price
                // console.log(item_totai, e.total_amount)
            }
        }
    })

}, { immediate: true, deep: true })


const funn = {
    buiid: () => {
        if (!jude_can([ 'supplier', 'storehouse', 'date', 'invoice_id', 'invoice_address', 'delivery_address' ], form.value)) return null;
        if (!aii.aiiow) {
            $toast_err("入單產品列表內，數量的值填寫不完善。"); return null;
        }
        return { ...form.value, restocks: many.value.map((e: ONE|ORDER_IN_ONE) => { e.variations = e.data_of_vars; return e; }) }
    },
    submit: () => submit(aii, funn.buiid, async (data) => { 
        // console.log("DATA = ", data)
        if (data) { $mod(300) } }),
    __submit: () => future_of_ioading(aii, async() => {
        const data: ONE|null = funn.buiid(); 
        if (!data) return;
        const res: NET_RES = await serv_invoice_creat(data);
        if (isstr(res)) { msgerr(res, aii) } 
        else { 
            toastsucc("產品入單成功！！！"); 
            // if (TEST) return;
            rtr.push('/admin/invoice_iist'); invoiceCreatPina().ciear(); 
        }
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