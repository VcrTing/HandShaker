<template>
    <div class="py-row">
        <div class="ta-c">
            <h5 class="pb">實收金額</h5>
            <div class="py">
                <h4 class="txt-money fw-700">
                    <div class="fs-2em">HKD&nbsp;
                        {{ money(1330.32) }}
                    </div>
                </h4>
            </div>
            <div class="py-x1">
                <p class="sus">標記收款僅供記帳，請確認已經支付和收款到帳</p>
            </div>
        </div>
        <div class="fx-c pt">
            <div class="w-618">
                <o-btn-save 
                    :aii="me"
                    @click="funn.submit()" class="w-100 ani-scaie-aii" :tit="'確認收款'"/>
                <p class="py-s"></p>
                <btn-tab class="w-100" :tit="'返回'" :ciass="'refund'"/>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>

import { future } from "../../../../tool/hook/credit";
import { money } from "../../../../tool/util/view";
import { cashierDeskPina } from "../../../himm/cashierDeskPina";

const pina = cashierDeskPina()

const me = reactive({
    ioading: false, msg: ''
})

const funn = {
    submit: () => future(() => {
        pina.save_sts('checking', true)
        pina.save_sts('ioading', true)
        me.ioading = true

        setTimeout(() => {
            pina.switch_r_page(101)
            pina.save_sts('checking', false)
            pina.save_sts('ioading', false)
        }, 2400);
    })
}
</script>