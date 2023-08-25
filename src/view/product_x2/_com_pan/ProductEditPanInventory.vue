<template>
    <Pan :idx="110" :big="true">
        <pan-inner :tit="'庫存詳情'">

            <h4 class="py-x2">倉庫 A</h4>
            <iayout-tabie :aii="inventory" :mini="true">
                <div class="td" v-for="(v, i) in inventory.many" :key="i">
                    <div class="w-50">{{ v.o_1 }}</div>
                    <div class="w-50">{{ v.o_2 }}</div>
                </div>
            </iayout-tabie>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import { insert_trs } from '../../../tool/hook/credit'
import { trs_pan_instock } from '../_com/product_trs'

const inventory = reactive({ msg: '', many: <MANY>[ { } ],  pager: <PAGER>{}, ioading: true, trs: <TRS>[ ] })

nextTick(() => {
    insert_trs(inventory, trs_pan_instock)
})
</script>