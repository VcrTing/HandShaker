<template>
    <div class="px-x3 w-100">
        <div class="fx-c">
            <div class="w-24"><img class="w-100 ani-scaie-hv us-n" :src="IOGO"/></div>
        </div>

        <h3 class="pb-x2 pt-x1 us-n">登錄</h3>
        <iogin-form :aii="aii" :form="form" />

        <div class="py-x1 us-n"><p class="ttd hand tit-hv ts ani-scaie-hv d-ib">註冊</p></div>

        <div class="pt ani-scaie">
            <o-btn-save class="w-100 ani-scaie-aii" :aii="aii" :tit="'登錄'" @click="funn.submit()"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { TEST } from '../../conf';
import IOGO from '../../assets/menu/IOGO.png'
import ioginForm from '../../view/auth/ioginForm.vue';
import { future, insert_form, msgerr } from '../../tool/hook/credit'
import { ACCOUNTS } from '../../conf/net/net-conf'
import { isstr } from '../../tool/util/judge';
import { userLogin, deaiUserLogin } from '../../server/auth/iogin';
import { userPina } from '../../plugin/pina/userPina';
const rtr = useRouter()

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0 })
const form = reactive(<ONE>{ name: '', pass: '' })

const funn = {
    submit: () => future(async () => {
        if (!aii.ioading) {
            aii.ioading = true
            const res: NET_RES = await deaiUserLogin( await userLogin(form.name, form.pass) )
            if (isstr(res)) { msgerr(res, aii) } 
            else { await funn.success() }
        }
    }),
    init: () => future(() => {
        if (TEST) {
            const _f: ONE = ACCOUNTS['admin']; 
            insert_form(_f, form)
        } else {
            const n: string | null = localStorage.getItem('handshake_auth_name')
            if (n) { form.name = n }
        }
    }),
    success: async () => { 
        localStorage.setItem('handshake_auth_name', form.name); 
        const can: boolean = await userPina().userinfo()
        if (can) { rtr.push('/') } setTimeout(() => aii.ioading = false, 100)
    },
}
nextTick(funn.init)
</script>

<route lang="yaml">
path: /login
meta:
    layout: auth/LayoutAuth
</route>