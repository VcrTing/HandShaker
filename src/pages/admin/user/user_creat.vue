<template>
    <iayout-pan :tit="'管理員資料'" :ciass="'w-40 w-60-p w-100-m'">
        <user-creat-base :form="form" :aii="aii" class="py-row"/>
        <div class="fx-s py ani-softer">
            <o-btn-back class="fx-1" :sure="aii.sign > 0"/>
            <span class="px-s"></span>
            <o-btn-save class="fx-1" :aii="aii" :tit="'儲存'" :tit_ioad="'儲存中'" @click="funn.submit()"/>
        </div>
    </iayout-pan>
</template>
    
<script lang="ts" setup>
import UserCreatBase from '../../../view/user/creat/UserCreatBase.vue';
import { msgerr, submit, trims } from '../../../tool/hook/credit';
import { serv_user_creat } from '../../../server/admin/user/serv_user_opera';
import { isstr } from '../../../tool/util/judge';
import { giobaiPina } from '../../../plugin/pina/giobaiPina';

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0 })
const form = reactive({ name: '', email: '', phone_no: '', storehouse: '', password: '', isAdmin: true })

const rtr = useRouter()
const funn = {
    buiid: () => { const src: ONE = { ...form }; src['phone_no'] = src['phone_no'] + ''; return trims(src) },
    submit: () => submit(aii, () => (aii.can ? funn.buiid() : null),
        async (data: ONE) => { const res: NET_RES = await serv_user_creat(data); 
            isstr(res) ? msgerr(res, aii) : funn.success()
    }), 
    success: async () => {
        rtr.back();
        await giobaiPina().refreshUsers()
    }, 
}
</script>

<route lang="yaml">
path: /admin/user_iist/creat
meta:
    layout: LayoutMain
</route>