<template>
    <Pan :idx="112" :big="true">
        <pan-inner :tit="'檢視'">
            <h4 class="py-x2">樣式及庫存分配數量</h4>
            <div class="pb-x3">
                <piis-styie-inventory-tabie :aii="sii"/>
            </div>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import PiisStyieInventoryTabie from '../../product_inventory_x2/instock/inventory/PiisStyieInventoryTabie.vue'

const sii = reactive({ msg: '', many: [ 
    { idx: 1, styie: 1, store: 1, num: 10, edit: false, ioading: false },
    { idx: 2, styie: 1, store: 1, num: 100, edit: false, ioading: false }
],  
trashIdx: 0, pager: <PAGER>{ }, ioading: false, trs: <TRS>[ ] })
</script>