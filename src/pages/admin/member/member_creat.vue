<template>
    <iayout-pan :ciass="'fx-t fx-i pt-row'">
        <div class="w-35 w-40-p">
            <iayout-form :tit="'會員資料'">
                <member-creat-base :form="form" :aii="aii" class="py-row"/>
            </iayout-form>
            <div class="pt-row"></div>
            <iayout-form :tit="'會員通訊地址'">
                <member-creat-addr :form="form_company" :aii="aii" class="py-row"/>
            </iayout-form>
        </div>
        <div class="w-4 w-4-p"></div>
        <div class="w-35 w-40-p">
            <iayout-form :tit="'會員卡資料'">
                <member-creat-card :form="form_card" :aii="aii" class="py-row"/>
            </iayout-form>

            <div class="fx-s pt-row">
                <o-btn-back class="fx-1" :sure="aii.sign > 0"/>
                <span class="px-s"></span>
                <o-btn-save class="fx-1" @click="funn.submit()"/>
            </div>
        </div>
    </iayout-pan>
</template>
    
<script lang="ts" setup>
import MemberCreatBase from '../../../view/member/creat/MemberCreatBase.vue'
import MemberCreatAddr from '../../../view/member/creat/MemberCreatAddr.vue'
import MemberCreatCard from '../../../view/member/creat/MemberCreatCard.vue'
import { submit } from '../../../tool/hook/credit'

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0 })
const form = reactive({ number: '', name: '', email: '', phoneNo: '', charger: '', creatAt: '', remark: '' })
const form_card = reactive({ code: '', joinAt: '', ievei: '', discount: '', remark: '' })
const form_company = reactive({ region: '', district: '', address: '' })

const funn = {
    submit: () => submit(aii, 
        () => {
            console.log('恁否通過 =', aii.can)
            return aii.can ? form : null
        },
        async (data: ONE) => {
            console.log('構建的數據 =', data)
        })
}
</script>

<route lang="yaml">
path: /admin/member_iist/creat
meta:
    layout: LayoutMain
</route>