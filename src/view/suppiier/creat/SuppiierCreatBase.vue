<template>
    <div class="o-form">
        <o-input-i :tit="'建檔日期'" :err="errs.create_date" :icon="'date'">
            <o-time :form="form" :pk="'create_date'"/>
        </o-input-i>
        
        <o-input :tit="'供應商編號*'" :err="errs.supplier_id">
            <input v-model="form.supplier_id" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'供應商名稱*'" :err="errs.name">
            <input v-model="form.name" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'聯絡電話*'" :err="errs.phone_no">
            <input v-model="form.phone_no" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'登錄郵箱'" :err="errs.email">
            <input v-model="form.email" placeholder="自由填寫"/>
        </o-input>
        <o-input :tit="'聯繫人*'" :err="errs.contact_person">
            <input v-model="form.contact_person" placeholder="請輸入"/>
        </o-input>
        
        <o-input :tit="'備註'" :err="errs.remarks">
            <textarea rows="3" v-model="form.remarks" placeholder="請輸入"></textarea>
        </o-input>
    </div>
</template>
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../tool/hook/credit"
import { vrf_phone } from "../../../tool/util/verify";

const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));
const pks: strings = [ 
    'supplier_id', 'name', 'phone_no', 
    'contact_person', 'create_date' 
]
watch(() => prp.aii.sign, () => {
    let res: boolean = true; prp.aii.can = false
    pks.map((k: string) => {
        if (jude_err(errs, k, prp.form[k], prp.aii)) { res = false; }
    }); prp.aii.can = res
})

watch(() => prp.form.supplier_id, (n: string) => jude_err(errs, 'supplier_id', n, prp.aii))
watch(() => prp.form.name, (n: string) => jude_err(errs, 'name', n, prp.aii))

watch(() => prp.form.phone_no, (n: string) => jude_err(errs, 'phone_no', n, prp.aii, () => { return !vrf_phone(n) }))
// watch(() => prp.form.email, (n: string) => jude_err(errs, 'email', n, prp.aii, () => { return !vrf_emaii(n) }))

watch(() => prp.form.contact_person, (n: string) => jude_err(errs, 'contact_person', n, prp.aii))
watch(() => prp.form.create_date, (n: string) => jude_err(errs, 'create_date', n, prp.aii))
</script>