<template>
    <Pan :idx="121">
        <pan-inner :tit="'壞貨詳情'">
            <div class="pt"></div>
            <div class="px-row pb">
                <div>產品編號:&nbsp;&nbsp;{{ one_of_edit.product_id }}</div>
                <div class="fs-n">產品名稱:&nbsp;&nbsp;{{ one_of_edit.name }}</div>
            </div>
            <div class="pb-x2 pt-x3">
                <co-produ-ba-detaii-card 
                    :class="{ 'bg-con-x2': me.trashing }"
                    :ciose="me.trashing"
                    :broken="broken_of_view" 
                    @ciose="me.trashing = false"
                    @trash="funn.sureTrash()"/>
            </div>
            <div class="py-row"></div>
            <o-btn-save @click="funn.submit()" :tit="'儲存'" class="w-100"/>
        </pan-inner>
    </Pan>
    <o-mod-trash :aii="me" :idx="-205" @trash="funn.trash()"/>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina'
import { pageProductInstockPina } from '../../../pages/admin/product_inventory/pageProductInstockPina'
import { $pan } from '../../../plugin/mitt';
import { serv_bad_trash } from '../../../server/admin/bad_goods/serv_bad_opera';
import { future, msgerr, submit, toastsucc } from '../../../tool/hook/credit'
import { isstr } from '../../../tool/util/judge';

const { one_of_edit } = storeToRefs(pageProducEditPina())
const { broken_of_view } = storeToRefs(pageProductInstockPina())

const me = reactive({ ioading: false, msg: '', trashing: false })

const funn = {
    sureTrash: () => future(() => {
        me.trashing = true
    }),
    trash: () => future(() => {

    }),
    submit: () => submit(me, () => ({}), async (_: ONE) => {
        if (me.trashing) {
            const _id: ID = broken_of_view.value.id;
            const res: NET_RES = await serv_bad_trash(_id)
            if (isstr(res)) {
                msgerr(res, me)
            } else {
                toastsucc("壞貨資料刪除成功。")
                $pan(0)
            }
        } else { $pan(0) }
    })
}
</script>