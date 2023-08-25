<template>
    <Pan :idx="111" :big="true">
        <pan-inner :tit="'入貨詳情'">
            <h4 class="py-x2">樣式</h4>
            <iayout-tabie :aii="instock" :mini="true">
                <div class="td" v-for="(v, i) in instock.many" :key="i">
                    <div class="w-50">{{ v.o_1 }}</div>
                    <div class="w-50">{{ v.o_2 }}</div>
                </div>
            </iayout-tabie>

            <h4 class="py-x2">倉庫</h4>
            <iayout-tabie :aii="warehouse" :mini="true">
                <div class="td" v-for="(v, i) in warehouse.many" :key="i">
                    <div class="w-333">{{ v.o_1 }}</div>
                    <div class="w-333">{{ v.o_2 }}</div>
                    <div class="w-333">{{ v.o_2 }}</div>
                </div>
            </iayout-tabie>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import { insert_trs } from '../../../tool/hook/credit'
import { trs_pan_instock, trs_pan_house } from '../_com/product_trs'

const instock = reactive({ msg: '', many: <MANY>[ { } ],  pager: <PAGER>{}, ioading: true, trs: <TRS>[ ] })
const warehouse = reactive({ msg: '', many: <MANY>[ { } ],  pager: <PAGER>{}, ioading: true, trs: <TRS>[ ] })

nextTick(() => {
    insert_trs(instock, trs_pan_instock)
    insert_trs(warehouse, trs_pan_house)
})
</script>