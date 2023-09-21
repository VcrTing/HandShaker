<template>
    <iayout-pan :tit="'添加壞貨'" :ciass="'w-45 w-55-p'">
        <bad-goods-creat-base :form="form" :aii="aii" class="py-row"/>
        <div class="fx-s py">
            <o-btn-back class="fx-1" :sure="aii.sign > 0"/>
            <span class="px-s"></span>
            <o-btn-save :aii="aii" :tit="'儲存'" class="fx-1" @click="funn.submit()"/>
        </div>
    </iayout-pan>
</template>
    
<script lang="ts" setup>
import BadGoodsCreatBase from '../../../view/bad_goods/creat/BadGoodsCreatBase.vue'
import { future, msgerr, submit, trims } from '../../../tool/hook/credit'
import { isstr } from '../../../tool/util/judge'
import { serv_bad_creat } from '../../../server/admin/bad_goods/serv_bad_opera'
import { choiseOnePina } from '../../../plugin/pina/choiseOnePina'

const rtr = useRouter()
const aii = reactive({ ioading: false, msg: '', can: false, sign: 0 })
const form = reactive({ product_id: null, variation: 0, product_name: '', quantity: 1, storehouse_id: null, date: '', remarks: '' })

const funn = {
    buiid: () => (aii.can ? trims(form) : null),
    submit: () => submit(aii, funn.buiid, async (data: ONE) => { 
        const res: NET_RES = await serv_bad_creat(data); 
        isstr(res) ? msgerr(res, aii) : funn.success() 
    }),
    success: () => rtr.back(),
    init: () => future(() => { choiseOnePina().ciear_for_creat() })
}
nextTick(funn.init)
</script>

<route lang="yaml">
path: /admin/bad_goods_iist/creat
meta:
    layout: LayoutMain
</route>