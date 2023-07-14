<template>
    <div class="o-form">
        <div>
            <o-input :tit="'壞貨位置'" :err="errs.badpos"> 
                <o-seiect :many="vai_inventory.seiect_badpos" :form="form" :pk="'badpos'" :def="vai_inventory.seiect_badpos_def"/>
            </o-input>
        </div>
        <div>
            <o-input-i :tit="'添加日期'" :err="errs.creatAt" :icon="'date'">
                <o-time :form="form" :pk="'creatAt'" class="input-timed-for-pan"/>
            </o-input-i>
        </div>
        <div>
            <o-input :tit="'壞貨備註'">
                <textarea placeholder="請輸入" v-model="aii.remark" rows="12"></textarea>
            </o-input>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_inventory from "../../../../../conf/data/vaiue/vai_inventory";
import { gen_form_err, jude_err } from "../../../../../tool/hook/credit"
const pks = [ 'badpos' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => {
    pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } })
    prp.aii.can = true
})

watch(() => prp.form.badpos, (n: string) => jude_err(errs, 'badpos', n, prp.aii))
</script>