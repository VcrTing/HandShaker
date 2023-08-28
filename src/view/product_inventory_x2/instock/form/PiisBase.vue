<template>
    <div>
        <div class="row">
            <div class="w-333">
                <o-input-i :icon="'date'" :err="errs.date" :tit="'建檔日期'">
                    <o-time :form="form" :pk="'date'"/>
                </o-input-i>
            </div>
            <div class="w-333">
                <o-input-i :icon="'time'" :err="errs.time" :tit="'建檔時間'">
                    <o-time :form="form" :pk="'date'"/>
                </o-input-i>
            </div>
            <div class="w-333">
                <o-input :err="errs.number" :tit="'供應商編號'">
                    <input v-model="form['number']" placeholder="請輸入"/>
                </o-input>
            </div>
        </div>
        <div class="py-s"></div>
        <div class="row">
            <div class="w-333">
                <o-input :err="errs.name" :tit="'供應商名稱'">
                    <input v-model="form['name']" placeholder="請輸入"/>
                </o-input>
            </div>
            <div class="w-333"></div><div class="w-333"></div>
        </div>
    </div>
</template>
    
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../../tool/hook/credit"
const pks = [ 'date', 'time', 'number', 'name' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => {
    pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } })
    prp.aii.can = true
})

watch(() => prp.form.date, (n: string) => jude_err(errs, 'date', n, prp.aii))
watch(() => prp.form.time, (n: string) => jude_err(errs, 'time', n, prp.aii))
watch(() => prp.form.number, (n: string) => jude_err(errs, 'number', n, prp.aii))
watch(() => prp.form.name, (n: string) => jude_err(errs, 'name', n, prp.aii))

</script>