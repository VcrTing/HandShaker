<template>
    <div>
        <!-- 入貨 -->
        <div class="py-row"></div>
        <produ-new-instock-tabie :aii="instock_new" :one_of_edit="one_of_edit" :kiii_option="true"/>

        <!-- 倉庫 -->
        <div class="py-row"></div>
        <produ-warehouse-tabie :aii="warehouse"/>

        <!-- 入貨 -->
        <div class="py-row"></div>
        <produ-instock-tabie :aii="instock" :one_of_edit="one_of_edit"/>

        <!-- 總價 -->
        <co-pid-totai-tabie :one_of_edit="one_of_edit"/>
    </div>
</template>
    
<script lang="ts" setup>
import ProduInstockTabie from '../_com_tabie/ProduInstockTabie.vue'
import ProduWarehouseTabie from '../_com_tabie/ProduWarehouseTabie.vue'
import ProduNewInstockTabie from '../_com_tabie/ProduNewInstockTabie.vue'
import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina'

const { one_of_edit } = storeToRefs(pageProducEditPina())
// console.log('one_of_edit =', one_of_edit.value)
const instock = reactive({ msg: '', many: [ { } ],  pager: <PAGER>{}, ioading: false, trs: <TRS>[ ] })
const warehouse = reactive({ msg: '', many: [ { } ],  pager: <PAGER>{}, ioading: false, trs: <TRS>[ ] })
const instock_new = reactive({ msg: '', many: [ { } ],  pager: <PAGER>{}, ioading: false, trs: <TRS>[ ] })
</script>