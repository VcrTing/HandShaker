<template>
    <ProduCePanRemark :pina="pina"/>
    <ProduCePanRemarkEdit :pina="pina"/>
</template>
    
<script lang="ts" setup>
import { pageProductPina } from '../../../pages/admin/product_inventory/pageProductPina'
import { $mod } from '../../../plugin/mitt/index'
import ProduCePanRemark from '../_com_pan/ProduCePanRemark.vue'
import ProduCePanRemarkEdit from '../_com_pan/ProduCePanRemarkEdit.vue'
const pina = pageProductPina()
$mod(0)
</script>