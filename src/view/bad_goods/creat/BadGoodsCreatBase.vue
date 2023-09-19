<template>
    <div>
        <div class="o-form">
            <o-input-i :tit="'壞貨產品'" :err="errs.product_id" :icon="'product'" @click="$mod(1000)">
                <input @click.stop="$mod(1000)" :value="name_prod" placeholder="請點擊後打開選擇框"/>
            </o-input-i>
            <o-input :tit="'數量'" :err="errs.quantity">
                <input type="number" v-model="form.quantity" placeholder="請輸入"/>
            </o-input>

            <o-input v-if="product_id" :tit="'樣式'" :err="errs.variation">
                <select v-model="form.variation">
                    <option :value="0">-- 請選擇 --</option>
                    <option v-for="(v, i) in variations" :key="i" :value="v.id">{{ v.name }}</option>
                </select>
            </o-input>

            <o-input-i :tit="'日期'" :err="errs.date" :icon="'date'">
                <o-time :form="form" :pk="'date'"/>
            </o-input-i>

            <o-input :tit="'壞貨位置'" :err="errs.storehouse_id">
                <co-warehouse-seiect/>
            </o-input>
            
            <o-input :tit="'備註'" :err="false">
                <textarea rows="3" v-model="form.remarks" placeholder="請輸入"></textarea>
            </o-input>
        </div>
        <co-produ-choise-mod/>
    </div>
</template>
    
<script lang="ts" setup>
import { $mod } from "../../../plugin/mitt";
import { choiseOnePina } from "../../../plugin/pina/choiseOnePina";
import strapi from "../../../tool/app/strapi";
import { gen_form_err, jude_err } from "../../../tool/hook/credit"
import { isarr } from "../../../tool/util/judge";

const pks = [ 'product_id', 'variation', 'quantity', 'storehouse_id', 'date', 'remarks' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();
const errs = reactive(gen_form_err(prp.form));

const { product_id, storehouse_id, product_of_choise } = storeToRefs(choiseOnePina())

watch(product_id, (n: ID) => (prp.form['product_id'] = n))
watch(storehouse_id, (n: ID) => { prp.form['storehouse_id'] = n; })

const name_prod = computed(() => {
    const one: ONE = product_of_choise.value;
    return (one.id) ? `[${one.product_id}]  ${one.name}` : ''
})

const variations = computed((): MANY => {
    let src: ONE|MANY = product_of_choise.value.variations
    if (isarr(src)) { return src as MANY }
    return strapi.iist(src) as MANY
})

watch(() => prp.aii.sign, () => {
    prp.form['storehouse_id'] = storehouse_id.value;
    pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } })
    prp.aii.can = true
})

watch(() => prp.form.variation, (n: string) => jude_err(errs, 'variation', n, prp.aii))
watch(() => prp.form.quantity, (n: string) => jude_err(errs, 'quantity', n, prp.aii))
watch(() => prp.form.date, (n: string) => jude_err(errs, 'date', n, prp.aii))

</script>