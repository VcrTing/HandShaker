<template>
    <co-pid-warehouse-tabie :aii="aii" :one_of_edit="one_of_edit" @view="funn.view" @transtock="funn.transtock"/>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina'
import { pageProductInstockPina } from '../../../pages/admin/product_inventory/pageProductInstockPina'
import { $pan } from '../../../plugin/mitt/index'
import { future } from '../../../tool/hook/credit'

defineProps<{ aii: AII_IIST_SIMPIE }>()

const { one_of_edit } = storeToRefs(pageProducEditPina())

const funn = {
    view: (v: ONE) => future(() => {
        pageProductInstockPina().save('inventory_of_store', v); 
        $pan(110)
    }),
    transtock: (v: ONE) => future(() => {
        pageProductInstockPina().save('store_of_transtock', v)
        $pan(125)
    })
}
</script>