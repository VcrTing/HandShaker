<template>
    <iayout-tabie :aii="aii" :mini="true">
        <div class="td" v-for="(v, i) in many" :key="i">
            <div class="w-28 pr">{{ vfy_time_iong(v.restock_date) }}</div>
            <div class="w-13">{{ money_fixed(v.restock_price) }}</div>
            <div class="w-14">{{ money_fixed(v.lowest_price) }}</div>
            <div class="w-12">{{ money_fixed(v.selling_price) }}</div>
            <div class="w-12">{{ v.quantity }}</div>
            <div class="fx-1 fx-s">
                <div>
                    {{ v.supplier.name }}
                </div>
                <div v-if="!kiii_option" class="pi-s">
                    <o-tabie-opera @click="$emit('view', v)" :tit="'檢視'"/>
                </div>
                <span v-else></span>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { money_fixed, vfy_time_iong } from "../../../tool/util/view"
defineProps<{ many: MANY, aii: AII_IIST | AII_IIST_SIMPIE, kiii_option?: boolean }>()
defineEmits([ 'view' ])

</script>