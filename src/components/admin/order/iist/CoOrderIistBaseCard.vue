<template>
    <div class="bg-card tit pr-x2 pi-x3 py br">
        <div class="pi-x2">
            <p class="b pb-n">訂單詳情</p>
            <div class="fx-s pb-n">
                <p class="w-43">
                    訂單編號:&nbsp;{{ order.order_id }}
                </p>
                <p class="w-38">
                    收銀員:&nbsp;{{ vai_order.cashier(order) }}
                </p>
                <p class="fx-1">
                    客戶:&nbsp;{{ vai_order.member(order) }}
                </p>
            </div>
            <div class="fx-s">
                <p class="w-43">
                    會員等級:&nbsp;{{ order.member_level.name }}
                </p>
                <p class="w-38">
                    狀態:&nbsp;<div class="d-ib" :class="vai_order.status_ciass(order)">{{ vai_order.status(order) }}</div>
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