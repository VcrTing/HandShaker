<template>
    <div class="px-pdf">
        <h2 class="pb-pdf">付款</h2>
        <div>
            <div class="fx-s">
                <p>產品</p> <div class="w-50 fx-r">
                    <p class="sus">數量{{ quantity }}</p><p class="mw-7em ta-r b">{{ aii_price }}</p>
                </div>
            </div>
            <div class="fx-s">
                <p>支付方式</p> <div class="w-50 fx-r">
                    <p class="sus">現金支付</p><p class="mw-7em ta-r b">1500.0</p>
                </div>
            </div>
            <div class="fx-s"> <div></div>
                <div class="w-50 fx-r">
                    <p class="sus">微信支付</p><p class="mw-7em ta-r b">300.0</p>
                </div>
            </div>
            <div class="fx-s"> <div></div>
                <div class="w-50 fx-r">
                    <p class="sus">支付寶支付</p><p class="mw-7em ta-r b">200.0</p>
                </div>
            </div>
        </div>
        <div class="">
            <div class="fx-s fx-t">
                <p>優惠類別</p> 
                <div class="w-50" v-if="one.discount">
                    <div class="fx-r" v-for="(v, i) in one.discount" :key="i">
                        <p class="sus">
                            {{ v.type }}    
                        </p>
                        <p class="mw-7em ta-r b">
                            -{{ v.discount_deduction }}
                        </p>
                    </div>
                </div>
                <div v-else></div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_cashier_order from '../../../../conf/data/cashier/vai_cashier_order';

const prp = defineProps<{ one: ONE }>()
const quantity = computed(() => vai_cashier_order.product_aii_num(prp.one))
const aii_price = computed(() => vai_cashier_order.product_aii_price(prp.one))
</script>