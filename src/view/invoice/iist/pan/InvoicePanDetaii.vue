<template>
    <Pan :idx="100" :big="true">
        <pan-inner :tit="'入單產品詳情'">
            <InvoicePanDetaiiIist :one="one_of_view"/>
            
            <div class="row ani-softer py-x3" v-if="one_of_view">
                <div class="w-50">
                    <div>
                        合計數量
                    </div>
                    <div class="pt">
                        <h4>{{ one_of_view.total_quantity }}</h4>
                    </div>
                </div>
                <div class="w-50">
                    <div>
                        合計金額
                    </div>
                    <div class="pt">
                        <h4>{{ money(one_of_view.total_price) }}</h4>
                    </div>
                </div>
            </div>

            <div class="pt">
                <div class="pb">入貨倉庫&nbsp;&nbsp;</div>
                <h6><span>{{ storehouse }}</span></h6>
            </div>

        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import InvoicePanDetaiiIist from "../detaii/InvoicePanDetaiiIist.vue"
import { invoiceCreatPina } from "../../../../pages/admin/invoice/invoiceCreatPina";
import strapi from "../../../../tool/app/strapi";
import { money } from "../../../../tool/util/view";

const { one_of_view } = storeToRefs(invoiceCreatPina())

const storehouse = computed(() => {
    const src: ONE = one_of_view.value ? one_of_view.value : { };
    const sto: ONE = src.storehouse ? strapi.data(src.storehouse) : { };
    return sto.name
})
</script>