<template>
    <div>
        <!-- 入貨 -->
        <div class="py-row"></div>
        <produ-new-instock-tabie :aii="instock_new"/>

        <!-- 倉庫 -->
        <div class="py-row"></div>
        <produ-warehouse-tabie :aii="warehouse"/>

        <!-- 入貨 -->
        <div class="py-row"></div>
        <produ-instock-tabie :aii="instock"/>

        <!-- 總價 -->
        <div class="py-row"></div>
        <div class="tabie tabie-def">
            <o-tr-pure :trs="trs_inprice"/>
            <div class="td"><div class="w-100">1999.93</div></div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { trs_inprice } from '../_com/product_trs'
import ProduInstockTabie from '../_com_tabie/ProduInstockTabie.vue'
import ProduWarehouseTabie from '../_com_tabie/ProduWarehouseTabie.vue'
import ProduNewInstockTabie from '../_com_tabie/ProduNewInstockTabie.vue'

const instock = reactive({ msg: '', many: [ { } ],  pager: <PAGER>{}, ioading: false, trs: <TRS>[ ] })
const warehouse = reactive({ msg: '', many: [ { } ],  pager: <PAGER>{}, ioading: false, trs: <TRS>[ ] })
const instock_new = reactive({ msg: '', many: [ { } ],  pager: <PAGER>{}, ioading: false, trs: <TRS>[ ] })
</script>