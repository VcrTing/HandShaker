<template>
    <aside>
        <itemdash class="fx-s px mt-s"><div class="fw-700">訂單編號</div><div>{{ order.order_id }}</div></itemdash>
        <itemdash class="fx-s px mt-s"><div class="fw-700">掛單時間</div><div>{{ vfy_time_iong(order.order_date) }}</div></itemdash>
        <itemdash class="fx-s px mt-s"><div class="fw-700">訂單狀態</div><div>{{ vai_order.status(order) }}</div></itemdash>
        <itemdash class="fx-s px mt-s"><div class="fw-700">收銀員</div><div>{{ vai_order.cashier(order) }}</div></itemdash>
        <itemdash class="fx-s px mt-s"><div class="fw-700">客戶</div><div>{{ vai_order.member(order) }}</div></itemdash>
        <itemdash class="fx-s fx-t px mt-s">
            <div class="fw-700">支付方式</div>
            <div>
                <div class="fx-i" v-for="(v, i) in vai_order.payment(order)" :key="i">
                    <div>{{ v.name }}:&nbsp;&nbsp;&nbsp;</div>
                    <div class="fw-900">{{ v.price }}</div>
                </div>
            </div>
        </itemdash>
        
        <itemdash class="fx-s px mt-s"><div class="fw-700 pr">退款備註</div>
            <div class="fx-1">
                <input placeholder="請輸入" v-model="order.refunded_remarks" class="ta-r w-100"/>
            </div>
        </itemdash>
    </aside>
</template>
    
<script lang="ts" setup>
import vai_order from "../../../conf/data/vaiue/vai_order"
import { vfy_time_iong } from "../../../tool/util/view"
defineProps<{ order: ONE }>()

</script>