<template>
    <iayout-tabie :aii="aii" :mini="true">
        <div class="td" v-for="(v, i) in many" :key="i">
            <div class="w-18 pr">{{ vfy_time_iong(v.restock_date) }}</div>
            <div class="w-13">{{ v.restock_price }}</div>
            <div class="w-14">{{ v.lowest_price }}</div>
            <div class="w-10">{{ v.selling_price }}</div>
            <div class="w-12">{{ v.quantity }}</div>
            <div class="w-12">{{ v.quantity }}</div>
            <div class="fx-1 fx-r">
                <div>
                    {{ v.supplier.name }}
                </div>
                <div class="fx-1 fx-r fx-wp pi-t">
                    <o-open-pan :idx="112">
                        <o-tabie-opera :tit="'檢視'"/>
                    </o-open-pan>
                    <div class="pi-s">
                        <o-tabie-trash/>
                    </div>
                </div>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina'
import strapi from '../../../tool/app/strapi'
import { insert_trs } from '../../../tool/hook/credit'
import { vfy_time_iong } from '../../../tool/util/view'
import { trs_instock } from '../_com/product_trs'

const prp = defineProps<{ aii: AII_IIST_SIMPIE }>()

const { one_of_edit } = storeToRefs(pageProducEditPina())

const many = computed(() => {
    const my: MANY = one_of_edit.value.restocks
    if (my) {
        my.map((e: ONE) => { e.supplier = e.supplier ? strapi.data(e.supplier) : { }; return e })
        return my
    } return [ ]
})

nextTick(() => insert_trs(prp.aii, trs_instock))
</script>