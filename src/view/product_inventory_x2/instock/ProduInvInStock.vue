<template>
    <section>
        <h3 class="py-x3 mb">添加入貨信息(僅加貨)</h3>
        <produ-inv-in-stock-inner :aii="aii" ref="inner" @submit="funn.submit">
            <o-save-back-btns-group :aii="aii" :ciass="'w-100'" :tit_save="'儲存'" @back="funn.back()" @save="funn.submit()"/>
        </produ-inv-in-stock-inner>
    </section>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina';
import { serv_instock_creat } from '../../../server/admin/product_inventory/serv_stock_opera';
import { future, msgerr, submit, toastsucc } from '../../../tool/hook/credit';
import { isstr } from '../../../tool/util/judge';
import ProduInvInStockInner from './ProduInvInStockInner.vue';

const inner = ref()
const { pag, one_of_edit } = storeToRefs(pageProducEditPina())

const aii = reactive({ ioading: false, msg: '', can: false, sign: 0 })

const funn = {
    submit: () => submit(aii, inner.value.buiid, async (data: ONE) => {
        if (data) {
            const res: NET_RES = await serv_instock_creat(data)
            isstr(res) ? msgerr(res, aii) : funn.success()
        }
    }),
    success: () => future(async () => {

        toastsucc("產品入貨成功！！！");

        await pageProducEditPina().refreshOneOfEdit()
        
        funn.back()
    }),
    back: () => future(() => { pag.value = 0 }),
    init: () => future(() => { 
        const src: ONE = one_of_edit.value
        if (src.id) {
            inner.value.setv(
                src.new_restock_price,
                src.new_lowest_price,
                src.new_selling_price
            )
        } else {
            pag.value = 0
        }
    })
}
nextTick(funn.init)
</script>