<template>
    <div class="o-form">
        <o-input :tit="'樣式'" :err="errs.variation"> 
            <select v-model="form['variation']">
                <option value="">-- 請選擇 --</option>
                <option v-for="(v, i) in many" :key="i" :value="v.id">
                    {{ v.name }}
                </option>
            </select>
        </o-input>
    </div>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from "../../../../pages/admin/product_inventory/pageProducEditPina";
import { gen_form_err, jude_err } from "../../../../tool/hook/credit"

const pks = [ 'variation' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();

const { one_of_edit } = storeToRefs(pageProducEditPina())

const many = computed(() => {
    const o: ONE = one_of_edit.value
    return o.variations ? o.variations : [ ]
})

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, (res: boolean = true) => {
    pks.map((k: string) => { 
        if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; res = false; } })
    prp.aii.can = res
})

watch(() => prp.form.variation, (n: string) => jude_err(errs, 'variation', n, prp.aii))
</script>