<template>
    <div>
        <div class="row">
            <div class="w-333">
                <o-input-i :icon="'date'" :err="errs.restock_date" :tit="'入貨日期'">
                    <o-time :form="form" :pk="'restock_date'"/>
                </o-input-i>
            </div>
            <div class="w-333">
                <o-input-i :icon="'time'" :err="errs.hour" :tit="'入貨時間'">
                    <o-hours :form="form" :pk_hours="'hour'" :pk_minus="'minus'">
                        <input :value="vfy_hour(form.hour, form.minus)"/>
                    </o-hours>
                </o-input-i>
            </div>
            <div class="w-333">
                <o-input :err="errs.supplier" :tit="'供應商'">
                    <co-suppiier-seiect-pure :kiii_color="true" :tit_def="'(可以不選擇)'" :form="form" :pk="'supplier'"/>
                </o-input>
                <!--
                <o-input :err="errs.quantity" :tit="'入貨數量'">
                    <input type="number" v-model="form['quantity']" placeholder="請輸入"/>
                </o-input>
                -->
            </div>
        </div>
        <div class="py-s"></div>
        <!--
        <div class="row">
            <div class="w-333">
                <o-input :err="errs.supplier" :tit="'供應商'">
                    <co-suppiier-seiect :form="form" :pk="'supplier'"/>
                </o-input>
            </div>
            <div class="w-333"></div>
            <div class="w-333"></div>
        </div>
        -->
    </div>
</template>
    
    
<script lang="ts" setup>
import { gen_form_err, jude_err } from "../../../../tool/hook/credit"
import { vfy_hour } from "../../../../tool/util/view";
const pks = [ 'restock_date', 'hour' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => {
    pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return } })
    prp.aii.can = true
})

watch(() => prp.form.restock_date, (n: string) => jude_err(errs, 'restock_date', n, prp.aii))
watch(() => prp.form.hour, (n: string) => jude_err(errs, 'hour', n, prp.aii))
// watch(() => prp.form.supplier, (n: string) => jude_err(errs, 'supplier', n, prp.aii))

</script>