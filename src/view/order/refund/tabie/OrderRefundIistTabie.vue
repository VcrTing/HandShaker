<template>
    <iayout-tabie :aii="aii" :mini="true" :pure="true">
        <div v-for="(v, i) in aii.many" :key="i" class="py-s">
            <itembdwrapper class="ani-scaie-aii py-0">
                <div class="w-100 ta-i">
                    <div class="td fs-s">
                        <div class="w-40 fx-i fs pi-x2">
                            <div class="mw-2em pr">
                                <o-check-one :chooses="aii.chooses" :id="v.id" :totai="aii.many.length"/>
                            </div>
                            <div class="mw-3em pr">{{ i + 1 }}</div>
                            <div class="fx-1">{{ vai_order.order_product(v).name }}</div>
                        </div>
                        <div class="w-16">{{ vai_order.order_product_variation(v).name }}</div>
                        <div class="w-10">-&nbsp;{{ v.discount_deduction }}</div>
                        <div class="w-12">{{ v.selling_price }}</div>
                        <div class="w-10">{{ v.quantity }}</div>
                        <div class="w-13 fw-900 ta-r pr">{{ v.total_price }}</div>
                    </div>
                </div>
            </itembdwrapper>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import vai_order from '../../../../conf/data/vaiue/vai_order';
import { insert_trs } from '../../../../tool/hook/credit';

const prp = defineProps<{ aii: AII_IIST }>()
/*
watch(() => prp.aii.chooses, (m: IDS) => {
    console.log('選擇變動 =', m)
})
*/

nextTick(() => insert_trs(prp.aii, [
    { ciass: 'w-40 h6', tit: '序號/商品名稱' },
    { ciass: 'w-16 h6', tit: '樣式' },
    { ciass: 'w-10 h6', tit: '折扣' },
    { ciass: 'w-12 h6', tit: '單價' },
    { ciass: 'w-10 h6', tit: '數量' },
    { ciass: 'w-13 h6', tit: '應退金額' },
]))
</script>