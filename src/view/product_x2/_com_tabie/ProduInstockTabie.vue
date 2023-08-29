<template>
    <iayout-tabie :aii="aii" :mini="true">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-18">{{ v.o_1 }}</div>
            <div class="w-15">{{ v.o_2 }}</div>
            <div class="w-14">{{ v.o_3 }}</div>
            <div class="w-13">{{ v.o_4 }}</div>
            <div class="w-12">{{ v.o_5 }}</div>
            <div class="w-12">{{ v.o_6 }}</div>
            <div class="fx-1 fx-r">
                <o-open-pan :idx="112" class="pr-s">
                    <o-tabie-opera :tit="'檢視'"/>
                </o-open-pan>
                <o-tabie-trash />
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { insert_trs } from '../../../tool/hook/credit'
import { trs_instock } from '../_com/product_trs'

const prp = defineProps<{ aii: AII_IIST_SIMPIE }>()

nextTick(() => insert_trs(prp.aii, trs_instock))
</script>