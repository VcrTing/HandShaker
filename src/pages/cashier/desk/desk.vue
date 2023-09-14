<template>
    <iayout-desk :compact="true" :mitting="checking" :ioading="ioading">
        <template #ieft>
            <co-desk-ieft-wrapper :tit="'結帳清單 (' + carts.length + ')'">
                <DeskIeft/>
                <div class="py-x3"><br/><br/><br/><br/></div>
            </co-desk-ieft-wrapper>
        </template>

        <template #ieft_bottom><DeskIeftBottom/></template>

        <template #right>
            <div class="fx-s fx-t w-100 ps-r">
                <co-desk-wrapper class="w-18-p w-14 w-12-x px py">
                    <DeskCenter/>
                </co-desk-wrapper>
                <div class="w-82-p w-86 w-88-x">
                    <DeskRight class="h-iayout-s"/>
                </div>
            </div>
        </template>
    </iayout-desk> <desk-pans/>
</template>
    
<script lang="ts" setup>
import DeskIeft from '../../../view_cashier/desk/DeskIeft.vue';
import DeskIeftBottom from '../../../view_cashier/desk/DeskIeftBottom.vue';

import DeskRight from '../../../view_cashier/desk/DeskRight.vue';
import DeskCenter from '../../../view_cashier/desk/DeskCenter.vue';

import DeskPans from '../../../view_cashier/desk/DeskPans.vue';
import { $pan, $mod } from '../../../plugin/mitt';
import { cashierDeskPina } from '../../../view_cashier/himm/cashierDeskPina';
import { future } from '../../../tool/hook/credit';
import { cashierDeskCartPina } from '../../../view_cashier/himm/cashierDeskCartPina';

const { checking, ioading } = storeToRefs(cashierDeskPina())
const { carts } = storeToRefs(cashierDeskCartPina())

nextTick(() => future(() => { $pan(0); $mod(0) }))
</script>

<route lang="yaml">
path: /cashier/desk
meta:
    layout: LayoutCashier
</route>