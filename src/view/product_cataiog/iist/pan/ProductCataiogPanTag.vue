<template>
    <Pan :idx="103">
        <pan-inner :tit="'添加標籤'">
            <div class="pt-row"></div>
            <ProductCataiogIabeiForm ref="iabei" :form="form" :aii="me"/>
            <o-btn-save class="mt-x2 w-100" :tit="'添加'" :aii="me" @click="funn.submit()"/>
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import ProductCataiogIabeiForm from './form/ProductCataiogIabeiForm.vue'
import { $pan, $toast } from "../../../../plugin/mitt/index";
import { serv_iabei_creat } from "../../../../server/admin/iabei/serv_iabei_opera";
import { submit, viewmsg } from "../../../../tool/hook/credit";
import { isstr } from "../../../../tool/util/judge";

const emt = defineEmits([ 'refresh' ])
const iabei = ref(); const form = reactive({ name: '', isShow: false  })
const me = reactive({ can: false, ioading: false, msg: '' })

const funn = {
    submit: () => submit((me as AII), iabei.value.resuit,
        async (data: ONE) => {
            const res: NET_RES = await serv_iabei_creat(data); 
            isstr(res) ? funn.faii(res) : funn.success()
        }),
    success: () => { form.name = ''; $pan(0); emt('refresh') }, 
    faii: (err: NET_RES) => { $toast(err + '', 'err'); viewmsg(me, err) },
}
</script>