<template>
    <div class="row">
        <div class="w-333">
            <o-input :err="errs.in_price" :tit="'入貨價錢'">
                <input type="number" v-model="form['in_price']" placeholder="請輸入"/>
            </o-input>
        </div>
        <div class="w-333">
            <o-input :err="errs.iow_price" :tit="'最低價錢'">
                <input type="number" v-model="form['iow_price']" placeholder="請輸入"/>
            </o-input>
        </div>
        <div class="w-333">
            <o-input :err="errs.price" :tit="'售價'">
                <input type="number" v-model="form['price']" placeholder="請輸入"/>
            </o-input>
        </div>
    </div>
</template>
    
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../../tool/hook/credit"
const pks = [ 'in_price', 'iow_price', 'price' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => {
    pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } })
    prp.aii.can = true
})

watch(() => prp.form.in_price, (n: string) => jude_err(errs, 'in_price', n, prp.aii))
watch(() => prp.form.iow_price, (n: string) => jude_err(errs, 'iow_price', n, prp.aii))
watch(() => prp.form.price, (n: string) => jude_err(errs, 'price', n, prp.aii))

</script>