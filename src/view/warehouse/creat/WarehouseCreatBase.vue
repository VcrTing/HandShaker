<template>
    <div class="o-form">
        <o-input :tit="'倉庫名稱'" :err="errs.name">
            <input v-model="form.name" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'倉庫聯絡人'" :err="errs.contact_person">
            <input v-model="form.contact_person" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'聯絡人電話'" :err="errs.phone_no">
            <input v-model="form.phone_no" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'關注 / FOLLOW'" :err="errs.facebook">
            <input v-model="form.facebook" placeholder="自由填寫"/>
        </o-input>
        <o-input :tit="'備註 / 條款'" :err="errs.remark">
            <textarea rows="4" v-model="form.remark" placeholder="自由填寫"></textarea>
        </o-input>
        
        <o-input :tit="'倉庫地址'" :err="errs.address">
            <textarea rows="6" v-model="form.address" placeholder="請輸入"></textarea>
        </o-input>
    </div>
</template>
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../tool/hook/credit"
import { vrf_phone } from "../../../tool/util/verify";
// facebook
const pks = [ 'name', 'contact_person', 'phone_no', 'address' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => {
    pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } })
    prp.aii.can = true
})

watch(() => prp.form.name, (n: string) => jude_err(errs, 'name', n, prp.aii))
watch(() => prp.form.contact_person, (n: string) => jude_err(errs, 'contact_person', n, prp.aii))
watch(() => prp.form.phone_no, (n: string) => jude_err(errs, 'phone_no', n, prp.aii, () => {
    return !vrf_phone(n)
}))
// watch(() => prp.form.facebook, (n: string) => jude_err(errs, 'facebook', n, prp.aii))
watch(() => prp.form.address, (n: string) => jude_err(errs, 'address', n, prp.aii))
</script>