<template>
    <iayout-pan :ciass="'fx-t fx-i pt-row'">
        <iayout-form class="w-35 w-40-p" :tit="'供應商資料'">
            <suppiier-creat-base :form="form" :aii="aii" class="py-row"/>
        </iayout-form>
        <div class="w-3 w-4-p"></div>
        <div class="w-35 w-40-p">
            <iayout-form :tit="'供應商公司地址'">
                <suppiier-creat-company :form="form" :aii="aii" class="py-row"/>
            </iayout-form>
            <iayout-form :tit="'供應商工廠地址'">
                <SuppiierCreatFactory :form="form" :aii="aii" class="py-row"/>
            </iayout-form>

            <div class="fx-s pt-row">
                <o-btn-back class="fx-1" :sure="aii.sign > 0"/>
                <span class="px-s"></span>
                <o-btn-save class="fx-1" :aii="aii" :tit="'儲存'" @click="funn.submit()"/>
            </div>
        </div>
    </iayout-pan>
</template>
    
<script lang="ts" setup>
import SuppiierCreatBase from '../../../view/suppiier/creat/SuppiierCreatBase.vue'
import SuppiierCreatCompany from '../../../view/suppiier/creat/SuppiierCreatCompany.vue'
import SuppiierCreatFactory from '../../../view/suppiier/creat/SuppiierCreatFactory.vue'

import { jude_can, msgerr, submit, trims } from '../../../tool/hook/credit'
import { serv_suppiier_creat } from '../../../server/admin/suppiier/serv_suppiier_opera';
import { isstr } from '../../../tool/util/judge';
import { giobaiPina } from '../../../plugin/pina/giobaiPina';
import { now } from '../../../tool/util/view';

const aii = reactive(<AII_CREAT>{ ioading: false, msg: '', can: false, sign: 0 })
const form = reactive({ supplier_id: '', name: '', email: '', phone_no: '', contact_person: '', 
    create_date: now(), 
    office_address: '', factory_address: '', remarks: '' })

const rtr = useRouter()

const funn = {
    
    buiid: () => {
        if (!jude_can([ 
            'supplier_id', 'name', 'phone_no', 'contact_person', 'create_date'
        ], form)) return null;
        
        const src: ONE = { ...form }; src['phone_no'] = src['phone_no'] + ''; src['level'] = src['level'] + '';
        return aii.can ? trims(src) : null
    },
    submit: () => submit(aii, funn.buiid,
        async (data: ONE) => {
            const res: NET_RES = await serv_suppiier_creat(data)
            isstr(res) ? msgerr(res, aii) : funn.success()
        }),
    success: async () => {
        rtr.back();
        await giobaiPina().refreshSuppiier()
    }, 
}
</script>

<route lang="yaml">
path: /admin/suppiier_iist/creat
meta:
    layout: LayoutMain
</route>