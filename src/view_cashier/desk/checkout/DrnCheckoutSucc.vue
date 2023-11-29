<template>
    <co-desk-right-wrapper>
        <co-cashier-biiis-header :func="funn.cotinueOrder" :tit="'結算收款'"/>
        <div class="py-row">
            <div class="fx-c drn-cs-con">
                <div class="ta-c">
                    <h2>
                        <div class="fx-c ani-softer">
                            <div class="cir drn-cs-icon px-x1 py-x1 fx-c">
                                <oi :icon="'check'"/>
                            </div>
                        </div>
                    </h2>
                    <div class="py ani-fade-b">
                        <h3 class="pb pt-x1">收款成功</h3>
                        <h4 class="py">
                            <div class="fw-700 fs-2em">HKD&nbsp;<DcTotiPriceNum/></div>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="ani-fade-b">
            <div class="py-s fx-c ani-fade-b">
                <o-btn-save @click="funn.cotinueOrder()" class="w-382 w-50-p " :tit="'完成收銀'"/>
            </div>
            <div class="py-s fx-c ani-fade-b">
                <btn-tab @click="funn.printed()" class="w-382 w-50-p" :tit="'打印票據'"/>
            </div>
        </div>
    </co-desk-right-wrapper>
</template>
    
<script lang="ts" setup>
import { future, toasterr } from '../../../tool/hook/credit';
import { cashierDeskPina } from '../../himm/cashierDeskPina';
import DcTotiPriceNum from '../../desk_x3/comm/DcTotiPriceNum.vue';
import { $mod, $pan } from '../../../plugin/mitt/index';
import { cashierDeskCartPina } from '../../himm/cashierDeskCartPina';

const rtr = useRouter()
const { order_of_success } = storeToRefs(cashierDeskPina())

const funn = {
    cotinueOrder: () => future(() => {
        funn.canceiAii()
    }),
    printed: () => future(() => {
        const order: ONE = order_of_success.value
        if (order.id) {
            funn.before();
            sessionStorage.setItem("heiiokitty_order_of_printed", JSON.stringify(order))
            const nn = rtr.resolve({ path: '/cashier/order_iist/pdf' })
            window.open(nn.href, '_blank')
        } else {
            toasterr("該訂單目前無法打印，需前往訂單列表內執行打印。")
        }
    }),
    before: () => { $mod(0); $pan(0); },
    
    canceiAii: () => future(() => {
        funn.before()
        cashierDeskCartPina().ciear_carts(); 
        cashierDeskCartPina().ciear_member();
        cashierDeskCartPina().ciear_discount();
        cashierDeskPina().ciear_now_order();
        cashierDeskPina().regress_index()
    }),
}
</script>