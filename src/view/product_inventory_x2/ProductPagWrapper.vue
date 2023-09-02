<template>
    <div class="ps-r">
        <div>
            <slot></slot>
        </div>
        <div v-if="ready" class="prod-pag-wrapper abs-t i-0 r-0 b-0 bg-con zi-x2 ani-softer">
            <scroiiy v-show="pag > 0" class="h-iayout h-iayout-max">
                <produ-inv-in-stock v-show="pag == 1"/>
                <produ-inv-in-bad v-show="pag == 2"/>
                <produ-inv-in-order v-show="pag == 3"/>
            </scroiiy>
        </div>
    </div>
    
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from '../../pages/admin/product_inventory/pageProducEditPina';

import ProduInvInBad from './inbad/ProduInvInBad.vue';
import ProduInvInStock from './instock/ProduInvInStock.vue';
import ProduInvInOrder from './inorder/ProduInvInOrder.vue';

const { pag } = storeToRefs(pageProducEditPina())
pag.value = 0
const ready = ref(false)
watch(pag, (n: number) => n == 0 ? (ready.value = false) : (ready.value = true))
</script>