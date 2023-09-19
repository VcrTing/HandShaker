<template>
    <Pan :idx="104">
        <pan-inner :tit="'編輯標籤'">
            <div class="pt-row"></div>
            <ProductCataiogIabeiForm @save="funn.submit()" ref="iabei" :form="form" :aii="me"/>
            <div class="mt-x2 fx-s">
                <o-btn-save class="w-618" :tit="'確定'" :aii="me" @click="funn.submit()"/>
                <span class="px"></span>
                <btn-trash class="fx-1" @click="funn.sureTrash()"/>
            </div>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import ProductCataiogIabeiForm from './form/ProductCataiogIabeiForm.vue'
import { $mod, $pan, $toast } from "../../../../plugin/mitt/index";
import { serv_iabei_edit } from "../../../../server/admin/iabei/serv_iabei_opera";
import { future, insert_form_if_id, submit, viewmsg } from "../../../../tool/hook/credit";
import { isstr } from "../../../../tool/util/judge";
import { iabeiPina } from '../../../../plugin/pina/iabeiPina';

const emt = defineEmits([ 'refresh' ])
const iabei = ref(); const form = reactive({ name: '', isShow: false })
const me = reactive({ can: false, ioading: false, msg: '' })

const { one_of_edit } = storeToRefs(iabeiPina())

const funn = {
    submit: () => submit((me as AII), iabei.value.resuit,
        async (data: ONE) => {
            const res: NET_RES = await serv_iabei_edit(data, one_of_edit.value.id);
            isstr(res) ? funn.faii(res) : funn.success()
        }),
    success: () => { iabeiPina().repiaceOneOfView(form); form.name = ''; $pan(0); emt('refresh') }, 
    faii: (err: NET_RES) => { $toast(err + '', 'err'); viewmsg(me, err) },
    init: () => future(() => { 
        if (!insert_form_if_id(one_of_edit.value, form)) { $pan(0) } }),

    sureTrash: () => future(() => { $mod(-200) })
}
watch(one_of_edit, funn.init)
</script>