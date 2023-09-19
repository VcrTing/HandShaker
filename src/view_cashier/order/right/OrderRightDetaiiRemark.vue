<template>
    <itembdwrapper class="px-row">
        <p class="b">帳單展示備註&nbsp;:&nbsp;</p>
        <div class="ti-1em pt">
            <div v-for="(v, i) in rmks" :key="i">
                <p v-html="v"></p>
            </div>
        </div>
    </itembdwrapper>
</template>
    
<script lang="ts" setup>
import vai_cashier_order from "../../../conf/data/cashier/vai_cashier_order"

const prp = defineProps<{ order: ONE }>()

const rmks = computed(() => vai_cashier_order.array_remarks_for_order(prp.order))
/*

        <!--<p>
紅異端MG-注意事項
自購買XPower產品日期起14天之內登記保修服務，本公司為客戶提供保修服務 (唯個別產品或配件提供的保養期限不同，詳情可參閱 商品描述 )。由購買日期起在指定的保養限期內，如產品有損壞或故障，經本公司技術人員證實為在正常使用之情況下發生，本公司將提供免費維修服務。XPower全線產品在保修期內並會提供完善維修保養更換服務和全球的1600萬責任保險保障。
顧客購買XPower產品後若發現產品出現任何問題，可直接聯繫XPower客戶服務中心。如有必要進行維修服務，請攜同產品及購買單據親臨XPower客戶服務中心，或將有問題的產品以速遞/郵寄方式寄到XPower客戶服務中心進行檢測。若證實產品因物理原因而不能正常操作，XPower客戶服務中心會對產品進行維修或更換，若客人選擇以速遞/郵寄方式寄出或接收有關產品，其運費均由用家方面承擔。
        </p>-->

        <!--
        <div v-for="(v, i) in products" :key="i">
            <div v-if="v.remarks">
                <div class="d-ib" v-for="(r, j) in v.remarks" :key="j">
                    {{ r.content }}
                    <span v-if="j < (v.remarks.length - 1)">&nbsp;&nbsp;</span>
                    <span v-else>&nbsp;&nbsp;</span>
                </div>
            </div>
        </div>
        -->
*/
</script>