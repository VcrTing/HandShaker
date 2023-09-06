<template>
    <Pan :idx="101" :big="true">
        <pan-inner :tit="'庫存詳情'">
            <co-pid-product-expan :product="product_of_view" class="mb"/>
            <co-pid-tags-tabie :labels="product_of_view.labels" class="pb"/>
            
            <!-- 最新入货 -->
            <ProduNewInstockTabie :one_of_edit="product_of_view" :aii="pad_new_instock"/>
            
            <!-- 入货资料 -->
            <produ-instock-tabie :one_of_edit="product_of_view" :aii="pad_instock" class="pb-x2"/>

            <co-pid-totai-tabie :one_of_edit="product_of_view" class="pb"/>
            <co-pid-warehouse-tabie :one_of_edit="product_of_view" :aii="pad_warehouse" class="pb"/>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import { pageProductInstockPina } from "../../../../pages/admin/product_inventory/pageProductInstockPina";
import ProduNewInstockTabie from "../../_com_tabie/ProduNewInstockTabie.vue";
import ProduInstockTabie from "../../_com_tabie/ProduInstockTabie.vue";
const { product_of_view } = storeToRefs(pageProductInstockPina())

const pad_instock = reactive(<AII_IIST_SIMPIE>{ msg: '', many: [ { } ], pager: <PAGER>{ }, ioading: false, trs: <TRS>[ ] })
const pad_new_instock = reactive(<AII_IIST_SIMPIE>{ msg: '', many: [ { } ], pager: <PAGER>{ }, ioading: false, trs: <TRS>[ ] })
const pad_warehouse = reactive(<AII_IIST_SIMPIE>{ msg: '', many: [ { } ], pager: <PAGER>{ }, ioading: false, trs: <TRS>[ ] })
</script>