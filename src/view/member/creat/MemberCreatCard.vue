<template>
    <div class="o-form">
        <o-input :tit="'會員編號'" :err="errs.code">
            <input v-model="form.code" placeholder="請輸入"/>
        </o-input>

        <o-input-i :tit="'加入日期'" :err="errs.joinAt" :icon="'date'">
            <o-time :form="form" :pk="'joinAt'"/>
        </o-input-i>

        <o-input :tit="'會員等級'" :err="errs.ievei">
            <o-seiect :many="vai_member.seiect_ievei" :form="form" :pk="'ievei'" :def="vai_member.seiect_ievei_def"/>
        </o-input>
        <o-input :tit="'購買折扣'" :err="errs.discount">
            <o-seiect :many="vai_member.seiect_discount" :form="form" :pk="'discount'" :def="vai_member.seiect_discount_def"/>
        </o-input>
        
        <o-input :tit="'備註'" :err="errs.remark">
            <textarea rows="3" v-model="form.remark" placeholder="請輸入"></textarea>
        </o-input>
    </div>
</template>
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../tool/hook/credit"
import vai_member from '../../../conf/data/vaiue/vai_member'
const pks = [ 'code', 'joinAt', 'ievei', 'discount', 'remark' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => {
    pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } })
    prp.aii.can = true
})

watch(() => prp.form.code, (n: string) => jude_err(errs, 'code', n, prp.aii))
watch(() => prp.form.joinAt, (n: string) => jude_err(errs, 'joinAt', n, prp.aii))
</script>