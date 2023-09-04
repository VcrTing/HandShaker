<template>
    <div class="o-form">
        <div class="o-form-pan">
            <h5>調貨樣式</h5>
            <o-input :tit="'樣式'" :err="errs.variation"> 
                <select v-model="form.variation">
                    <option v-for="(v, i) in product_variations" :key="i" :value="v.id">{{ v.name }}</option>
                </select>
            </o-input>
        </div>
        <div class="o-form-pan">
            <h5>調貨倉庫</h5>
            <o-input :tit="'入貨倉庫'" :err="errs.storehouse_to"> 
                <co-warehouse-seiect :form="form" :pk="'storehouse_to'"/>
            </o-input>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from "../../../../pages/admin/product_inventory/pageProducEditPina";
import { gen_form_err, jude_err } from "../../../../tool/hook/credit"
const pks = [ 'variation', 'storehouse_to' ]
const prp = defineProps<{ form: ONE, aii: ONE, }>();

const errs = reactive(gen_form_err(prp.form));

const { product_variations } = storeToRefs(pageProducEditPina())

watch(() => prp.aii.sign, () => {
    pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } })
    prp.aii.can = true
})

watch(() => prp.form.variation, (n: string) => jude_err(errs, 'variation', n, prp.aii))
watch(() => prp.form.storehouse_to, (n: string) => jude_err(errs, 'storehouse_to', n, prp.aii))
</script>