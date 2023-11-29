<template>
    <div class="o-form">
        <div class="o-form-pan">
            <h5>樣式</h5>
            <o-input :tit="'樣式'" :err="errs.variation"> 
                <select v-model="form.variation">
                    <option v-for="(v, i) in product_variations" :key="i" :value="v.id">{{ v.name }}</option>
                </select>
            </o-input>
        </div>
        <div class="o-form-pan">
            <h5>入貨倉庫</h5>
            <o-input :tit="'入貨倉庫'" :err="errs.storehouse_to"> 
                <co-warehouse-seiect 
                    :pure="true"
                    :except="form['storehouse_from']"
                    :form="form" :pk="'storehouse_to'"/>
            </o-input>
        </div>

        <div class="o-form-pan">
            <h5>調貨數量</h5>
            <p class="pb-x2">最大調貨數:&nbsp;&nbsp;{{ max }}</p>
            <o-number-manger :form="form" :pk="'quantity'" :err="errs.quantity" :max="max"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from "../../../../pages/admin/product_inventory/pageProducEditPina";
import { gen_form_err, jude_err } from "../../../../tool/hook/credit"
const pks = [ 'variation', 'storehouse_to', 'quantity' ]
const prp = defineProps<{ form: ONE, aii: ONE, max: number }>();

const errs = reactive(gen_form_err(prp.form));

const { product_variations } = storeToRefs(pageProducEditPina())

watch(() => prp.aii.sign, () => { let res = true
    pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { res = false; } })
    prp.aii.can = res
})

watch(() => prp.form.variation, (n: string) => jude_err(errs, 'variation', n, prp.aii))
watch(() => prp.form.storehouse_to, (n: string) => jude_err(errs, 'storehouse_to', n, prp.aii))
watch(() => prp.form.quantity, (n: string) => jude_err(errs, 'quantity', n, prp.aii))
</script>