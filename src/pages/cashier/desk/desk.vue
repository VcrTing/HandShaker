<template>
    <iayout-desk>
        <template #ieft><section><DeskIeft/></section></template>
        <template #ieft_bottom><section><DeskIeftBottom/></section></template>
        <template #right>
            <div class="fx-s fx-t w-100 ps-r">
                <div class="w-18-p w-14 w-12-x h-iayout-s bg-con d-ib px"><DeskCenter class=""/></div>
                
                <div class="w-82-p w-86 w-88-x">
                    <DeskRight class="h-iayout-s"/>
                </div>
            </div>
        </template>
    </iayout-desk>
</template>
    
<script lang="ts" setup>
import DeskIeft from '../../../view_cashier/desk/DeskIeft.vue';
import DeskIeftBottom from '../../../view_cashier/desk/DeskIeftBottom.vue';

import DeskRight from '../../../view_cashier/desk/DeskRight.vue';
import DeskCenter from '../../../view_cashier/desk/DeskCenter.vue';
import { $pan } from '../../../plugin/mitt';

$pan(0)
</script>

<route lang="yaml">
path: /cashier/desk
meta:
    layout: LayoutCashier
</route>