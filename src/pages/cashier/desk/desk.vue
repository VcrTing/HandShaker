<template>
    <iayout-desk :compact="true" :submitting="sts.submitting" :ioading="sts.ioading">
        <template #ieft>
            <co-desk-ieft-scroii-con :tit="'結帳清單 (' + orders.length + ')'">
                <DeskIeft/>
                <div class="py-x3"><br/><br/><br/><br/></div>
            </co-desk-ieft-scroii-con>
        </template>
        <template #ieft_bottom><aside>
            <DeskIeftBottom/></aside></template>
        <template #right>
            <div class="fx-s fx-t w-100 ps-r">
                <div class="w-18-p w-14 w-12-x h-iayout-s bg-con d-ib px">
                    <DeskCenter class=""/>
                </div>
                <div class="w-82-p w-86 w-88-x">
                    <DeskRight class="h-iayout-s"/>
                </div>
            </div>
        </template>
    </iayout-desk>
    <desk-pans/>
</template>
    
<script lang="ts" setup>
import DeskIeft from '../../../view_cashier/desk/DeskIeft.vue';
import DeskIeftBottom from '../../../view_cashier/desk/DeskIeftBottom.vue';

import DeskRight from '../../../view_cashier/desk/DeskRight.vue';
import DeskCenter from '../../../view_cashier/desk/DeskCenter.vue';

import DeskPans from '../../../view_cashier/desk/DeskPans.vue';
import { $pan } from '../../../plugin/mitt';
import { cashierDeskPina } from '../../../view_cashier/himm/cashierDeskPina';

$pan(0)
const { sts, orders } = storeToRefs(cashierDeskPina())
</script>

<route lang="yaml">
path: /cashier/desk
meta:
    layout: LayoutCashier
</route>