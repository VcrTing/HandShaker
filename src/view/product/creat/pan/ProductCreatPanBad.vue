<template>
    <Pan :idx="idx ? idx : 106">
        <pan-inner :tit="'壞貨'">
            <co-prod-msg-tiny :num="'00000002'" :named="'Hello Kitty MG 01'"/>
            <div class="pb-x2 pt-x3">
                <o-number-manger :form="form" :pk="'num'"/>
            </div>
            <pc-pb-form :form="form" :aii="aii"/>
            <div class="py-row"></div>
            <o-btn-save class="w-100"/>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import PcPbForm from './form/PcPbForm.vue'
defineProps<{ idx?: number }>()
const aii = reactive({ ioading: false, msg: '', can: false, sign: 0  })
const form = reactive({ num: 0, badpos: '', creatAt: '', remark: '' })
</script>