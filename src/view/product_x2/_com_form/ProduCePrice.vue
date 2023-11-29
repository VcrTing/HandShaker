<template>
    <div class="o-form">
        
        <o-input :tit="'最新最低價錢'" :err="errs.new_lowest_price">
            <input type="number" v-model="form.new_lowest_price" placeholder="請輸入正數（保留兩位小數點）"/>
        </o-input>
        
        <o-input :tit="'最新售價'" :err="errs.new_selling_price">
            <input type="number" v-model="form.new_selling_price" placeholder="請輸入正數（保留兩位小數點"/>
        </o-input>
    </div>
</template>
    
<script lang="ts" setup>
import { gen_form_err } from "../../../tool/hook/credit"
// const pks = [ 'new_lowest_price', 'new_selling_price' ]
const prp = defineProps<{ form: ONE, aii: ONE, edit?: boolean }>();

const errs = reactive(gen_form_err(prp.form));

// watch(() => prp.aii.sign, () => { pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } }); prp.aii.can = true})

watch(() => prp.form.new_selling_price, (n: string) => {
    errs.new_selling_price = isNaN(parseFloat(parseFloat(n).toFixed(2)))
})
watch(() => prp.form.new_lowest_price, (n: string) => {
    errs.new_lowest_price = isNaN(parseFloat(parseFloat(n).toFixed(2)))
})
</script>