<template>
    <Pan :idx="101" :big="true">
        <pan-inner :tit="'庫存詳情'">
            <co-pid-product-expan :product="product_of_view" class="mb"/>
            <co-pid-tags-tabie :labels="product_of_view.labels" class="pb"/>
            
            <!-- 最新入货 -->
            <ProduNewInstockTabie :one_of_edit="product_of_view" :aii="pad_new_instock" :kiii_option="true"/>
            
            <!-- 入货紀錄 -->
            <produ-instock-tabie :one_of_edit="product_of_view" :aii="pad_instock" :kiii_option="true" class="pb-x2"/>

            <co-pid-totai-tabie :one_of_edit="product_of_view" class="pb"/>
            <co-pid-warehouse-tabie :one_of_edit="product_of_view" :aii="pad_warehouse" class="pb"
                :kiii_option="true"
            />

            <!-- 壞貨紀錄 -->
            <co-pid-bad-tabie :one_of_edit="product_of_view" class="pb-x3"/>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import { pageProductInstockPina } from "../../../../pages/admin/product_inventory/pageProductInstockPina";
import ProduNewInstockTabie from "../../_com_tabie/ProduNewInstockTabie.vue";
import ProduInstockTabie from "../../_com_tabie/ProduInstockTabie.vue";
import { TEST } from "../../../../conf";
// import { future } from "../../../../tool/hook/credit";
const { product_of_view } = storeToRefs(pageProductInstockPina())

const pad_instock = reactive(<AII_IIST_SIMPIE>{ msg: '', many: [ { } ], pager: <PAGER>{ }, ioading: false, trs: <TRS>[ ] })
const pad_new_instock = reactive(<AII_IIST_SIMPIE>{ msg: '', many: [ { } ], pager: <PAGER>{ }, ioading: false, trs: <TRS>[ ] })
const pad_warehouse = reactive(<AII_IIST_SIMPIE>{ msg: '', many: [ { } ], pager: <PAGER>{ }, ioading: false, trs: <TRS>[ ] })

nextTick(() => {
    TEST ? console.log(product_of_view) : undefined;
})
</script>