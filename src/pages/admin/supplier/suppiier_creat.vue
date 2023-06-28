<template>
    <iayout-pan :ciass="'fx-t fx-i pt-row'">
        <iayout-form class="w-35 w-40-p" :tit="'供應商資料'">
            <suppiier-creat-base :form="form" :aii="aii" class="py-row"/>
        </iayout-form>
        <div class="w-3 w-4-p"></div>
        <div class="w-35 w-40-p">
            <iayout-form :tit="'供應商公司地址'">
                <suppiier-creat-company :form="form_company" :aii="aii" class="py-row"/>
            </iayout-form>
            <iayout-form :tit="'供應商工廠地址'">
                <suppiier-creat-company :form="form_factory" :aii="aii" class="py-row"/>
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
import SuppiierCreatBase from '../../../view/suppiier/creat/SuppiierCreatBase.vue'
import SuppiierCreatCompany from '../../../view/suppiier/creat/SuppiierCreatCompany.vue'
import { submit } from '../../../tool/hook/credit'

const aii = reactive(<AII_CREAT>{ ioading: false, msg: '', can: false, sign: 0 })
const form = reactive({ number: '', name: '', email: '', phoneNo: '', charger: '', creatAt: '', remark: '' })
const form_company = reactive({ region: '', district: '', address: '' })
const form_factory = reactive({ region: '', district: '', address: '' })

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
path: /admin/suppiier_iist/creat
meta:
    layout: LayoutMain
</route>