<template>
    <aside>
        <itemdash class="fx-s px mt-s">
            <div class="fw-700">訂單編號</div>
            <div>
                {{ order.order_id }}&nbsp;&nbsp;
                <ck-clipboard :txt="order.order_id"/>
            </div>
        </itemdash>
        <itemdash class="fx-s px mt-s"><div class="fw-700">掛單時間</div><div>{{ vfy_time_iong(order.order_date) }}</div></itemdash>
        <itemdash class="fx-s px mt-s"><div class="fw-700">訂單狀態</div><div>{{ vai_order.status(order) }}</div></itemdash>
        <itemdash class="fx-s px mt-s"><div class="fw-700">訂單金額</div><div>{{ money(order.total_price) }}&nbsp;&nbsp;HKD</div></itemdash>
        <itemdash class="fx-s px mt-s"><div class="fw-700">收銀員</div><div>{{ vai_order.cashier(order) }}</div></itemdash>
        <itemdash class="fx-s px mt-s"><div class="fw-700">客戶</div><div>{{ vai_order.member(order) }}</div></itemdash>
        <div class="fx-s fx-t px mt-s py">
            <div class="fw-700">支付方式</div>
            <div class="">
                <div class="fx-r ta-r ani-softer" v-for="(v, i) in vai_order.payment(order)" :key="i">
                    <div class="ta-r">{{ v.name }}:&nbsp;&nbsp;&nbsp;</div>
                    <div class="fw-b mw-4em">{{ money(v.price) }}</div>
                </div>
            </div>
        </div>
        <!--
            備註改為儲存退款數據
        <itemdash class="fx-s px mt-s"><div class="fw-700 pr">退款備註</div>
            <div class="fx-1">
                <input placeholder="請輸入" v-model="order.refunded_remarks" class="ta-r w-100"/>
            </div>
        </itemdash>
        -->
        <div class="pt-x2 pb">
            <!-- 折扣卡片信息 -->
            <refund-discount-msg-card :order="order"/>
        </div>
        <div class="py-x3"></div>
    </aside>
</template>
    
<script lang="ts" setup>
import { TEST } from "../../../conf"
import vai_order from "../../../conf/data/vaiue/vai_order"
import { money, vfy_time_iong } from "../../../tool/util/view"
import RefundDiscountMsgCard from './comm/RefundDiscountMsgCard.vue'
const prp = defineProps<{ order: ONE }>()
nextTick(() => TEST ? console.log(prp.order) : undefined);
</script>