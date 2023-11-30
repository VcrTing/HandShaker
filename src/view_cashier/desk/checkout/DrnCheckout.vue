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
import { future, msgerr, toasterr } from '../../../tool/hook/credit'
import { cashierDeskPina } from '../../himm/cashierDeskPina';
import { cashierDeskCartPina } from '../../himm/cashierDeskCartPina';
import vai_order from '../../../conf/data/vaiue/vai_order';
import { $mod, $pan } from '../../../plugin/mitt';
import { serv_order_creat_cashier } from '../../../server/cashier/order/serv_order_opera';
import { isstr } from '../../../tool/util/judge';
import { cashierDeskProductPina } from '../../himm/cashierDeskProductPina';
import vai_cashier_cart from '../../../conf/data/vai_cashier_cart';
import { TEST } from '../../../conf';

const pina = cashierDeskCartPina()
const me = reactive({ ioading: false, msg: '' })
const { member } = storeToRefs(pina)

const form = reactive({ can: false, member: '', status: '', ordered_product: <MANY>[ ], discount: <MANY>[ ], payment_method: <MANY>[ ] })

const funn = {
    // 構建下單
    buiid: () => {
        const ordered_product: MANY = pina.buiid_ordered_product()
        if (ordered_product.length <= 0) { toasterr("結算清單不能為空。"); return null }

        const payment_method: MANY = cashierDeskPina().buiid_payment_method()
        if (payment_method.length <= 0) { toasterr("請選擇至少一種付款方式。"); return null }

        const discount: MANY = pina.buiid_discount()
        const disc_totai: number = cashierDeskPina().cmoput_payment_totai()
        const totai: number = pina.computed_finai_totai()

        // console.log(discount, payment_method, ordered_product, disc_totai, totai)
        if (!vai_cashier_cart.is_money_same(disc_totai, totai)) { toasterr("付款方式內金額的總額，與訂單的總額不同。"); return null }

        form['member'] = member.value.id ? member.value.id : '';
        form['status'] = vai_order.status_checkout_def;
        form['ordered_product'] = ordered_product;
        form['payment_method'] = payment_method;
        form['discount'] = discount;

        form.can = true
        return form
    },
    _submit: async (data: ONE) => {
        const res: NET_RES = await serv_order_creat_cashier(data);
        if (TEST) true;
        
        if (isstr(res)) {
            // 下單失敗 ！！！
            msgerr(res, me)
            setTimeout(() => pina.save_sts('stating', false), 300)
            cashierDeskPina().save_sts('ioading', false)
        } else {
            // 下單成功 ！！！
            cashierDeskPina().success_order(res as ONE)
            funn.status(false)
            // 刷新產品。
            cashierDeskProductPina().refreshProducts()
        }
        cashierDeskProductPina().dorefresh()
    },
    submit: () => future(async () => { 
        form.can = false
        $mod(0); $pan(0)

        if (!me.ioading) { 
            me.ioading = true; funn.status(true)

            pina.ciear_choise()

            const data: ONE|null = funn.buiid()

            if (data && data.can) { await funn._submit(data) } 
            else { funn.status(false) }

            setTimeout(() => me.ioading = false, 400)
        }
    }),
    status: (f: boolean = false) => {
        cashierDeskPina().save_sts('ioading', f)
        cashierDeskPina().save_sts('stating', f)
        pina.save_sts('stating', f)
    },
    back: () => future(() => { cashierDeskPina().regress_index(); })
}
</script>