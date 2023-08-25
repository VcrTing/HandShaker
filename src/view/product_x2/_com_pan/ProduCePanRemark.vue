<template>
    <Pan :idx="105">
        <pan-inner :tit="'添加展示備註'">
            <pcpr-form
                :remark="form_remark" 
                @save="pius()" 
                class="pt"/>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import { $pan } from '../../../plugin/mitt/index';
import { future } from '../../../tool/hook/credit';
import { isstr } from '../../../tool/util/judge';
import PcprForm from './_form_remark/PcprForm.vue';

const prp = defineProps<{ pina: any }>()

const { form_remark } = storeToRefs(prp.pina)

const pius = () => future(() => { const res: NET_RES = prp.pina.pius_remark(); if (!isstr(res)) $pan(0); })
</script>