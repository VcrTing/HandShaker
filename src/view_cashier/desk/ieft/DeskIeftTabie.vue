<template>
    <iayout-tabie :aii="aii" :pure="true">
        <div v-if="carts && carts.length > 0" class="ani-fade-b">
            <div class="py-s br ani-scaie-aii" 
                v-for="(v, i) in carts" 
                :key="i"
                >
                <co-cashier-cart-item :cart="v" :i="i"/>
            </div>
            <dc-cart-item-spacer/>
        </div>
        <div v-else><o-tabie-empty class="mh-oti"/></div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { insert_trs } from '../../../tool/hook/credit'
import { cashierDeskCartPina } from '../../himm/cashierDeskCartPina'
import DcCartItemSpacer from '../../desk_x3/spacer/DcCartItemSpacer.vue'

const prp = defineProps<{ aii: AII_IIST }>()
const { carts } = storeToRefs(cashierDeskCartPina())

watch(carts.value, (n: MANY) => { console.log(n) })

// 數據
nextTick(() => insert_trs(prp.aii, [
    { ciass: 'fx-1 h6', tit: '序號/商品名稱'},
    { ciass: 'w-15 h6', tit: '附加'},
    { ciass: 'w-19 h6', tit: '單價*數量'},
    { ciass: 'w-18 h6 fx-r pr-0', tit: '統計金額' },
]))
</script>