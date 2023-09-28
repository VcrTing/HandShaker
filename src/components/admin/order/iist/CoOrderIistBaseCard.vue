<template>
    <div class="bg-card tit pr-x2 pi-x3 py br">
        <div class="pi-x2">
            <p class="b pb-n">訂單詳情</p>
            <div class="fx-s pb-n">
                <p class="w-40">
                    訂單編號:&nbsp;{{ order.order_id }}&nbsp;&nbsp;<ck-clipboard :txt="order.order_id"/>
                </p>
                <p class="w-37">
                    收銀員:&nbsp;{{ vai_order.cashier(order) }}
                </p>
                <p class="fx-1">
                    客戶:&nbsp;
                    <span v-if="vai_order.member(order)">{{ vai_order.member(order) }}</span>
                    <span v-else>(未選擇客戶)</span>
                </p>
            </div>
            <div class="fx-s">
                <p class="w-40">
                    會員等級:&nbsp;<span v-if="order.member_level.name">{{ order.member_level.name }}</span>
                    <span v-else>(無)</span>
                </p>
                <p class="w-37">
                    <span>狀態:&nbsp;</span>
                    
                    <div class="d-ib">
                        <co-order-status-opera-menu class="zi-x2-imp" :order="order"/>
                    </div>
                </p>
                <p class="fx-1">&nbsp;</p>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_order from "../../../../conf/data/vaiue/vai_order"

defineProps<{ order: ONE }>()
</script>