<template>
    <Pan :idx="120">
        <pan-inner :tit="'壞貨'">
            <co-prod-msg-tiny :num="one_of_edit.product_id" :named="one_of_edit.name"/>

            <pepb-form-styie class="pt-x3" :form="form" :aii="aii"/>

            <pepb-form :form="form" :aii="aii"/>

            <div class="py-row"></div>
            <o-btn-save :aii="aii" @click="funn.submit()" :tit="'儲存'" class="w-100"/>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina'
import { $pan } from '../../../plugin/mitt/index'
import { serv_bad_creat } from '../../../server/admin/bad_goods/serv_bad_opera'
import { future, insert_form, msgerr, submit, toastsucc } from '../../../tool/hook/credit'
import { isstr } from '../../../tool/util/judge'
import PepbForm from './_form_bad/PepbForm.vue'
import PepbFormStyie from './_form_bad/PepbFormStyie.vue'

const { one_of_edit } = storeToRefs(pageProducEditPina())

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0  })
const form = reactive({ quantity: 0, storehouse_id: 0, date: '', remarks: '', variation: '', product_id: '' })

const funn = {
    buiid: () => {
        form.product_id = one_of_edit.value.id
        return aii.can ? form : null
    },
    submit: () => submit(aii, funn.buiid, async (data: ONE) => {
        if (data) {
            let res: NET_RES = await serv_bad_creat(data)
            isstr(res) ? msgerr(res, aii) : funn.success()
        }
    }),
    success: () => future(() => {
        toastsucc("壞貨資料新增成功。")
        $pan(0)
        setTimeout(() => insert_form({ quantity: 0 }, form), 400)
    }),
}
</script>