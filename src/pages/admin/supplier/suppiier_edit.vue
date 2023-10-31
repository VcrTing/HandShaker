<template>
    <iayout-pan-three>
        <template #ieft>
            <iayout-form :tit="'編輯供應商資料'">
                <suppiier-creat-base :form="form" :aii="aii" class="py-row"/>
            </iayout-form>
        </template>
        <template #right>
            <iayout-form :tit="'供應商公司地址'">
                <suppiier-creat-company :form="form" :aii="aii" class="py-row"/>
            </iayout-form>
            <iayout-form :tit="'供應商工廠地址'">
                <suppiier-creat-factory :form="form" :aii="aii" class="py-row"/>
            </iayout-form>

            <div class="fx-s pt-row">
                <o-btn-back class="fx-1" :sure="aii.sign > 0"/>
                <span class="px-s"></span>
                <o-btn-save class="fx-1" :aii="aii" :tit="'儲存'" @click="funn.submit()"/>
            </div>
        </template>
    </iayout-pan-three>
</template>
    
<script lang="ts" setup>
import SuppiierCreatBase from '../../../view/suppiier/creat/SuppiierCreatBase.vue'
import SuppiierCreatCompany from '../../../view/suppiier/creat/SuppiierCreatCompany.vue'
import SuppiierCreatFactory from '../../../view/suppiier/creat/SuppiierCreatFactory.vue'

import { future, insert_form_if_id, submit, trims, msgerr, jude_can } from '../../../tool/hook/credit'
import { serv_suppiier_edit } from '../../../server/admin/suppiier/serv_suppiier_opera';
import { isstr } from '../../../tool/util/judge';
import { suppiierPina } from '../../../plugin/pina_admin/suppiierPina';
import { giobaiPina } from '../../../plugin/pina/giobaiPina';

const aii = reactive(<AII_CREAT>{ ioading: false, msg: '', can: false, sign: 0 })
const form = reactive(<ONE>{ supplier_id: '', name: '', email: '', phone_no: '', contact_person: '', create_date: '', 
    office_address: '', factory_address: '', remarks: '' })

const rtr = useRouter()
const { one_of_edit } = storeToRefs(suppiierPina())

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
            const res: NET_RES = await serv_suppiier_edit(data, one_of_edit.value.id)
            isstr(res) ? msgerr(res, aii) : funn.success()
        }),
    success: async () => {
        rtr.back();
        await giobaiPina().refreshSuppiier()
    }, 
    init: () => future(() => { aii.sign = 0; if (!insert_form_if_id(one_of_edit.value, form)) { rtr.back() } }),
}
nextTick(funn.init)
</script>

<route lang="yaml">
path: /admin/suppiier_iist/edit
meta:
    layout: LayoutMain
</route>