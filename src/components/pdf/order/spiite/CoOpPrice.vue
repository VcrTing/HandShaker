<template>
    <div class="px-pdf">
        <h2 class="pb-pdf">付款</h2>
        <div class="ih-pdf-son-s">
            <div class="fx-s">
                <p>產品</p> <div class="w-50 fx-r">
                    <p class="sus">數量{{ quantity }}</p><p class="mw-7em ta-r b">{{ money(aii_price) }}</p>
                </div>
            </div>
            <div class="fx-s fx-t">
                <p>支付方式</p> 
                <div class="w-50">
                    <div class="">
                        <div class="fx-r" v-for="(v, i) in one.payment_method" :key="i">
                            <p class="sus">{{ v.name }}</p>
                            <p class="mw-7em ta-r b">{{ money(v.price) }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--
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
            -->
        </div>
        <div class="pt">
            <div class="fx-s fx-t">
                <p>優惠類別</p> 
                <div class="w-50" v-if="one.discount && one.discount.length > 0">
                    <div class="fx-r" v-for="(v, i) in one.discount" :key="i">
                        <p class="sus">
                            {{ v.type }}    
                        </p>
                        <p class="mw-7em ta-r b">
                            -{{ money(v.discount_deduction) }}
                        </p>
                    </div>
                </div>
                <div v-else class="w-50 fx-r sus">
                    (無)
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_cashier_order from '../../../../conf/data/cashier/vai_cashier_order';
import { money } from '../../../../tool/util/view';

const prp = defineProps<{ one: ONE }>()
const quantity = computed(() => vai_cashier_order.product_aii_num(prp.one))
const aii_price = computed(() => vai_cashier_order.product_aii_price(prp.one))
</script>