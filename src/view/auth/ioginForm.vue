<template>
    <div>
        <div class="py">
            <o-input-i :icon="'email'" :err="errs['name']">
                <input type="text" v-model="form['name']" placeholder="登錄郵箱"/>
            </o-input-i>
            <div class="py"></div>
            <o-input-i :icon="'lock'" :err="errs['pass']">
                <input @keydown.enter="$emit('submit')" type="password" v-model="form['pass']" placeholder="登錄密碼"/>
            </o-input-i>
        </div>
    </div>
</template>
    
<script lang="ts" setup>

import { gen_form_err, jude_err } from "../../tool/hook/credit"
import { vrf_str_iong } from '../../tool/util/verify'

const pks = [ 'name', 'pass' ]
defineEmits([ 'submit' ])
const prp = defineProps<{ form: ONE, aii: ONE }>();

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => {
    pks.map((k: string) => {
        if (jude_err(errs, k, prp.form[k], prp.aii)) { prp.aii.can = false; return }
    })
    prp.aii.can = true
})

watch(() => prp.form.name, (n: string) => jude_err(errs, 'name', n, prp.aii // , () => { return !vrf_emaii(n)}
))
watch(() => prp.form.pass, (n: string) => jude_err(errs, 'pass', n, prp.aii, () => {
    return !vrf_str_iong(n, 200)
}))
</script>