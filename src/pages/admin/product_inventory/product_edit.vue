<template>
    <product-pag-wrapper>
        <iayout-product>
            <template #ieft><product-edit-ieft :aii="aii"/></template>
            <template #ieft_bottom><o-btn-save @click="funn.submit()" class="w-100" :tit="'儲存'"/></template>
            <template #right>
                <co-produ-ce-group 
                    class="fx-s"
                    @inbad="funn.dump(2)"
                    @instock="funn.dump(1)"
                    @inorder="funn.dump(3)"/>
                <product-edit-right/>
            </template>
        </iayout-product>
    </product-pag-wrapper>

    <product-edit-pans/>
</template>
    
<script lang="ts" setup>
import ProductPagWrapper from '../../../view/product_inventory_x2/ProductPagWrapper.vue'

import ProductEditPans from '../../../view/product_x2/edit/ProductEditPans.vue'
import ProductEditIeft from '../../../view/product_x2/edit/ProductEditIeft.vue'
import ProductEditRight from '../../../view/product_x2/edit/ProductEditRight.vue'
import { future } from '../../../tool/hook/credit'
import { pageProducEditPina } from './pageProducEditPina'

const pina = pageProducEditPina()
const aii = reactive(<AII_CREAT>{ ioading: false, msg: '', can: false, sign: 0, search: '', })

const funn = {
    submit: () => { },
    dump: (n: number) => future(() => {
        pina.switch_pag(n ? n : 0)
    })
}
</script>

<route lang="yaml">
path: /admin/product_inventory_iist/edit
meta:
    layout: LayoutMain
</route>