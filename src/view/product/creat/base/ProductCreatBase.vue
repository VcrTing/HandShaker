<template>
    <div class="o-form">
        <o-input :tit="'產品編號'" :err="errs.number">
            <input v-model="form.number" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'產品名稱'" :err="errs.name">
            <input v-model="form.name" placeholder="請輸入"/>
        </o-input>

        <o-input-i :tit="'建立日期'" :err="errs.creatAt" :icon="'date'">
            <o-time :form="form" :pk="'creatAt'"/>
        </o-input-i>
    </div>
</template>
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../../tool/hook/credit"
const pks = [ 'number', 'name', 'creatAt' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => { pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } }); prp.aii.can = true})

watch(() => prp.form.number, (n: string) => jude_err(errs, 'number', n, prp.aii))
watch(() => prp.form.name, (n: string) => jude_err(errs, 'name', n, prp.aii))
watch(() => prp.form.creatAt, (n: string) => jude_err(errs, 'creatAt', n, prp.aii))
</script>