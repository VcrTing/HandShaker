<template>
    <div class="o-form">
        <o-input :tit="'倉庫名稱'" :err="errs.name">
            <input v-model="form.name" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'倉庫聯絡人'" :err="errs.charger">
            <input v-model="form.charger" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'倉庫聯絡人電話'" :err="errs.phoneNo">
            <input v-model="form.phoneNo" placeholder="請輸入"/>
        </o-input>
        
        <o-input :tit="'倉庫地址'" :err="errs.address">
            <textarea rows="6" v-model="form.address" placeholder="請輸入"></textarea>
        </o-input>
    </div>
</template>
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../tool/hook/credit"
const pks = [ 'name', 'charger', 'phoneNo', 'address' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => {
    pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } })
    prp.aii.can = true
})

watch(() => prp.form.name, (n: string) => jude_err(errs, 'name', n, prp.aii))
watch(() => prp.form.charger, (n: string) => jude_err(errs, 'charger', n, prp.aii))
watch(() => prp.form.phoneNo, (n: string) => jude_err(errs, 'phoneNo', n, prp.aii))
watch(() => prp.form.address, (n: string) => jude_err(errs, 'address', n, prp.aii))
</script>