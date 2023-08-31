<template>
    <iayout-pan-three>
        <template #ieft>
            <iayout-form :tit="'編輯會員資料'">
                <member-creat-base :form="form" :aii="aii" class="py-row"/>
            </iayout-form>
            <div class="pt-row"></div>
            <iayout-form :tit="'會員通訊地址'">
                <member-creat-addr :form="form" :aii="aii" class="py-row"/>
            </iayout-form>
        </template>
        <template #right>
            <iayout-form :tit="'會員卡資料'">
                <member-creat-card :form="form_card" :aii="aii" class="py-row"/>
            </iayout-form>

            <div class="fx-s pt-row">
                <o-btn-back class="fx-1" :sure="aii.sign > 0"/>
                <span class="px-s"></span>
                <o-btn-save :tit="'儲存'" :aii="aii" class="fx-1" @click="funn.submit()"/>
            </div>
        </template>
    </iayout-pan-three>
</template>
    
<script lang="ts" setup>
import MemberCreatBase from '../../../view/member/creat/MemberCreatBase.vue'
import MemberCreatAddr from '../../../view/member/creat/MemberCreatAddr.vue'
import MemberCreatCard from '../../../view/member/creat/MemberCreatCard.vue'

import { future, insert_form, insert_form_if_id, submit, trims, msgerr } from '../../../tool/hook/credit'
import { serv_member_edit } from '../../../server/admin/member/serv_member_opera'
import { isstr } from '../../../tool/util/judge'
import { memberPina } from '../../../plugin/pina_admin/memberPina'

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0 })

const form = reactive(<ONE>{ name: '', email: '', phone_no: '', birthdate: '', sex: '', address: '' })
const form_card = reactive(<ONE>{ member_id: '', create_date: '', member_level: '', discount: '', remarks: '' })

const rtr = useRouter()
const { one_of_edit } = storeToRefs(memberPina())

const funn = {
    buiid: () => {
        let src: ONE = { ...form, ...form_card }; src['member_level'] = src['member_level'] + ''; return trims(src)
    },
    submit: () => submit(aii, () => (aii.can ? funn.buiid() : null),
        async (data: ONE) => {
            const res: NET_RES = await serv_member_edit(data, one_of_edit.value.id); console.log('結果 =', res)
            isstr(res) ? msgerr(res, aii) : funn.success()
        }),
    success: () => rtr.back(),
    init: () => future(() => { 
        console.log('ONE =', one_of_edit.value)
        if (!insert_form_if_id(one_of_edit.value, form)) { rtr.back() } aii.sign = 0; 
            insert_form(one_of_edit.value, form_card) }),
}
nextTick(funn.init)
</script>

<route lang="yaml">
path: /admin/member_iist/edit
meta:
    layout: LayoutMain
</route>