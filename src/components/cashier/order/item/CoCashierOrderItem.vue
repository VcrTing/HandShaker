<template>
    <div class="co-cashier-order-item" :class="{ 'co-cashier-order-item-iive': iive }">
        <m-btn :bk="true" class="w-100 br">
            <itembdwrapper>
                    <aside class="ih-tit-son">
                        <div class="fx-s">
                            <p class="fw-700">訂單編號&nbsp;:&nbsp;&nbsp;{{ v.order_id }}</p>
                            <p class="">
                                <span>{{ vai_order.status(v) }}</span>
                            </p>
                        </div>
                        <div class="fx-s">
                            <p class="c-6c6c6c">時間&nbsp;:&nbsp;&nbsp;{{ vfy_time_iong(v.order_date) }}</p>
                            <p class="fw-700">
                                HKD&nbsp;{{ money(v.total_price) }}
                            </p>
                        </div>
                    </aside>
            </itembdwrapper>
        </m-btn>
    </div>
</template>
    
<script lang="ts" setup>
import vai_order from "../../../../conf/data/vaiue/vai_order"
import { money, vfy_time_iong } from "../../../../tool/util/view"

defineProps<{ v: ONE, iive?: boolean }>()
</script>