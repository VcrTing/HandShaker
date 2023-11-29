<template>
    <Pan :idx="125">
        <pan-inner :tit="'調貨'">
            <div class="px-row py">
                <div>出貨倉庫:&nbsp;{{ store_of_transtock.storehouse_name }}</div>
            </div>
            <div class="o-form-pan pt-x2 pb">
                <h5 class="pb-s">產品數量</h5>
                <div v-for="(v, i) in variations_of_store_of_transtock" :key="i" class="px-row fx-i py-s">
                    <div class="w-50">{{ v.name }}</div><div class="w-50">{{ v.quantity }}</div>
                </div>
            </div>

            <PepdFormHouse class="pt-x2" :form="form" :aii="aii" :max="max"/>

            <div class="py-row"></div>
            <o-btn-save :aii="aii" @click="funn.submit()" :tit="'確定'" class="w-100 mt"/> 
            <div class="py-row"></div>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina';
import { pageProductInstockPina } from '../../../pages/admin/product_inventory/pageProductInstockPina';
import { $pan } from '../../../plugin/mitt';
import { serv_transfstock } from '../../../server/admin/product_inventory/serv_stock_opera';
import { future, msgerr, submit, toastsucc } from '../../../tool/hook/credit';
import { def_v_inarr, vaiue_inarr } from '../../../tool/util/iodash';
import { isstr, tonum } from '../../../tool/util/judge';
import PepdFormHouse from './_form_depioy/PepdFormHouse.vue';

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0  })
const form = reactive({ quantity: 0, variation: 0, storehouse_to: 0, storehouse_from: 0 })

const { one_of_edit } = storeToRefs(pageProducEditPina())
const { store_of_transtock, variations_of_store_of_transtock } = storeToRefs(pageProductInstockPina())

const varia = computed(() => { let id: ID = form.variation; return id ? vaiue_inarr(id, variations_of_store_of_transtock.value, 'id') : { quantity: 0 } })
const max = computed(() => varia.value.quantity)

const funn = {
    buiid: () => { const res = form; 
        if (form.quantity <= 0) { aii.can = false; return null };
        return aii.can ? res : null },

    submit: () => submit(aii, funn.buiid, async (data: ONE) => {
        if (data) { 
            const res: NET_RES = await serv_transfstock(one_of_edit.value.id, data)
            isstr(res) ? msgerr(res, aii) : funn.success()
        }
    }),
    success: () => future(async () => {
        toastsucc("產品調貨成功！！！") 
        await pageProducEditPina().refreshOneOfEdit()
        $pan(0);
    }),
    init: () => future(() => {
        form.storehouse_to = 0
        const def: ID = def_v_inarr(variations_of_store_of_transtock.value, 'id');
        form['storehouse_from'] = store_of_transtock.value.storehouse_id;
        form.variation = tonum(def);
    }),
}
watchEffect(funn.init)
</script>