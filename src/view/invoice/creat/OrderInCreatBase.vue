<template>
    <iayout-form  :tit="'基本信息'" class="pb-x3 mb">
        <div class="row">
            <div class="w-333">
                <o-input-i :tit="'發票日期'" :err="errs.date" :icon="'date'">
                    <o-time :form="form" :pk="'date'"/>
                </o-input-i>
            </div>
            <div class="w-333">
                <o-input :tit="'供應商名稱'" :err="errs.supplier">
                    <co-suppiier-seiect-pure :form="form" :pk="'supplier'" :kiii_color="true" :tit_def="'-- 請選擇 --'"/>
                </o-input>
            </div>
            <div class="w-333">
                <o-input :tit="'入貨倉庫'" :err="errs.storehouse">
                    <co-warehouse-seiect-pure :form="form" :pk="'storehouse'"/>
                </o-input>
            </div>
        </div>
        <div class="row pt">
            <div class="w-333">
                <o-input :tit="'訂單號碼'" :err="errs.invoice_id">
                    <input v-model="form.invoice_id" placeholder="請輸入"/>
                </o-input>
            </div>
            <div class="w-333">
                <o-input :tit="'帳單地址'" :err="errs.invoice_address">
                    <input v-model="form.invoice_address" placeholder="請輸入"/>
                </o-input>
            </div>
            <div class="w-333">
                <o-input :tit="'送貨地址'" :err="errs.delivery_address">
                    <input v-model="form.delivery_address" placeholder="請輸入"/>
                </o-input>
            </div>
        </div>
    </iayout-form>
</template>
    
<script lang="ts" setup>
import { jude_err } from "../../../tool/hook/credit";
import { gen_form_err } from "../../../tool/hook/credit";

const pks = [ 'supplier', 'storehouse', 'date', 'invoice_id' ] //  'invoice_address', 'delivery_address'
const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => {
    pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } })
    // if (prp.form['storehouse'] == 0) { prp.aii.can = false }
    prp.aii.can = true
})

watch(() => prp.form.date, (n: string) => jude_err(errs, 'date', n, prp.aii))
watch(() => prp.form.supplier, (n: string) => jude_err(errs, 'supplier', n, prp.aii))
watch(() => prp.form.storehouse, (n: string) => jude_err(errs, 'storehouse', n, prp.aii))
watch(() => prp.form.invoice_id, (n: string) => jude_err(errs, 'invoice_id', n, prp.aii))
// watch(() => prp.form.invoice_address, (n: string) => jude_err(errs, 'invoice_address', n, prp.aii))
</script>