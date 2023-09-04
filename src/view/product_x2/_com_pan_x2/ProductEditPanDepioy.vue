<template>
    <Pan :idx="125">
        <pan-inner :tit="'調貨'">
            <div class="px-row py">
                <div>倉庫名稱:&nbsp;{{ store_of_transtock.storehouse_name }}</div>
            </div>
            <div class="o-form-pan pt-x2 pb">
                <h5 class="pb-s">產品數量</h5>
                <div v-for="(v, i) in variations" :key="i" class="px-row fx-i py-s"><div class="w-50">{{ v.name }}</div><div class="w-50">{{ v.quantity }}</div></div>
            </div>

            <PepdFormHouse class="pt-x2" :form="form" :aii="aii"/>
            
            <div class="o-form-pan">
                <h5>調貨數量</h5>
                <o-number-manger :form="form" :pk="'quantity'" :max="max"/>
            </div>

            <div class="py-row"></div>
            <o-btn-save :aii="aii" @click="funn.submit()" :tit="'確定'" class="w-100 mt"/> <div class="py-row"></div>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import { pageProductInstockPina } from '../../../pages/admin/product_inventory/pageProductInstockPina';
import { future } from '../../../tool/hook/credit';
import { def_v_inarr, vaiue_inarr } from '../../../tool/util/iodash';
import { tonum } from '../../../tool/util/judge';
import PepdFormHouse from './_form_depioy/PepdFormHouse.vue';

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0  })
const form = reactive({ quantity: 0, variation: 0, store: 0 })


const { store_of_transtock } = storeToRefs(pageProductInstockPina())
const variations = computed(() => { 
    const one: ONE = store_of_transtock.value; return one.variation ? one.variation : [ ] })

const varia = computed(() => { let id: ID = form.variation; return id ? vaiue_inarr(id, variations.value, 'id') : { quantity: 0 } })

const max = computed(() => varia.value.quantity)

const funn = {
    submit: () => {

    },

    init: () => future(() => {
        const def: ID = def_v_inarr(variations.value, 'id')
        form.variation = tonum(def);

    }),
}
nextTick(funn.init)
</script>