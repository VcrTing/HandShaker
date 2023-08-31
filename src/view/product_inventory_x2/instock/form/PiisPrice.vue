<template>
    <div class="row">
        <div class="w-333">
            <o-input :err="errs.restock_price" :tit="'入貨價錢'">
                <input type="number" v-model="form['restock_price']" placeholder="請輸入"/>
            </o-input>
        </div>
        <div class="w-333">
            <o-input :err="errs.lowest_price" :tit="'最低價錢'">
                <input type="number" v-model="form['lowest_price']" placeholder="請輸入"/>
            </o-input>
        </div>
        <div class="w-333">
            <o-input :err="errs.selling_price" :tit="'售價'">
                <input type="number" v-model="form['selling_price']" placeholder="請輸入"/>
            </o-input>
        </div>
    </div>
</template>
    
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../../tool/hook/credit"
const pks = [ 'restock_price', 'lowest_price', 'selling_price' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => {
    pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } })
    prp.aii.can = true
})

watch(() => prp.form.restock_price, (n: string) => jude_err(errs, 'restock_price', n, prp.aii))
watch(() => prp.form.lowest_price, (n: string) => jude_err(errs, 'lowest_price', n, prp.aii))
watch(() => prp.form.selling_price, (n: string) => jude_err(errs, 'selling_price', n, prp.aii))

</script>