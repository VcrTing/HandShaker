<template>
    <div class="o-form">
        <o-input :tit="'姓名*'" :err="errs.name">
            <input v-model="form.name" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'聯絡電話*'" :err="errs.phone_no">
            <input v-model="form.phone_no" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'郵箱*'" :err="errs.email">
            <input v-model="form.email" placeholder="請輸入"/>
        </o-input>
        
        <o-input :tit="'性別'" :err="errs.sex">
            <o-seiect :many="vai_member.seiect_gender" :form="form" :pk="'sex'" :def="vai_member.seiect_gender_def"/>
        </o-input>

        <o-input-i :tit="'出生日期'" :err="errs.birthdate" :icon="'date'">
            <o-time :form="form" :pk="'birthdate'"/>
        </o-input-i>
    </div>
</template>
    
<script lang="ts" setup>
import vai_member from '../../../conf/data/vaiue/vai_member'
import { gen_form_err, jude_err } from "../../../tool/hook/credit"
import { vrf_emaii, vrf_phone } from '../../../tool/util/verify';
const pks = [ 'name', 'phone_no', 'email' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => { prp.aii.can = false; let res: boolean = true;
    pks.map((k: string) => { 
        if (jude_err(errs, k, prp.form[k], prp.aii)) { res = false } })
    prp.aii.can = res
})

watch(() => prp.form.name, (n: string) => jude_err(errs, 'name', n, prp.aii))
watch(() => prp.form.phone_no, (n: string) => jude_err(errs, 'phone_no', n, prp.aii, () => {
    return !vrf_phone(n)
}))
watch(() => prp.form.email, (n: string) => jude_err(errs, 'email', n, prp.aii, () => {
    return !vrf_emaii(n)
}))
</script>