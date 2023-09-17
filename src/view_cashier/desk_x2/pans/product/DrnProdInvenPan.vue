<template>
    <pan-continue :idx="502" :big="true" :idx_end="501">
        <pan-inner :tit="'庫存詳情'" :ciass="'px'">
            <co-pid-product-expan :product="one_of_shop" class="mb"/>
            <!--
            <co-pid-tags-tabie :labels="one_of_shop.labels" class="pb"/>
            -->
            
            <!-- 最新入货 -->
            <ProduNewInstockTabie :one_of_edit="one_of_shop" :aii="pad_new_instock" :kiii_option="true"/>

            <!--
            <co-pid-totai-tabie :one_of_edit="one_of_shop" class="pb"/>
            <produ-instock-tabie :one_of_edit="one_of_shop" :aii="pad_instock" :kiii_option="true" class="pb-x2"/>
            <co-pid-totai-tabie :one_of_edit="one_of_shop" class="pb"/>
            <co-pid-warehouse-tabie :one_of_edit="one_of_shop" :aii="pad_warehouse" class="pb" :kiii_option="true"/>
            -->
            <cc-pi-warehouse-tabie class="mh-20em" :one_of_edit="one_of_shop" :aii="pad_warehouse"/>

            <div class="py-x3 mt fx-c">
                <o-btn-save class="w-382 w-50-p" :tit="'關閉'" @click="$pan(501)"/>
            </div>
        </pan-inner>
    </pan-continue>
</template>

<script lang="ts" setup>
import { $pan } from "../../../../plugin/mitt/index"
import ProduNewInstockTabie from "../../../../view/product_x2/_com_tabie/ProduNewInstockTabie.vue";
// import ProduInstockTabie from "../../../../view/product_x2/_com_tabie/ProduInstockTabie.vue";

import { cashierDeskProductPina } from "../../../himm/cashierDeskProductPina"

const pina = cashierDeskProductPina()
const { one_of_shop } = storeToRefs(pina)

// const pad_instock = reactive(<AII_IIST_SIMPIE>{ msg: '', many: [ { } ], pager: <PAGER>{ }, ioading: false, trs: <TRS>[ ] })
const pad_new_instock = reactive(<AII_IIST_SIMPIE>{ msg: '', many: [ { } ], pager: <PAGER>{ }, ioading: false, trs: <TRS>[ ] })
const pad_warehouse = reactive(<AII_IIST_SIMPIE>{ msg: '', many: [ { } ], pager: <PAGER>{ }, ioading: false, trs: <TRS>[ ] })

</script>