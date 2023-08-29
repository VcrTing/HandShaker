<template>
    <ProduCePanRemark :pina="pina"/>
    <ProduCePanRemarkEdit :pina="pina"/>

    <ProductEditPanPriview/>
    <ProductEditPanInstock/>
    <ProductEditPanInventory/>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina'
import ProduCePanRemark from '../_com_pan/ProduCePanRemark.vue'
import ProduCePanRemarkEdit from '../_com_pan/ProduCePanRemarkEdit.vue'

import ProductEditPanPriview from '../_com_pan/ProductEditPanPriview.vue'
import ProductEditPanInstock from '../_com_pan/ProductEditPanInstock.vue'
import ProductEditPanInventory from '../_com_pan/ProductEditPanInventory.vue'

const pina = pageProducEditPina()
</script>../../../pages/admin/product_inventory/pageProducEditPina