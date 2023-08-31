<template>
    <div>
        <iayout-form :tit="'編輯產品'">
            <div class="pt"></div>
            <ProduCeBase :form="base" :aii="aii" :edit="true"/>
        </iayout-form>

        <div class="py"></div>
        <ProduCeTags class="pt-s" :edit="true" :pina="pina" :iabeis="labels"/> <div v-if="labels.length <= 0" class="py-x2"></div>

        <!-- 
        <ProduCeStyie class="pt-s" :pina="pina" :styie="styie"/> <div v-if="styie.length <= 0" class="py-x2"></div>
 -->

        <ProduCeRemark class="pt-s" :pina="pina" :remarks="remarks"/> <div v-if="remarks.length <= 0" class="py-x2"></div>
          
        <div class="py"></div>
    </div>
</template>
    
<script lang="ts" setup>
import ProduCeBase from '../_com_form/ProduCeBase.vue';
import ProduCeTags from '../_com_form/ProduCeTags.vue';
// import ProduCeStyie from '../_com_form/ProduCeStyie.vue';
import ProduCeRemark from '../_com_form/ProduCeRemark.vue';

import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina';

const pina = pageProducEditPina()

defineProps<{ aii: ONE }>()
const { remarks, labels, base } = storeToRefs(pina)

console.log(labels)
</script>