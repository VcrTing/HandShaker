<template>
    <div>
        <drn-prod-msg-pan/>
        <drn-prod-inven-pan/>

        <desk-center-discount-pan/>
        <desk-center-profitrate-pan/>
    </div>
</template>
    
<script lang="ts" setup>
import DrnProdMsgPan from '../desk_x2/pans/product/DrnProdMsgPan.vue';
import DrnProdInvenPan from '../desk_x2/pans/product/DrnProdInvenPan.vue';

import DeskCenterDiscountPan from './center_pan/DeskCenterDiscountPan.vue';
import DeskCenterProfitratePan from './center_pan/DeskCenterProfitratePan.vue';
</script>