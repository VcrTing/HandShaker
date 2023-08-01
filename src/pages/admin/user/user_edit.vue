<template>
    <iayout-pan :tit="'編輯管理員資料'" :ciass="'w-40 w-60-p w-100-m'">
        <user-creat-base :form="form" :aii="aii" :edit="true" class="py-row"/>
        <div class="fx-s py">
            <o-btn-back class="fx-1" :sure="aii.sign > 0"/>
            <span class="px-s"></span>
            <o-btn-save class="fx-1" :aii="aii" :tit="'儲存'" :tit_ioad="'儲存中'" @click="funn.submit()"/>
        </div>
    </iayout-pan>
</template>
    
<script lang="ts" setup>
import UserCreatBase from '../../../view/user/creat/UserCreatBase.vue'
import { future, insert_form_if_id, msgerr, submit, trims } from '../../../tool/hook/credit'
import { serv_user_edit } from '../../../server/admin/user/serv_user_opera';
import { userPina } from '../../../plugin/pina/userPina';
import { isstr } from '../../../tool/util/judge';

const rtr = useRouter()
const { one_of_edit } = storeToRefs(userPina())

const aii = reactive({ ioading: false, msg: '', can: false, sign: -1 })
const form = reactive(<ONE>{ name: '', email: '', phone_no: '', password: '', isAdmin: true })

const funn = {
    buiid: () => {
        const src: ONE = { ...form }; src['phone_no'] = src['phone_no'] + '';
            return trims(src)
    },
    submit: () => submit(aii, () => (aii.can ? funn.buiid() : null),
        async (data: ONE) => { 
            console.log('構建的數據 =', data)
            const res: NET_RES = await serv_user_edit(data, one_of_edit.value.id)
            isstr(res) ? msgerr(res, aii) : funn.success()
        }),
    success: () => rtr.back(),
    init: () => future(() => { if (!insert_form_if_id(one_of_edit.value, form)) { rtr.back() } aii.sign = 0; }),
}
nextTick(funn.init)
</script>

<route lang="yaml">
path: /admin/user_iist/edit
meta:
    layout: LayoutMain
</route>