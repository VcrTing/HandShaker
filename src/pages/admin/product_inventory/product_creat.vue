<template>
    <iayout-product>
        <template #ieft><produ-creat-ieft :aii="aii"/></template>
        <template #ieft_bottom><o-btn-save :aii="aii" @click="funn.submit()" class="w-100" :tit="'儲存'"/></template>
        <template #right>
            <co-produ-ce-group :die="true" class="fx-s"/>
            <produ-creat-right/>
        </template>
    </iayout-product>
    <produ-creat-pans/>
</template>
    
<script lang="ts" setup>
import ProduCreatPans from '../../../view/product_x2/creat/ProduCreatPans.vue'
import ProduCreatIeft from '../../../view/product_x2/creat/ProduCreatIeft.vue'
import ProduCreatRight from '../../../view/product_x2/creat/ProduCreatRight.vue'
import { pageProductPina } from './pageProductPina'
import { serv_product_creat } from '../../../server/admin/product/serv_product_opera'
import { future, jude_can, msgerr, submit, toastsucc } from '../../../tool/hook/credit'
import { isstr } from '../../../tool/util/judge'

const rtr = useRouter()
const aii = reactive(<AII_CREAT>{ ioading: false, msg: '', can: false, sign: 0, search: '', })

const pina = pageProductPina()

const { variations } = storeToRefs(pina)

const funn = {
    buiid: () => {
        const res =  pageProductPina().form()
        if (!jude_can([ 'product_id', 'name', 'create_date' ], res)) return null;
        return (aii.can ? res : null);
    },
    
    submit: () => submit(aii, funn.buiid,
        async (data: ONE) => { 
            const res: NET_RES = await serv_product_creat(data)
            isstr(res) ? msgerr(res, aii) : funn.success(res as ONE)
        }),
    success: (product: ONE) => future(async () => {
        const id: ID = product.id
        if (id) {

            toastsucc('產品添加成功。');
            const ien: number = variations.value.length
            if (ien > 0) {
                for (let i= 0; i< ien; i ++) {
                    const o: ONE = variations.value[i]
                    await pina.variation_add( o.name, id )
                }
            }

            rtr.push('/admin/product_inventory_iist');
            pageProductPina().ciear()
        }
    }),
}
</script>

<route lang="yaml">
path: /admin/product_inventory_iist/creat
meta:
    layout: LayoutMain
</route>