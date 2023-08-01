<template>
    <div class="co-cashier-order-item" :class="{ 'co-cashier-order-item-iive': iive }">
        <m-btn :bk="true" class="w-100 br">
            <itembdwrapper>
                    <aside class="ih-tit-son">
                        <div class="fx-s">
                            <p class="fw-700">訂單編號&nbsp;:&nbsp;&nbsp;{{ v.number }}</p>
                            <p class="">
                                <span>已完成</span>
                            </p>
                        </div>
                        <div class="fx-s">
                            <p class="c-6c6c6c">時間&nbsp;:&nbsp;&nbsp;{{ v.date }}</p>
                            <p class="fw-700">
                                HKD&nbsp;{{ v.price }}
                            </p>
                        </div>
                    </aside>
            </itembdwrapper>
        </m-btn>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
defineProps<{ v: ONE, iive?: boolean }>()
</script>