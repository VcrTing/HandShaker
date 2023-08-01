<template>
    <div>
        <iayout-form :tit="'添加產品資料'">
            <div class="pt"></div>
            <ProductCeBase :form="base" :aii="aii"/>
        </iayout-form>

        <div class="py"></div>
        
        <ProductCeTags :iabeis="labels" class="pt-s"/>
        <div v-if="labels.length <= 0" class="py-x2"></div>

        <ProductCeRemark :remarks="remarks" class="pt-s"/>
        <div v-if="remarks.length <= 0" class="py-x2"></div>

        <div class="py"></div>
    </div>
</template>
    
<script lang="ts" setup>
import ProductCeBase from '../comm/ProductCeBase.vue'
import ProductCeTags from '../comm/ProductCeTags.vue'
import ProductCeRemark from '../comm/ProductCeRemark.vue'

import { pageProducEditPina } from '../../../pages/admin/product/pageProducEditPina';

defineProps<{ aii: ONE }>()
const { remarks, labels, base } = storeToRefs(pageProducEditPina())
</script>