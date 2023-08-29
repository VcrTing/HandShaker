<template>
    <Pan :idx="120">
        <pan-inner :tit="'壞貨'">
            <co-prod-msg-tiny :num="'00000002'" :named="'Hello Kitty MG 01'"/>

            <pepb-form-styie class="pt-x3" :form="form" :aii="aii"/>

            <div class="py-x2 ">
                <o-number-manger :form="form" :pk="'num'"/>
            </div>

            <pepb-form :form="form" :aii="aii"/>

            <div class="py-row"></div>
            <o-btn-save :tit="'儲存'" class="w-100"/>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import PepbForm from './_form_bad/PepbForm.vue'
import PepbFormStyie from './_form_bad/PepbFormStyie.vue'

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0  })
const form = reactive({ num: 0, badpos: '', creatAt: '', remark: '', styie: '' })
</script>