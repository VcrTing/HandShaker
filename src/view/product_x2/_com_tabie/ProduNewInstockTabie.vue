<template>
    <iayout-tabie :aii="aii" :mini="true">
        <div class="td" v-for="(_, i) in [{}]" :key="i">
            <div class="w-28 pr-s">
                <span v-if="one_of_edit.new_restock_date">{{ vfy_time_iong(one_of_edit.new_restock_date) }}</span>
                <span v-else>(未有入貨信息)</span>
            </div>
            <div class="w-18">{{ one_of_edit.new_restock_price }}</div>
            <div class="w-18">{{ one_of_edit.new_lowest_price }}</div>
            <div class="w-15">{{ one_of_edit.new_selling_price }}</div>
            <div class="fx-1 fx-s">
                <div>{{ one_of_edit.total_broken_products }}</div>
                <div v-if="!kiii_option" class="pi-s fx-1 fx-wp fx-r">
                    <o-open-pan class="pi-s" :idx="111">
                        <o-tabie-opera :tit="'入貨詳情'"/>
                    </o-open-pan>
                </div>
                <span v-else></span>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { insert_trs } from '../../../tool/hook/credit'
import { vfy_time_iong } from '../../../tool/util/view'
import { trs_instock_new } from '../_com/product_trs'

const prp = defineProps<{ aii: AII_IIST_SIMPIE, one_of_edit: ONE, kiii_option?: boolean }>()

nextTick(() => insert_trs(prp.aii, trs_instock_new))
</script>