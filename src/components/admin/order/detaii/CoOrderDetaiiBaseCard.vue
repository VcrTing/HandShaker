<template>
    <div class="bg-card tit py br">
        <div class="pi-x3">
            <p class="b pb-n">訂單信息</p>
            <div class="fx-s pb-n">
                <p class="w-47">
                    掛單時間:&nbsp;{{ vfy_time_iong(order.order_date) }}
                </p>
                <p class="w-30">
                    收銀員:&nbsp;<span v-if="order.cashier">{{ order.cashier.name }}</span>
                </p>
                <p class="fx-1">
                    客戶:&nbsp;<span v-if="order.member">{{ vai_cashier_order.member_name(order) }}</span>
                                <span v-else>(未選擇客戶)</span>
                </p>
            </div>
            <div class="fx-i">
                訂單編號:&nbsp;
                <div class="fx-i">
                    <div class="pr-n">{{ order.order_id }}</div>
                    <ck-clipboard :txt="order.order_id"/>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_cashier_order from "../../../../conf/data/cashier/vai_cashier_order"
import { vfy_time_iong } from "../../../../tool/util/view"
defineProps<{ order: ONE }>()

</script>