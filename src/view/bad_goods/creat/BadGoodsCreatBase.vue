<template>
    <div>
        <div class="o-form">
            <o-input :tit="'產品編號'" :err="errs.product_id">
                <input @click="$mod(1000)" :value="name_prod" placeholder="請輸入"/>
            </o-input>
            <o-input :tit="'數量'" :err="errs.quantity">
                <input type="number" v-model="form.quantity" placeholder="請輸入"/>
            </o-input>

            <o-input :tit="'壞貨位置'" :err="errs.storehouse_id">
                <co-warehouse-seiect/>
            </o-input>
            
            <o-input-i :tit="'日期'" :err="errs.date" :icon="'date'">
                <o-time :form="form" :pk="'date'"/>
            </o-input-i>
            <o-input :tit="'備註'" :err="false">
                <textarea rows="3" v-model="form.remarks" placeholder="請輸入"></textarea>
            </o-input>
        </div>
        <co-produ-choise-mod/>
    </div>
</template>
    
<script lang="ts" setup>
import { $mod } from "../../../plugin/mitt";
import { badPina } from "../../../plugin/pina_admin/badPina";
import { gen_form_err, jude_err } from "../../../tool/hook/credit"

const pks = [ 'product_id', 'quantity', 'storehouse_id', 'date', 'remarks' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();
const errs = reactive(gen_form_err(prp.form));

const { product_id, storehouse_id, product_of_choise } = storeToRefs(badPina())

watch(product_id, (n: ID) => (prp.form['product_id'] = n))
watch(storehouse_id, (n: ID) => { prp.form['storehouse_id'] = n; console.log('storeID 改动 =', n) })

const name_prod = computed(() => {
    const one: ONE = product_of_choise.value;
    return (one.id) ? `[${one.product_id}]  ${one.name}` : ''
})

watch(() => prp.aii.sign, () => {
    prp.form['storehouse_id'] = storehouse_id.value;
    pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } })
    prp.aii.can = true
})

// watch(() => prp.form.code, (n: string) => jude_err(errs, 'product_id', n, prp.aii))
watch(() => prp.form.quantity, (n: string) => jude_err(errs, 'quantity', n, prp.aii))
watch(() => prp.form.date, (n: string) => jude_err(errs, 'date', n, prp.aii))
</script>