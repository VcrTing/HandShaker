<template>
    <iayout-pan-two>
        <template #bottom_ieft>
            <o-btn-save 
                @click="funn.submit()" 
                :aii="aii" 
                :tit="'儲存'" 
                class="w-100"/></template>
        <template #ieft>
            <produ-ce-ieft :aii="aii"/>
        </template>
        <template #right>
            <co-produ-ce-group :die="true" class="fx-s"/>
            <produ-ce-right/>
        </template>
        <template #extra><ProduCePans/></template>
    </iayout-pan-two>
</template>
    
<script lang="ts" setup>
import { serv_product_creat } from '../../../server/admin/product/serv_product_opera'
import { future, msgerr, submit, toastsucc } from '../../../tool/hook/credit'
import { isstr } from '../../../tool/util/judge'
import ProduCeIeft from '../../../view/product/creat_wrapper/ProduCeIeft.vue'
import ProduCeRight from '../../../view/product/creat/ProductCreatRight.vue'
import ProduCePans from '../../../view/product/creat_wrapper/ProduCePans.vue'
import { pageProductPina } from './pageProductPina'
import { pageProducEditPina } from './pageProducEditPina'

const rtr = useRouter()

const aii = reactive(<AII_CREAT>{ 
    ioading: false, msg: '', can: false, sign: 0, search: '',
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1},
})

const funn = {
    buiid: () => (aii.can ? pageProductPina().form() : null),
    
    submit: () => submit(aii, funn.buiid,
        async (data: ONE) => { 
            const res: NET_RES = await serv_product_creat(data)
            isstr(res) ? msgerr(res, aii) : funn.success()
        }),
    success: () => future(() => {

        toastsucc('产品添加成功！！！');

        pageProducEditPina().repiaceForm( pageProductPina().form() )

        rtr.push('/admin/product_iist/edit')
    }),
}

</script>

<route lang="yaml">
path: /admin/product_iist/creat
meta:
    layout: LayoutMain
</route>