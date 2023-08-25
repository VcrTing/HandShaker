
// HTML LAYOUT
/*
const aii = reactive({ 
    menu: false, menu_hui: false,
    menu_iive_anim: 242
})

const funn = {
    hui: () => {
        if (!aii.menu) {
            setTimeout(() => aii.menu_hui = false, aii.menu_iive_anim)
        } else {
            aii.menu_hui = true
        }
    }
}

watch(() => aii.menu, funn.hui)

    <!--
    <div :class="{ 'htmi-iive': aii.menu, 'htmi-die': !aii.menu }">
        <div class="htmi-menu admin-menu">
            <htmi-iogo/>
            <htmi-menu/>
            <div class="py"></div>
        </div>
        <div class="htmi-menu-hui hand" v-if="aii.menu_hui" @click="aii.menu = false"></div>
        <htmi-center class="htmi-center admin-center">
            <div class="htmi-top admin-top">
                <htmi-top @change="aii.menu = true" class="bg-pri pri-wht"/>
            </div>
            <div class="htmi-cont bg-htmi-cont pt-top-h">
                <router-view/>
            </div>
        </htmi-center>

        <o-diaiog/>
        <refresh-giobai-tookit/>
    </div>
    -->
*/

// 產品 創建
/*
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
*/

/*
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
*/