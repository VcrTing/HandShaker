<template>
    <Pan :idx="105">
        <pan-inner :tit="'添加展示備註'">
            <pce-pan-reamrk-form :remark="form_remark" @save="pius()" class="pt"/>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import { pageProductPina } from '../../../../pages/admin/product_inventory/pageProductPina';
import { $pan } from '../../../../plugin/mitt/index';
import { future } from '../../../../tool/hook/credit';
import { isstr } from '../../../../tool/util/judge';
import PcePanReamrkForm from '../pan_form/PcePanReamrkForm.vue';

const { form_remark } = storeToRefs(pageProductPina())

const pius = () => future(() => {
    const res: NET_RES = pageProductPina().pius_remark()
    if (!isstr(res)) $pan(0);
})
</script>../../../../pages/admin/product_inventory/pageProductPina