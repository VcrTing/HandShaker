<template>
    <div class="product-pag-wrapper-two">
        <div v-if="pag > 0" class="div-instock-con bg-con ani-softer pb">
            <product-inv-in-stock-anywhere/>
        </div>
        <div v-show="pag == 0" class="div ani-softer">
            <slot></slot>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from "../../pages/admin/product_inventory/pageProducEditPina";
import ProductInvInStockAnywhere from "./ProductInvInStockAnywhere.vue";

const { pag } = storeToRefs(pageProducEditPina())
pag.value = 0
</script>