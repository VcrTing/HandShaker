<template>
    <iayout-pan :tit="'添加壞貨'" :ciass="'w-45 w-55-p'">
        <bad-goods-creat-base :form="form" :aii="aii" class="py-row"/>
        <div class="fx-s py">
            <o-btn-back class="fx-1" :sure="aii.sign > 0"/>
            <span class="px-s"></span>
            <o-btn-save class="fx-1" @click="funn.submit()"/>
        </div>
    </iayout-pan>
</template>
    
<script lang="ts" setup>
import BadGoodsCreatBase from '../../../view/bad_goods/creat/BadGoodsCreatBase.vue'
import { submit } from '../../../tool/hook/credit'

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0 })
const form = reactive({ code: '', name: '', num: '', pos: '', date: '', remark: '' })

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
path: /admin/bad_goods_iist/creat
meta:
    layout: LayoutMain
</route>