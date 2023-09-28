<template>
    <div class="o-form">
        <o-input :tit="'等級名稱'" :err="errs.name">
            <input v-model="form.name" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'購買折扣'" :err="errs.discount">
            <input type="number" v-model="form.discount" placeholder="請輸入 0 - 1 之間的數字"/>
        </o-input>
    </div>
</template>
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../tool/hook/credit"
import { vrf_discount } from "../../../tool/util/verify";
const pks = [ 'name', 'discount' ]
const prp = defineProps<{ form: ONE, aii: ONE, edit?: boolean }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => {
    let res: boolean = true; prp.aii.can = false
    pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { 
        res = false } }); prp.aii.can = res
})

watch(() => prp.form.name, (n: string) => jude_err(errs, 'name', n, prp.aii))
watch(() => prp.form.discount, (n: number) => jude_err(errs, 'discount', n, prp.aii, () => {
    return !vrf_discount(n)
}))
</script>