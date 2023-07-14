<template>
    <div class="o-form">
        <o-input :tit="'產品編號'" :err="errs.code">
            <input v-model="form.code" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'產品名稱'" :err="errs.name">
            <input v-model="form.name" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'數量'" :err="errs.num">
            <input v-model="form.num" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'壞貨位置'" :err="errs.pos">
            <input v-model="form.pos" placeholder="請輸入"/>
        </o-input>
        
        <o-input-i :tit="'日期'" :err="errs.date" :icon="'date'">
            <o-time :form="form" :pk="'date'"/>
        </o-input-i>

        <o-input :tit="'備註'" :err="errs.remark">
            <textarea rows="3" v-model="form.remark" placeholder="請輸入"></textarea>
        </o-input>
    </div>
</template>
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../tool/hook/credit"
const pks = [ 'code', 'name', 'num', 'pos', 'date', 'remark' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => {
    pks.map((k: string) => {
        if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return }
    })
    prp.aii.can = true
})

watch(() => prp.form.code, (n: string) => jude_err(errs, 'code', n, prp.aii))
watch(() => prp.form.name, (n: string) => jude_err(errs, 'name', n, prp.aii))
watch(() => prp.form.num, (n: string) => jude_err(errs, 'num', n, prp.aii))
watch(() => prp.form.pos, (n: string) => jude_err(errs, 'pos', n, prp.aii))
watch(() => prp.form.date, (n: string) => jude_err(errs, 'date', n, prp.aii))
</script>