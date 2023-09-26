<template>
    <div class="o-form">
        <o-input :tit="'詳細地址'" :err="errs.office_address">
            <textarea rows="4" v-model="form.office_address" placeholder="請輸入"/>
        </o-input>
    </div>
</template>
    
<script lang="ts" setup>
import { gen_form_err } from "../../../tool/hook/credit"
const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));
// watch(() => prp.form.office_address, (n: string) => jude_err(errs, 'office_address', n, prp.aii))
</script>