<template>
    <div>
        <iayout-form :tit="'添加產品資料'" :back="true">
            <div class="pt"></div>
            <ProduCeBase :form="base" :aii="aii"/>
        </iayout-form>

        <div class="py"></div>

        <ProduCeTags class="pt-s" :pina="pina" :iabeis="labels"/> <div v-if="labels.length <= 0" class="py-x2"></div>

        <ProduCeStyie class="pt-s" :pina="pina" :variations="variations"/> <div v-if="variations.length <= 0" class="py-x2"></div>

        <ProduCeRemark class="pt-s" :pina="pina" :remarks="remarks"/> <div v-if="remarks.length <= 0" class="py-x2"></div>

        <div class="py-x2"></div>
    </div>
</template>
    
<script lang="ts" setup>
import ProduCeBase from '../_com_form/ProduCeBase.vue';
import ProduCeTags from '../_com_form/ProduCeTags.vue';
import ProduCeStyie from '../_com_form/ProduCeStyie.vue';
import ProduCeRemark from '../_com_form/ProduCeRemark.vue';

import { pageProductPina } from '../../../pages/admin/product_inventory/pageProductPina';

const pina = pageProductPina()

defineProps<{ aii: ONE }>()
const { remarks, labels, variations, base } = storeToRefs(pina)
</script>