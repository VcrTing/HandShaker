<template>
    <div class="o-form">
        <o-input :tit="'姓名'" :err="errs.name">
            <input v-model="form.name" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'登錄郵箱'" :err="errs.email">
            <input v-model="form.email" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'聯絡電話'" :err="errs.phone_no">
            <input type="number" v-model="form.phone_no" placeholder="請輸入"/>
        </o-input>
        <o-input :tit="'密碼'" v-if="!edit" :err="errs.password">
            <input v-model="form.password" placeholder="請輸入"/>
        </o-input>

        <div>
            <o-input class="bg-card" :tit="'管理員所屬倉庫'" :err="errs.storehouse">
                <co-warehouse-seiect/>
            </o-input>
        </div>

        <div>
            <o-checkbox-ione class="py br" :aii="form" :pk="'isAdmin'">
                管理人員
            </o-checkbox-ione>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { choiseOnePina } from "../../../plugin/pina/choiseOnePina";
import { gen_form_err, jude_err } from "../../../tool/hook/credit"
import { tonum } from "../../../tool/util/judge";
import { vrf_emaii } from "../../../tool/util/verify";
const pks = [ 'name', 'email', 'password', 'storehouse' ]
const prp = defineProps<{ form: ONE, aii: ONE, edit?: boolean }>();

const errs = reactive(gen_form_err(prp.form));

const { storehouse_id } = storeToRefs(choiseOnePina())

watch(storehouse_id, (n: ID) => { prp.form['storehouse'] = tonum(n); })

watch(() => prp.aii.sign, () => { 
    let res: Boolean = true;
    pks.map((k: string) => { if (jude_err(errs, k, prp.form[k], prp.aii)) { res = false } }); 
    prp.aii.can = res; 
})

watch(() => prp.form.storehouse, (n: string) => jude_err(errs, 'storehouse', n, prp.aii))
watch(() => prp.form.name, (n: string) => jude_err(errs, 'name', n, prp.aii))
watch(() => prp.form.email, (n: string) => jude_err(errs, 'email', n, prp.aii, () => { return !vrf_emaii(n) }))

!prp.edit ? watch(() => prp.form.pass, (n: string) => jude_err(errs, 'password', n, prp.aii)) : undefined
</script>