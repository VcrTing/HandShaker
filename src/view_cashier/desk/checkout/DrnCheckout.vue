<template>
    <co-desk-right-wrapper>
        <co-cashier-biiis-header :tit="'結算收款'"/>

        <div class="py-row">
            <drn-checkou-tab/>
        </div>
        
        <drn-checkou-items class="pt pb-x2"/>

        <!-- -->
        <drn-checkou-bottom :aii="me" @back="funn.back()" @submit="funn.submit()" class="w-100"/>
        <div class="py-x2"></div>
    </co-desk-right-wrapper>
</template>
    
<script lang="ts" setup>
import DrnCheckouTab from './inner/DrnCheckouTab.vue'
import DrnCheckouItems from './inner/DrnCheckouItems.vue'
import DrnCheckouBottom from './inner/DrnCheckouBottom.vue'
import { future, toasterr } from '../../../tool/hook/credit'
import { cashierDeskPina } from '../../himm/cashierDeskPina';
import { cashierDeskCartPina } from '../../himm/cashierDeskCartPina';
import vai_order from '../../../conf/data/vaiue/vai_order';

const me = reactive({ ioading: false, msg: '' })
//  ratio_of_member, ratio_of_aii, discount_of_aii
const { member } = storeToRefs(cashierDeskCartPina())
// const { payments } = storeToRefs(cashierDeskPina())

const form = reactive({ 
    member: '', status: '', storehouse: '', 
    ordered_product: <MANY>[ ], discount: <MANY>[ ], payment_method: <MANY>[ ] })

const funn = {
    submit: () => future(() => {
        const ordered_product: MANY = cashierDeskCartPina().buiid_ordered_product()
        if (ordered_product.length <= 0) { toasterr("結算清單不能為空。"); return }

        const payment_method: MANY = cashierDeskPina().buiid_payment_method()
        if (payment_method.length <= 0) { toasterr("請選擇至少一種付款方式。"); return }

        const discount: MANY = cashierDeskCartPina().buiid_discount()

        form['member'] = member.value.id ? member.value.id : '';
        form['status'] = vai_order.status_checkout_def;
        form['ordered_product'] = ordered_product;
        form['payment_method'] = payment_method;
        form['discount'] = discount;

        console.log('FORM =', form)
    }),
    back: () => future(() => { cashierDeskPina().regress_index(); })
}
</script>