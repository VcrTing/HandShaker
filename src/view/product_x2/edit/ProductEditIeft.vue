<template>
    <div>
        <iayout-form :tit="'編輯產品'" :back="true">
            <div class="pt"></div>
            <ProduCeBase :form="base" :aii="aii" :edit="true"/>
        </iayout-form>

        <div class="py"></div>
        <ProduCeTagsEdit class="pt-s" :labels="labels" :labels_exist="labels_exist" /> <div v-if="labels_exist.length <= 0" class="py-x2"></div>

        <ProduCeStyie class="pt-s" :edit="true" :pina="pina" :variations="variations"/> <div v-if="variations.length <= 0" class="py-x2"></div>

        <ProduCeRemark class="pt-s" :pina="pina" :remarks="remarks"/> <div v-if="remarks.length <= 0" class="py-x2"></div>
          
        <div class="py-x2"></div>
    </div>
</template>
    
<script lang="ts" setup>
import ProduCeBase from '../_com_form/ProduCeBase.vue';
import ProduCeStyie from '../_com_form/ProduCeStyie.vue';
import ProduCeRemark from '../_com_form/ProduCeRemark.vue';
import ProduCeTagsEdit from '../_com_form/ProduCeTagsEdit.vue';

import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina';

const pina = pageProducEditPina()

defineProps<{ aii: ONE }>()
const { remarks, labels_exist, labels, base, variations } = storeToRefs(pina)

</script>