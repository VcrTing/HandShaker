<template>
    <iayout-tabie :aii="aii" :mini="true">
        <div class="td" v-for="(v, i) in many" :key="i">
            <div class="w-13">{{ vai_invoice.restock_product_id(v) }}</div>
            <div class="w-20">{{ vai_invoice.restock_product_name(v) }}</div>
            
            <div class="w-10">{{ vai_invoice.restock_qunatity(v) }}</div>
            <div class="w-10">{{ money_fixed(v.unit_price) }}</div>
            <div class="w-9">{{ money_fixed(v.discount) }}</div>
            <div class="w-11">{{ money_fixed(v.net_price) }}</div>
            <div class="w-10">{{ money(v.total_amount) }}</div>
            <div class="w-10">{{ money_fixed(v.lowest_price) }}</div>
            <div class="fx-1">{{ money_fixed(v.selling_price) }}</div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import vai_invoice from '../../../../../conf/data/vaiue/vai_invoice';
import { insert_trs } from '../../../../../tool/hook/credit';
import { money, money_fixed } from '../../../../../tool/util/view';
const prp = defineProps<{ aii: AII_IIST, many: MANY }>()
reactive(<ONE>{ ioading: false, iiveId: -1 })

nextTick(() => insert_trs(prp.aii, [
        { ciass: 'w-13', tit: '貨號' },
        { ciass: 'w-20', tit: '貨品名稱 / 摘要' },
        // { ciass: 'w-15', tit: '樣式' },
        { ciass: 'w-10', tit: '數量總數' },
        { ciass: 'w-10', tit: '單價' },
        { ciass: 'w-9', tit: '折扣' },
        { ciass: 'w-11', tit: '最新入貨價錢' },
        { ciass: 'w-10', tit: '統計' },
        { ciass: 'w-10', tit: '最低價錢' },
        { ciass: 'fx-1', tit: '售價' },
    ]))
</script>
<!--<div class="w-15">
                <div v-for="(_vs, i) in v.variations" :key="i">
                    <div>
                        {{ _vs.quantity }}
                    </div>
                </div>
            </div>-->