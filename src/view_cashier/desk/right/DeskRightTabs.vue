<template>
    <div class="fx-s">
        <div class="fx-1 fx-i tabs-pri pt">
            <div v-for="(v, i) in me.tabs" 
                :key="i" 
                class="tab-item mr" 
                :class="{ 'tab-iive': (pina.r_tab == i) }"
                @click="switchTab(i)">

                <m-btn class="px py"
                :class="{ 'txt-pri': (pina.r_tab == i) }">
                    {{ v.tit }}
                </m-btn>
            </div>
        </div>
        <div class="ta-r pt">
            <p class="sus fs-s pt">2020.12.12</p>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { cashierDeskPina } from "../himm/cashierDeskPina"
const pina = cashierDeskPina()

const me = reactive({ tab: 0,
    tabs: [
        { tit: '商品', v: 'shop' },
        { tit: '客戶', v: 'customer' },
        { tit: '退貨/退款', v: 'refund' }
    ]
})
const switchTab = (i: number) => pina.switch_r_tab(i)
</script>