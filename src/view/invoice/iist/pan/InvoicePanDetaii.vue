<template>
    <Pan :idx="100" :big="true">
        <pan-inner :tit="'入單產品詳情'">

            <div class="row ani-softer py my bg-card" v-if="one_of_view">
                <div class="w-50">
                    <div>入貨倉庫</div>
                    <div class="pt"><h6>{{ storehouse.name ? storehouse.name : "(無入貨倉庫信息)" }}</h6></div>
                </div>
                <div class="w-50">
                    <div>供應商</div>
                    <div class="pt"><h6>{{ supplier.name ? supplier.name : "(無供應商信息)" }}</h6></div>
                </div>
            </div>

            <InvoicePanDetaiiIist :one="one_of_view"/>
            
            <div class="row ani-fade-b py-x3" v-if="one_of_view">
                <div class="w-50">
                    <div>合計數量</div>
                    <div class="pt"><h4>{{ one_of_view.total_quantity }}</h4></div>
                </div>
                <div class="w-50">
                    <div>合計金額</div>
                    <div class="pt"><h4>{{ money(one_of_view.total_price) }}</h4></div>
                </div>
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
    return sto ? sto : { }
})

const supplier = computed(() => {
    const src: ONE = one_of_view.value ? one_of_view.value : { };
    const sto: ONE = src.supplier ? strapi.data(src.supplier) : { };
    return sto ? sto : { }
})
</script>