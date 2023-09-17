<template>
    <div>
        <co-bd-wrapper class="_wrapper">
            <div class="pi-pdf-s">
                <h4>產品</h4>
                <div class="pt-pdf" v-for="(v, i) in one.ordered_product" :key="i">
                    <div class="fx-s fx-b">
                        <div class="w-30">
                            <p class="b">
                                {{ vai_order.order_product(v).name }}
                            </p>
                            <p class="sus fs-s-pdf">樣式:&nbsp;
                                {{ vai_order.order_product_variation(v).name }}
                            </p>
                        </div>
                        <div class="w-17 fs-s-pdf sus">附加:&nbsp;
                            <div class="d-ib">-&nbsp;{{ v.discount_deduction }}</div>
                        </div>
                        <div class="w-19 fs-s-pdf sus">單價:&nbsp;{{ v.selling_price }}</div>
                        <div class="w-18 fs-s-pdf sus">數量:&nbsp;{{ v.quantity }}</div>
                        <div class="w-16 b">金額:&nbsp;{{ money(v.total_price) }}</div>
                    </div>
                </div>
            </div>
        </co-bd-wrapper>
    </div>
</template>
    
<script lang="ts" setup>
import vai_order from "../../../../conf/data/vaiue/vai_order"
import { money } from "../../../../tool/util/view"

defineProps<{ one: ONE }>()
</script>