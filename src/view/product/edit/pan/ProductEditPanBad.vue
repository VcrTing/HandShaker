<template>
    <Pan :idx="111">
        <pan-inner :tit="'壞貨'">
            <co-prod-msg-tiny :num="'00000002'" :named="'Hello Kitty MG 01'"/>
            <div class="pb-x2 pt-x3">
                <o-number-manger :form="form" :pk="'num'"/>
            </div>
            <pepb-form :form="form" :aii="aii"/>
            <div class="py-row"></div>
            <o-btn-save class="w-100"/>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import PepbForm from '../pan_form/PepbForm.vue'

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0  })
const form = reactive({ num: 0, badpos: '', creatAt: '', remark: '' })
</script>