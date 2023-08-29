<template>
    <iayout-tabie :aii="aii" :mini="true">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-18">{{ v.o_1 }}</div>
            <div class="w-14">{{ v.o_2 }}</div>
            <div class="w-16">{{ v.o_3 }}</div>
            <div class="fx-1 fx-r">
                <div class="d-ib">{{ v.o_4 }}</div>
                <o-open-pan :idx="110" class="pr-s">
                    <o-tabie-opera :tit="'庫存詳情'"/>
                </o-open-pan>
                <o-open-pan :idx="125">
                    <o-tabie-opera :tit="'調貨'"/>
                </o-open-pan>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { insert_trs } from '../../../tool/hook/credit'
import { trs_house } from '../_com/product_trs'

const prp = defineProps<{ aii: AII_IIST_SIMPIE }>()

nextTick(() => insert_trs(prp.aii, trs_house))
</script>