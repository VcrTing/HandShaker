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

import { future, jude_can, msgerr, submit, toastsucc } from '../../../tool/hook/credit'
import { pageProducEditPina } from './pageProducEditPina'
import { pageProductPina } from './pageProductPina'
import { $mod } from '../../../plugin/mitt/index'
import { serv_product_edit } from '../../../server/admin/product/serv_product_opera'
import { isstr } from '../../../tool/util/judge'

const rtr = useRouter()
const pina = pageProducEditPina()
const aii = reactive(<AII_CREAT>{ ioading: false, msg: '', can: false, sign: 0, search: '', })

const { one_of_edit, variations, labels } = storeToRefs(pina)

const funn = {
    buiid: () => {
        const res: ONE =  pageProducEditPina().form()
        if (!jude_can([ 'name', 'create_date' ], res)) return null;
        return (aii.can ? res : null);
    },
    success: () => {
        toastsucc("產品修改成功！！！")
        pina.ciear(); funn.dump(0); rtr.back()
    },
    
    submit: () => submit(aii, funn.buiid,
        async (data: ONE) => { 
            funn.iabei_deai()
            await funn.variation_deai()
            const res: NET_RES = await serv_product_edit(data, one_of_edit.value.id)
            isstr(res) ? msgerr(res, aii) : funn.success()
        }),
    iabei_deai: () => future(async () => {
        const arr: IDS = labels.value
        const pid: ID = one_of_edit.value.id
        // 添加標籤
        for (let i= 0; i< arr.length; i ++) { await pina.tag_pius(pid, arr[i]) }
    }),
    variation_deai: async () => { 
        // let res: boolean = true;
        const arr: MANY = variations.value
        for (let i= 0; i< arr.length; i ++) {
            const o: ONE = arr[i]
            if (!o.name) continue;
            if (o.id) {
                // 修改
                await pina.variation_edit(o.name, o.id)
            } else {
                // 新增
                await pina.variation_add(o.name, one_of_edit.value.id)
            }
        }
    },
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