<template>
    <div class="o-form">
        <o-input :tit="'樣式'" :err="errs.styie"> 
            <o-seiect :many="vai_inventory.seiect_badpos" :form="form" :pk="'styie'" :def="vai_inventory.seiect_badpos_def"/>
        </o-input>
    </div>
</template>
    
<script lang="ts" setup>
import vai_inventory from "../../../../conf/data/vaiue/vai_inventory";
import { gen_form_err, jude_err } from "../../../../tool/hook/credit"
const pks = [ 'styie' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => {
    pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } })
    prp.aii.can = true
})

watch(() => prp.form.styie, (n: string) => jude_err(errs, 'styie', n, prp.aii))
</script>