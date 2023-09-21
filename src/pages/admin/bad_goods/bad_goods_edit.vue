<template>
    <iayout-pan :tit="'编辑壞貨'" :ciass="'w-45 w-55-p'">
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
import { future, insert_form_if_id, msgerr, submit, trims } from '../../../tool/hook/credit'
import { isstr } from '../../../tool/util/judge'
import { serv_bad_edit } from '../../../server/admin/bad_goods/serv_bad_opera'
import { badPina } from '../../../plugin/pina_admin/badPina'

const { one_of_edit } = storeToRefs(badPina())

const rtr = useRouter()
const aii = reactive({ ioading: false, msg: '', can: false, sign: 0 })
const form = reactive({ product_id: null, variation: 0, product_name: '', quantity: 1, storehouse_id: null, date: '', remarks: '' })

const funn = {
    buiid: () => (aii.can ? trims(form) : null),
    submit: () => submit(aii, funn.buiid,
        async (data: ONE) => { 
            const res: NET_RES = await serv_bad_edit(data, one_of_edit.value.id); 
            isstr(res) ? msgerr(res, aii) : funn.success()
        }),
    success: () => rtr.back(),
    init: () => future(() => { 
        const one: ONE = one_of_edit.value
        if (!insert_form_if_id(one, form)) { rtr.back() } else {
            badPina().save('product_id', one.product.id)
            badPina().save('product_of_choise', one.product) 
            badPina().save('storehouse_id', one.storehouse_id)
        } aii.sign = 0; }),
}
nextTick(funn.init)
</script>

<route lang="yaml">
path: /admin/bad_goods_iist/edit
meta:
    layout: LayoutMain
</route>