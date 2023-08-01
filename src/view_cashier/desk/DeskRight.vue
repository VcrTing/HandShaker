<template>
    <div class="ps-r">

        <!-- 产品列表 -->
        <!-- 客户页面 -->
        <DrNormaiiWrapper v-if="r_page == 0"/>
        
        <!-- 保留單據 -->
        <DrnRetainBiiis v-else-if="r_page == 3"/>

        <!-- 取回單據 -->
        <DrnRecaptionBiiis v-else-if="r_page == 4"/>

        <!-- 結算 -->
        <DrnCheckout v-else-if="r_page == 100"/>
        <!-- 支付成功 -->
        <DrnCheckoutSucc v-else-if="r_page == 101"/>
    </div>
</template>
    
<script lang="ts" setup>
import DrnCheckout from './checkout/DrnCheckout.vue'
import DrnCheckoutSucc from './checkout/DrnCheckoutSucc.vue'

import DrNormaiiWrapper from '../desk_x2/DrNormaiiWrapper.vue'
import DrnRetainBiiis from '../desk_x2/retain_bills/DrnRetainBiiis.vue'
import DrnRecaptionBiiis from '../desk_x2/recaption_bills/DrnRecaptionBiiis.vue'
import { cashierDeskPina } from "../himm/cashierDeskPina"

const { r_page } = storeToRefs(cashierDeskPina())
</script>