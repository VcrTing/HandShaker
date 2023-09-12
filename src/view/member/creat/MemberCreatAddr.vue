<template>
    <div class="o-form">
        <!--
        <div class="row fx-s">
            <div class="w-50">
                <o-input :tit="'地域'" :err="errs.region">
                    <o-seiect-region :form="form" :pk="'region'" :pk_dis="'district'" @sign="(n: AREAS) => me.districts = n"/>
                </o-input>
            </div>
            <div class="w-50">
                <o-input :tit="'地區'" :err="errs.district">
                    <o-seiect-district :many="me.districts" :form="form" :pk="'district'"/>
                </o-input>
            </div>
        </div>
        -->
        <o-input :tit="'詳細地址*'" :err="errs.address">
            <textarea rows="4" v-model="form.address" placeholder="請輸入"/>
        </o-input>
    </div>
</template>
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../tool/hook/credit"
const pks = [ 'address' ]

const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => { prp.aii.can = false; let res: boolean = true;
    pks.map((k: string) => { 
        if (jude_err(errs, k, prp.form[k], prp.aii)) { res = false } })
    prp.aii.can = res
})

watch(() => prp.form.address, (n: string) => jude_err(errs, 'address', n, prp.aii))
</script>