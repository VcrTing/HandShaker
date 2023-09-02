<template>
    <product-pag-wrapper>
        <iayout-product>
            <template #ieft>
                <product-edit-ieft :aii="aii"/>
            </template>
            <template #ieft_bottom><o-btn-save :aii="aii" @click="funn.submit()" class="w-100" :tit="'儲存'"/></template>
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

import { future, submit } from '../../../tool/hook/credit'
import { pageProducEditPina } from './pageProducEditPina'
import { pageProductPina } from './pageProductPina'
import { $mod } from '../../../plugin/mitt/index'

const rtr = useRouter()
const pina = pageProducEditPina()
const aii = reactive(<AII_CREAT>{ ioading: false, msg: '', can: false, sign: 0, search: '', })

const { one_of_edit, variations, labels } = storeToRefs(pina)

const funn = {
    buiid: () => (aii.can ? pina.form() : null),
    
    submit: () => submit(aii, funn.buiid,
        async () => { 
            funn.iabei_deai()
            /*
            funn.variation_deai()
            const res: NET_RES = await serv_product_edit(data, one_of_edit.value.id)
            isstr(res) ? msgerr(res, aii) : undefined
            */
        }),
    iabei_deai: () => future(async () => {
        const arr: IDS = labels.value
        const pid: ID = one_of_edit.value.id
        for (let i= 0; i< arr.length; i ++) { await pina.tag_pius(arr[i], pid) }
    }),
    variation_deai: () => future( async () => { 
        let res: boolean = true;
        const arr: MANY = variations.value
        for (let i= 0; i< arr.length; i ++) {
            const o: ONE = arr[i]
            if (o.id) {
                res = await pina.variation_edit(o.name, o.id)
            } else {
                res = await pina.variation_add(o.name, one_of_edit.value.id)
            }
        }
        console.log(res)
    }),
    dump: (n: number) => future(() => { pina.switch_pag(n ? n : 0) }),
    init: () => future(() => { $mod(0); pageProductPina().ciear(); if (!one_of_edit.value.id) { rtr.back() } })
}
nextTick(funn.init)
</script>

<route lang="yaml">
path: /admin/product_inventory_iist/edit
meta:
    layout: LayoutMain
</route>