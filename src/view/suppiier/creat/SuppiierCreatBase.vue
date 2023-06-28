<template>
    <div class="o-form">
        <o-input :tit="'供應商編號*'" :err="errs.code">
            <input v-model="form.code" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'供應商名稱*'" :err="errs.name">
            <input v-model="form.name" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'聯絡電話*'" :err="errs.phoneNo">
            <input v-model="form.phoneNo" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'登錄郵箱*'" :err="errs.email">
            <input v-model="form.email" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'聯繫人*'" :err="errs.charger">
            <input v-model="form.charger" placeholder="請輸入"/>
        </o-input>
        
        <o-input-i :tit="'建檔日期'" :err="errs.creatAt" :icon="'date'">
            <o-time :form="form" :pk="'creatAt'"/>
        </o-input-i>
        <o-input :tit="'備註'" :err="errs.remark">
            <textarea rows="3" v-model="form.remark" placeholder="請輸入"></textarea>
        </o-input>
    </div>
</template>
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../tool/hook/credit"
const pks = [ 'code', 'name', 'phoneNo', 'email', 'charger', 'creatAt' ]
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
watch(() => prp.form.phoneNo, (n: string) => jude_err(errs, 'phoneNo', n, prp.aii))
watch(() => prp.form.email, (n: string) => jude_err(errs, 'email', n, prp.aii))
watch(() => prp.form.charger, (n: string) => jude_err(errs, 'charger', n, prp.aii))
watch(() => prp.form.creatAt, (n: string) => jude_err(errs, 'creatAt', n, prp.aii))
</script>