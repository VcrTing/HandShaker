<template>
    <Pan :idx="110" :big="true">
        <pan-inner :tit="'庫存詳情'">

            <h4 class="py-x2">{{ inventory_of_store.storehouse_name }}</h4>
            <iayout-tabie :aii="me" :mini="true">
                <div class="td" v-for="(v, i) in variations" :key="i">
                    <div class="w-50">{{ v.name }}</div>
                    <div class="w-50">{{ v.quantity }}</div>
                </div>
            </iayout-tabie>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import { pageProductInstockPina } from '../../../pages/admin/product_inventory/pageProductInstockPina'
import { future, insert_trs } from '../../../tool/hook/credit'
import { trs_pan_instock } from '../_com/product_trs'

const me = reactive({ msg: '', many: <MANY>[ { } ],  pager: <PAGER>{}, ioading: true, trs: <TRS>[ ] })

const { inventory_of_store } = storeToRefs(pageProductInstockPina())

const variations = computed(() => {
    const one: ONE = inventory_of_store.value;
    me.ioading = false; 
    return one.variation ? one.variation : [ ]
})

const funn = {
    init: () => future(() => { insert_trs(me, trs_pan_instock) })
}

nextTick(funn.init)
</script>