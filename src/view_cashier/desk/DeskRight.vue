<template>
    <div class="ps-r">
        <aside>
            <div class="w-50-p w-35 w-30-x">
                <o-search class="bg-con" :aii="aii" :pk="'search'"/>
            </div>
            <DeskRightTabs class="pb"/>
        </aside>

        <DeskRightProds v-if="pina.r_tab == 0"/>
        <aside v-else-if="pina.r_tab == 1"><DeskRightCustom/></aside>

        <aside class="abs-b bg-con py-s w-100" v-if="pina.r_tab == 0"><o-pager :totai="20"/></aside>

        <DeskRightProdMsgPan/>
        <DeskRightProdInvenPan/>
    </div>
</template>
    
<script lang="ts" setup>
import DeskRightTabs from './right/DeskRightTabs.vue'
import DeskRightProds from './right/DeskRightProds.vue'
import DeskRightCustom from './right/DeskRightCustom.vue'

import DeskRightProdMsgPan from './right_pan/DeskRightProdMsgPan.vue'
import DeskRightProdInvenPan from './right_pan/DeskRightProdInvenPan.vue'
import { cashierDeskPina } from './himm/cashierDeskPina'

const pina = cashierDeskPina()

const aii = reactive({
    search: '',
})
</script>