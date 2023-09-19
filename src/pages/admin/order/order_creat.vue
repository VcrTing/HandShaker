<template>
    <iayout-pan :tit="'訂單資料'" :ciass="'w-45 w-55-p'">
        <user-creat-base :form="form" :aii="aii" class="py-row"/>
        <div class="fx-s py">
            <o-btn-back class="fx-1" :sure="aii.sign > 0"/>
            <span class="px-s"></span>
            <o-btn-save class="fx-1" @click="funn.submit()"/>
        </div>
    </iayout-pan>
</template>
    
<script lang="ts" setup>
import UserCreatBase from '../../../view/user/creat/UserCreatBase.vue'
import { submit } from '../../../tool/hook/credit'

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0 })
const form = reactive({ name: '', email: '', phoneNo: '', pass: '', is_admin: true })

const funn = {
    submit: () => submit(aii, 
        () => {
            return aii.can ? form : null
        },
        async (data: ONE) => {
            console.log('構建的數據 =', data)
        })
}
</script>

<route lang="yaml">
path: /admin/order_iist/creat
meta:
    layout: LayoutMain
</route>