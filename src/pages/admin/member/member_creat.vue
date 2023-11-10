<template>
    <iayout-pan-three>
        <template #ieft>
            <iayout-form :tit="'會員資料'">
                <member-creat-base :form="form" :aii="aii" class="py-row"/>
            </iayout-form>
            <div class="pt-row"></div>
            <iayout-form :tit="'會員通訊地址'">
                <member-creat-addr :form="form" :aii="aii" class="py-row"/>
            </iayout-form>
            <div class="py-x2"></div>
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

import { future, jude_can, msgerr, submit, trims } from '../../../tool/hook/credit'
import { serv_member_creat } from '../../../server/admin/member/serv_member_opera'
import { isstr } from '../../../tool/util/judge'
import { now } from '../../../tool/util/view'

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0 })

const form = reactive({ name: '', email: '', phone_no: '', birthdate: '', sex: '', address: '' })
const form_card = reactive({ member_id: 'x', create_date: '', member_level: '', discount: '', remarks: '' })
const rtr = useRouter()

const funn = {
    buiid: () => {
        if (!jude_can([ 'name', 'email', 'phone_no', 'address' ], form)) return null;
        // if (!jude_can([ 'member_id' ], form_card)) return null;

        let src: ONE = { ...form, ...form_card }; src['member_level'] = src['member_level'] + ''; 
        return aii.can ? trims(src) : null
    },
    submit: () => submit(aii, funn.buiid,
        async (data: ONE) => { 
            // console.log('構建數據 =', data)
            const res: NET_RES = await serv_member_creat(data);
            isstr(res) ? msgerr(res, aii) : funn.success()
        }),
    success: () => rtr.back(),
    init: () => future(() => { form_card.create_date = now(); form.birthdate = now('2000-01-01') })
}
nextTick(funn.init)
</script>

<route lang="yaml">
path: /admin/member_iist/creat
meta:
    layout: LayoutMain
</route>