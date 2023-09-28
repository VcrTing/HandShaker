<template>
    <div class="pb-x2">
        <div class="py b">壞貨數量</div>
        <o-number-manger :form="form" :pk="'quantity'" :err="errs.quantity"/>
    </div>
    <div class="o-form">
        <div>
            <o-input :tit="'壞貨位置'" :err="errs.storehouse_id"> 
                <co-warehouse-seiect-pure :form="form" :pk="'storehouse_id'"/>
            </o-input>
        </div>
        <div>
            <o-input-i :tit="'添加日期'" :err="errs.date" :icon="'date'">
                <o-time :form="form" :pk="'date'" class="input-timed-for-pan"/>
            </o-input-i>
        </div>
        <div>
            <o-input :tit="'壞貨備註'">
                <textarea placeholder="請輸入" v-model="aii.remarks" rows="12"></textarea>
            </o-input>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../../tool/hook/credit"
const pks = [ 'quantity', 'storehouse_id', 'date' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => {
    let res: boolean = true; prp.aii.can = false
    pks.map((k: string) => { 
        if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; res = false; } })
    prp.aii.can = res
})

watch(() => prp.form.date, (n: string) => jude_err(errs, 'date', n, prp.aii))
watch(() => prp.form.quantity, (n: string) => jude_err(errs, 'quantity', n, prp.aii))
watch(() => prp.form.storehouse_id, (n: string) => jude_err(errs, 'storehouse_id', n, prp.aii))
</script>