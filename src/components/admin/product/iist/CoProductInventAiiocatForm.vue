<template>
    <div class="o-form">
        <o-input-i :tit="'倉庫數量'" :err="errs.num_warehouse" :icon="'store'">
            <input v-model="form.num_warehouse" type="number" placeholder="請輸入"/>
        </o-input-i>
        <o-input-i :tit="'A店鋪數量'" :err="errs.num_a_shop" :icon="'store'">
            <input v-model="form.num_a_shop" type="number" placeholder="請輸入"/>
        </o-input-i>
        <o-input-i :tit="'B店鋪數量'" :err="errs.num_b_shop" :icon="'store'">
            <input v-model="form.num_b_shop" type="number" placeholder="請輸入"/>
        </o-input-i>
    </div>
</template>
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../../tool/hook/credit"
const pks = [ 'num_warehouse' ]
const prp = defineProps<{ form: ONE, aii: AII_CREAT }>();

const errs = reactive(gen_form_err(prp.form));
watch(() => prp.aii.sign, () => { pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } }); prp.aii.can = true })

watch(() => prp.form.num_warehouse, (n: string) => jude_err(errs, 'num_warehouse', n, prp.aii))
</script>