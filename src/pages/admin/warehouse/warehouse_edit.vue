<template>
    <iayout-pan :tit="'編輯倉庫資料'" :ciass="'w-40 w-60-p w-100-m'">
        <warehouse-creat-base :form="form" :aii="aii" class="py-row"/>
        <div class="fx-s pt-row">
            <o-btn-back class="fx-1"/>
            <span class="px"></span>
            <o-btn-save :tit="'儲存'" :aii="aii" @click="funn.submit()" class="fx-1"/>
        </div>
    </iayout-pan>
</template>
    
<script lang="ts" setup>
import WarehouseCreatBase from '../../../view/warehouse/creat/WarehouseCreatBase.vue'

import { future, insert_form_if_id, submit, trims, msgerr, jude_can } from '../../../tool/hook/credit'
import { serv_warehouse_edit } from '../../../server/admin/warehouse/serv_warehouse_opera';
import { isstr } from '../../../tool/util/judge';
import { warehousePina } from '../../../plugin/pina_admin/warehousePina';
import { giobaiPina } from '../../../plugin/pina/giobaiPina';

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0 })
const form = reactive(<ONE>{ name: '', contact_person: '', phone_no: '', facebook: '', remark: '', address: '' })

const rtr = useRouter()
const { one_of_edit } = storeToRefs(warehousePina())
const funn = {
    buiid: () => {
        if (!jude_can([ 'name', 'contact_person', 'phone_no', 'address' ], form)) return null;
        
        const src: ONE = { ...form }; src['phone_no'] = src['phone_no'] + '';
            return aii.can ? trims(src) : null
    },
    submit: () => submit(aii, funn.buiid,
        async (data: ONE) => { 
            const res = await serv_warehouse_edit(data, one_of_edit.value.id)
            isstr(res) ? msgerr(res, aii) : funn.success()
        }),
    success: async () => {
        rtr.back();
        await giobaiPina().refreshWarehouses()
    }, 
    init: () => future(() => { if (!insert_form_if_id(one_of_edit.value, form)) { rtr.back() } aii.sign = 0; }),
}
nextTick(funn.init)
</script>

<route lang="yaml">
path: /admin/warehouse_iist/edit
meta:
    layout: LayoutMain
</route>