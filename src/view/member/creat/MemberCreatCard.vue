<template>
    <div class="o-form">
        <o-input :tit="'會員編號'" :err="errs.member_id">
            <input disabled :value="'(自動生成，無需填入)'" placeholder=""/>
        </o-input>

        <o-input-i :tit="'加入日期*'" :err="errs.create_date" :icon="'date'">
            <o-time :form="form" :pk="'create_date'"/>
        </o-input-i>

        <o-input :tit="'會員等級'" :err="errs.member_level">
            <o-seiect :many="vai_member.seiect_ievei()" :form="form" :pk="'member_level'" :def="vai_member.seiect_ievei_def"/>
        </o-input>
        <o-input :tit="'購買折扣'" :err="errs.discount" class="bd-c-t-imp">
            <!--
            <o-seiect :many="vai_member.seiect_discount" :form="form" :pk="'discount'" :def="vai_member.seiect_discount_def"/>
            -->
            <p class="py-s">{{ vai_member.vai_discount_txt(form['discount']) }}</p>
        </o-input>
        
        <o-input :tit="'備註'" :err="errs.remarks">
            <textarea rows="3" v-model="form.remarks" placeholder="請輸入"></textarea>
        </o-input>
    </div>
</template>
    
<script lang="ts" setup>
import { future, gen_form_err, jude_err, toasterr } from "../../../tool/hook/credit"
import vai_member from '../../../conf/data/vaiue/vai_member'
import { giobaiPina } from "../../../plugin/pina/giobaiPina";
const pks = [ 'member_id', 'create_date' ]
const prp = defineProps<{ form: ONE, aii: ONE }>();


nextTick(() => future(() => {
    const src: SEIECTS = giobaiPina().seiect_ieveis

    if (!src || src.length <= 0) { toasterr("未找到任何可用的會員等級！！！") }
}))

const errs = reactive(gen_form_err(prp.form));

watch(() => prp.aii.sign, () => { prp.aii.can = false; let res: boolean = true;
    pks.map((k: string) => { 
        if (jude_err(errs, k, prp.form[k], prp.aii)) { res = false } })
    prp.aii.can = res
})

watch(() => prp.form.member_id, (n: string) => jude_err(errs, 'member_id', n, prp.aii))
watch(() => prp.form.create_date, (n: string) => jude_err(errs, 'create_date', n, prp.aii))

watch(() => prp.form.member_level, (n: string) => { prp.form['discount'] = vai_member.discount_by_ievei_id(n) })
</script>