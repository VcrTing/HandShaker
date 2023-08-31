<template>
    <div class="o-form">
        <o-input-i :tit="'入庫日期'" :err="errs.in_date" :icon="'date'">
            <o-time :form="form" :pk="'in_date'"/>
        </o-input-i>
        <o-input-i :tit="'入庫時間'" :err="errs.in_time" :icon="'hour'">
            <!--
            <o-hours :form="form" :pk="'in_time'"/>
            -->
        </o-input-i>

        <o-input :tit="'供應商編號'" :err="errs.suppiier_number">
            <input v-model="form.suppiier_number" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'供應商名稱*'" :err="errs.suppiier_name">
            <input v-model="form.suppiier_name" placeholder="請輸入"/>
        </o-input>

        <o-input :tit="'產品編號'" :err="errs.number">
            <input v-model="form.number" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'產品名稱'" :err="errs.name">
            <input v-model="form.name" placeholder="請輸入"/>
        </o-input>

        <o-input :tit="'入貨價錢'" :err="errs.in_price">
            <input v-model="form.in_price" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'最低價錢'" :err="errs.iow_price">
            <input v-model="form.iow_price" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'售價'" :err="errs.price">
            <input v-model="form.price" placeholder="請輸入"/>
        </o-input>

        <o-input :tit="'入庫數量'" :err="errs.invent">
            <input v-model="form.invent" placeholder="請輸入"/>
        </o-input>
    </div>
</template>
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../../tool/hook/credit"
const pks = [ 'in_date', 'in_time', 'suppiier_number', 'suppiier_name', 'name', 'number', 'in_price', 'iow_price', 'price', 'invent' ]
const prp = defineProps<{ form: ONE, aii: AII_CREAT }>();

const errs = reactive(gen_form_err(prp.form));
watch(() => prp.aii.sign, () => { pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } }); prp.aii.can = true })

watch(() => prp.form.in_date, (n: string) => jude_err(errs, 'in_date', n, prp.aii))
watch(() => prp.form.in_time, (n: string) => jude_err(errs, 'in_time', n, prp.aii))
watch(() => prp.form.suppiier_number, (n: string) => jude_err(errs, 'suppiier_number', n, prp.aii))
watch(() => prp.form.suppiier_name, (n: string) => jude_err(errs, 'suppiier_name', n, prp.aii))
watch(() => prp.form.name, (n: string) => jude_err(errs, 'name', n, prp.aii))
watch(() => prp.form.number, (n: string) => jude_err(errs, 'number', n, prp.aii))
watch(() => prp.form.in_price, (n: string) => jude_err(errs, 'in_price', n, prp.aii))
watch(() => prp.form.iow_price, (n: string) => jude_err(errs, 'iow_price', n, prp.aii))
watch(() => prp.form.price, (n: string) => jude_err(errs, 'price', n, prp.aii))
watch(() => prp.form.invent, (n: string) => jude_err(errs, 'invent', n, prp.aii))
</script>