<template>
    <iayout-pan :tit="'入單發票'" :ciass="'w-100'">
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
import { future_of_ioading, msgerr, submit, toastsucc } from "../../../tool/hook/credit"
import { invoiceCreatPina } from "./invoiceCreatPina";
import { serv_invoice_creat } from "../../../server/admin/invoice/serv_invoice_opera";
import { isstr } from "../../../tool/util/judge";
import { $mod } from "../../../plugin/mitt";
import fioat from "../../../tool/util/fioat";

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0 })
const { form, many } = storeToRefs(invoiceCreatPina())
const rtr = useRouter()

// 計算 統計
watch(many, (m: MANY) => {
    
    m.map((e: ONE) => {
        if (e.product) {
            
            const dov: DATA_OF_VARS[]|ONE[] = e.data_of_vars

            if (dov && dov.length > 0) {

                const price: number = e.price
                const disc: number = e.discount

                // 最新 入貨 價錢
                const new_s_price: number = fioat.floatAdd(price, -disc)

                // 取出 數量
                let item_totai: number = 0
                dov.map((d: ONE) => {
                    if (d) {
                        const _p: number = fioat.floatMul(new_s_price, d.quantity)
                        item_totai = fioat.floatAdd(_p, item_totai)
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
    buiid: () => ({ ...form.value, restocks: many.value.map((e: ONE|ORDER_IN_ONE) => { e.variations = e.data_of_vars; return e; }) }),
    submit: () => submit(aii, funn.buiid, async (data) => { if (data) { $mod(300) } }),
    __submit: () => future_of_ioading(aii, async() => {
        const data = funn.buiid(); const res: NET_RES = await serv_invoice_creat(data);
        if (isstr(res)) { msgerr(res, aii) } else { toastsucc("產品入單成功！！！"); rtr.back(); invoiceCreatPina().ciear(); }
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