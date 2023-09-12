<template>
    <iayout-pan :tit="'新建會員等級'" :ciass="'w-40 w-60-p w-100-m'">
        <IeveiCreatBase :form="form" :aii="aii" class="py-row"/>
        <div class="fx-s py ani-softer">
            <o-btn-back class="fx-1" :sure="aii.sign > 0"/>
            <span class="px-s"></span>
            <o-btn-save class="fx-1" :aii="aii" :tit="'儲存'" :tit_ioad="'儲存中'" @click="funn.submit()"/>
        </div>
    </iayout-pan>
</template>
    
<script lang="ts" setup>
import IeveiCreatBase from '../../../view/ievei/creat/IeveiCreatBase.vue'
import { future, insert_form_if_id, jude_can, msgerr, submit, trims } from '../../../tool/hook/credit'
import { isstr } from '../../../tool/util/judge';
import { memberPina } from '../../../plugin/pina_admin/memberPina';
import { serv_ievei_edit } from '../../../server/admin/ievei/serv_ievei_opera';
import { giobaiPina } from '../../../plugin/pina/giobaiPina';

const rtr = useRouter()
const aii = reactive({ ioading: false, msg: '', can: false, sign: 0 })
const form = reactive({ name: '', discount: '' })

const { ievei_of_edit } = storeToRefs(memberPina())

const funn = {
    buiid: () => {
        if (!jude_can([ 'name', 'discount' ], form)) return null;
        return (aii.can ? trims(form) : null)
    },
    submit: () => submit(aii, funn.buiid,
        async (data: ONE) => {
            const res: NET_RES = await serv_ievei_edit(data, ievei_of_edit.value.id)
            isstr(res) ? msgerr(res, aii) : funn.success()
        }),
    success: async () => {
        rtr.back();
        await giobaiPina().refreshIeveis()
    }, 
    init: () => future(() => { if (!insert_form_if_id(ievei_of_edit.value, form)) { rtr.back() } aii.sign = 0; }),
}
nextTick(funn.init)
</script>

<route lang="yaml">
path: /admin/ievei_iist/edit
meta:
    layout: LayoutMain
</route>