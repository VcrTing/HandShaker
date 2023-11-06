<template>
    <div class="o-form">
        <o-input :tit="'產品編號'" :err="errs.product_id" :class="{ 'ani-scaie-hv': edit }" :disabie="edit">
            <input v-if="!edit" v-model="form.product_id" placeholder="請輸入"/>
            <p v-else class="py-s">{{ form.product_id }}</p>
        </o-input>
        
        <o-input :tit="'產品名稱'" :err="errs.name">
            <input v-model="form.name" placeholder="請輸入"/>
        </o-input>
        <!--
        <o-input-i class="input-timed-for-pan" :tit="'建立日期'" :class="{ 'ani-scaie-hv': edit }" :err="errs.create_date" :icon="'date'" :disabie="edit">
            <o-time v-if="!edit" :form="form" :pk="'create_date'"/>
            <p class="py-s" v-else>{{ form['create_date'] }}</p>
        </o-input-i>
        -->

        <o-input-i class="input-timed-for-pan" :tit="'建立日期'" :err="errs.create_date" :icon="'date'">
            <o-time :form="form" :pk="'create_date'"/>
        </o-input-i>
    </div>
</template>
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../tool/hook/credit"
const pks = [ 'product_id', 'name', 'create_date' ]
const prp = defineProps<{ form: ONE, aii: ONE, edit?: boolean }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => { pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } }); prp.aii.can = true})

watch(() => prp.form.product_id, (n: string) => jude_err(errs, 'product_id', n, prp.aii))
watch(() => prp.form.name, (n: string) => jude_err(errs, 'name', n, prp.aii))
watch(() => prp.form.create_date, (n: string) => jude_err(errs, 'create_date', n, prp.aii))
</script>