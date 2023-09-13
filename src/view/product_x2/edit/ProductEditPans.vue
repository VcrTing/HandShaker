<template>
    <ProduCePanRemark :pina="pina"/>
    <ProduCePanRemarkEdit :pina="pina"/>

    <ProductEditPanPriview/>
    <ProductEditPanInstock/>
    <ProductEditPanInventory/>
    
    <!-- 調貨 -->
    <ProductEditPanDepioy/>

    <!-- 壞貨 -->
    <ProductEditPanBad/>
    <ProductEditPanBadDetaii/>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina'
import ProduCePanRemark from '../_com_pan/ProduCePanRemark.vue'
import ProduCePanRemarkEdit from '../_com_pan/ProduCePanRemarkEdit.vue'

import ProductEditPanPriview from '../_com_pan/ProductEditPanPriview.vue'
import ProductEditPanInstock from '../_com_pan/ProductEditPanInstock.vue'
import ProductEditPanInventory from '../_com_pan/ProductEditPanInventory.vue'

import ProductEditPanBad from '../_com_pan_x2/ProductEditPanBad.vue'
import ProductEditPanDepioy from '../_com_pan_x2/ProductEditPanDepioy.vue'
import ProductEditPanBadDetaii from '../_com_pan_x2/ProductEditPanBadDetaii.vue'

import { $mod } from '../../../plugin/mitt/index'

const pina = pageProducEditPina()
$mod(0)
</script>