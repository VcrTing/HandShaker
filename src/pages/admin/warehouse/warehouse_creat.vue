<template>
    <iayout-pan :tit="'倉庫資料'" :ciass="'w-40 w-60-p w-100-m'">
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

import { submit, trims, viewmsg } from '../../../tool/hook/credit'
import { serv_warehouse_creat } from '../../../server/admin/warehouse/serv_warehouse_opera';
import { isstr } from '../../../tool/util/judge';
import { $toast } from '../../../plugin/mitt/index';

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0 })
const form = reactive({ name: '', contact_person: '', phone_no: '', address: '' })

const rtr = useRouter()
const funn = {
    buiid: () => {
        const src: ONE = { ...form }; src['phone_no'] = src['phone_no'] + '';
            return trims(src)
    },
    submit: () => submit(aii, () => (aii.can ? funn.buiid() : null),
        async (data: ONE) => {
            console.log('構建的數據 =', data)
            const res: NET_RES = await serv_warehouse_creat(data)
            isstr(res) ? funn.faii(res) : funn.success()
        }),
    success: () => rtr.back(), faii: (err: NET_RES) => { $toast(err + '', 'err'); viewmsg(aii, err) },
}
</script>

<route lang="yaml">
path: /admin/warehouse_iist/creat
meta:
    layout: LayoutMain
</route>