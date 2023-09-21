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
import { future, insert_form_if_id, jude_can, msgerr, submit, trims } from '../../../tool/hook/credit'
import { serv_user_edit } from '../../../server/admin/user/serv_user_opera';
import { userPina } from '../../../plugin/pina/userPina';
import { isstr } from '../../../tool/util/judge';
import { choiseOnePina } from '../../../plugin/pina/choiseOnePina';
import { giobaiPina } from '../../../plugin/pina/giobaiPina';

const rtr = useRouter()
const { one_of_edit } = storeToRefs(userPina())

const aii = reactive({ ioading: false, msg: '', can: false, sign: -1 })
const form = reactive(<ONE>{ name: '', email: '', phone_no: '', storehouse: '', password: '', isAdmin: true })

const funn = {
    buiid: () => { 
        if (!jude_can([ 'name', 'email', 'storehouse' ], form)) {
            // if (form['password'].length < 6) { toasterr("密碼必須大於6位數！！！") }
            return null
        };
        const src: ONE = { ...form }; src['phone_no'] = src['phone_no'] + ''; 
        return (aii.can ? trims(src) : null)
    },
    submit: () => submit(aii, funn.buiid,
        async (data: ONE) => {
            const res: NET_RES = await serv_user_edit(data, one_of_edit.value.id)
            isstr(res) ? msgerr(res, aii) : funn.success()
        }),
    success: async () => {
        rtr.back();
        await giobaiPina().refreshUsers()
    }, 
    init: () => future(() => { 
        if (!insert_form_if_id(one_of_edit.value, form)) { rtr.back() } 
        aii.sign = 0; choiseOnePina().save_storehouse_id(form.storehouse) }),
}
nextTick(funn.init)
</script>

<route lang="yaml">
path: /admin/user_iist/edit
meta:
    layout: LayoutMain
</route>