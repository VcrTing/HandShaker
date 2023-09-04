<template>
    <Pan :idx="112" :big="true">
        <pan-inner :tit="'檢視 / 編輯'">
            <h5 class="py-x2">樣式及庫存分配數量</h5>
            <div class="pb-x3">
                <PiisStyieInventoryTabieView :aii="sii"/>
            </div>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import { pageProductInstockPina } from '../../../pages/admin/product_inventory/pageProductInstockPina'
import PiisStyieInventoryTabieView from '../../product_inventory_x2/instock/inventory/PiisStyieInventoryTabieView.vue'

const sii = reactive({ msg: '', many: <MANY>[ ], trashIdx: 0, pager: <PAGER>{ }, ioading: false, trs: <TRS>[ ] })

const { inventory_of_variation_of_edit } = storeToRefs(pageProductInstockPina())

watch(inventory_of_variation_of_edit, (many: MANY) => {
    sii.many.length = 0
    many.map((e, i: number) => { e.idx = i; sii.many.push(e) })
})
</script>