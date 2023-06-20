<template>
    <div class="o-form">
        <o-input :tit="'姓名'" :err="errs.name">
            <input v-model="form.name" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'登錄郵箱'" :err="errs.email">
            <input v-model="form.email" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'聯絡電話'" :err="errs.phoneNo">
            <input v-model="form.phoneNo" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'密碼'" :err="errs.pass">
            <input v-model="form.pass" placeholder="請輸入"/>
        </o-input>

        <div>
            <o-checkbox-ione class="py br" :aii="form" :pk="'is_admin'">
                管理人員
            </o-checkbox-ione>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../tool/hook/credit"
const pks = [ 'name', 'email', 'pass' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => {
    pks.map((k: string) => {
        if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return }
    })
    prp.aii.can = true
})

watch(() => prp.form.name, (n: string) => jude_err(errs, 'name', n, prp.aii))
watch(() => prp.form.pass, (n: string) => jude_err(errs, 'pass', n, prp.aii))
watch(() => prp.form.email, (n: string) => jude_err(errs, 'email', n, prp.aii))
</script>