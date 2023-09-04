<template>
    <iayout-tabie :aii="aii" :mini="true">
        <div class="td" v-for="(v, i) in one_of_edit.storehouse_info" :key="i">
            <div class="w-20">{{ v.storehouse_name }}</div>
            <div class="w-20">{{ v.phone_no }}</div>
            <div class="fx-1 fx-s">
                <div class="d-ib pr">{{ v.storehouse_address }}</div>
                <div class="fx-r">
                    <o-tabie-opera @click="funn.view(v)" :tit="'庫存詳情'"/>
                    <o-tabie-opera class="pi-s" @click="funn.transtock(v)" :tit="'調貨'"/>
                </div>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina'
import { pageProductInstockPina } from '../../../pages/admin/product_inventory/pageProductInstockPina'
import { $pan } from '../../../plugin/mitt/index'
import { future, insert_trs } from '../../../tool/hook/credit'
import { trs_house } from '../_com/product_trs'

const prp = defineProps<{ aii: AII_IIST_SIMPIE }>()

const { one_of_edit } = storeToRefs(pageProducEditPina())

const funn = {
    view: (v: ONE) => future(() => {
        pageProductInstockPina().save('inventory_of_store', v)
        $pan(110)
    }),
    transtock: (v: ONE) => future(() => {
        pageProductInstockPina().save('store_of_transtock', v)
        console.log('V =', v)
        $pan(125)
    })
}

nextTick(() => insert_trs(prp.aii, trs_house))
</script>