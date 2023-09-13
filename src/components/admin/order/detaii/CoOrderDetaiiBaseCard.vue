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
                    客戶:&nbsp;<span v-if="order.member">{{ order.member.name }}</span>
                </p>
            </div>
            <div class="fx-s">
                <p class="w-47">
                    訂單編號:&nbsp;{{ order.order_id }}
                </p>
                <p class="fx-1">&nbsp;</p>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { vfy_time_iong } from "../../../../tool/util/view"
defineProps<{ order: ONE }>()
</script>