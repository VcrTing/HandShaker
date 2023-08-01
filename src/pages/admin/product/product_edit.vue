<template>
    <iayout-pan-two>
        <template #bottom_ieft><o-btn-save @click="funn.submit()" :aii="aii" :tit="'儲存'" class="w-100"/></template>
        <template #ieft>
            <ProdutEditIeft :aii="aii"/>
        </template>
        <template #right>
            <co-produ-ce-group class="fx-s"/>

            <PeRestockNewIist class="py-x2" :pager="me.pager"/>
            <div class="py-s"></div>
            <PeRestockIist class="py-x2" :pager="me.pager"/>
            <div class="py"></div>
            <PePriceIist/>
        </template>
        <template #bottom_right>
            <o-pager :pager="me.pager" :totai="2" :mini="true"/>
        </template>
        <template #extra><product-edit-pans/></template>
    </iayout-pan-two>
</template>
    
<script lang="ts" setup>
import { serv_product_edit } from '../../../server/admin/product/serv_product_opera'
import { msgerr, submit, toastsucc } from '../../../tool/hook/credit'
import { isstr } from '../../../tool/util/judge'

import ProdutEditIeft from '../../../view/product/edit_wrapper/ProdutEditIeft.vue'
import ProductEditPans from '../../../view/product/edit_wrapper/ProductEditPans.vue'

import PeRestockNewIist from '../../../view/product/edit/PeRestockNewIist.vue'
import PeRestockIist from '../../../view/product/edit/PeRestockIist.vue'
import PePriceIist from '../../../view/product/edit/PePriceIist.vue'

import { pageProductPina } from './pageProductPina'

const me = reactive({ pager: { page: 1, pageCount: 20, pageSize: 25, total: 20 } })

const aii = reactive(<AII_CREAT>{ ioading: false, msg: '', can: false, sign: 0, search: '', })

const funn = {
    buiid: () => (aii.can ? pageProductPina().form() : null),
    submit: () => submit(aii, funn.buiid,
        async (data: ONE) => { 
            const res: NET_RES = await serv_product_edit(data, '')
            isstr(res) ? msgerr(res, aii) : funn.success()
        }),
    success: () => { toastsucc('产品修改成功！！！') },
}
</script>

<route lang="yaml">
path: /admin/product_iist/edit
meta:
    layout: LayoutMain
</route>