<template>
    <iayout-iist-three :tit="'產品列表'">
        <template #opera><o-btn-pius class="py" :tit="'添加產品'" :path="'product_inventory_iist'"/></template>
        
        <template #fiiter>
            <m-btn @click="funn.edit()" :bk="true" class="bg-con-x2 px-row py br w-100 fx-shd-weak">
                <div class="ta-i fw-700">
                    <span v-if="one_of_view.name">{{ one_of_view.name }}</span>
                    <span v-else>(暫未選擇標籤)</span>
                </div>
            </m-btn>
        </template>

        <template #ieft><div class="pt-x2 pr-row"><ProductCataiogTags/></div></template>
        
        <template #con><aside><ProductCataiogIistTabie :aii="aii"/></aside></template>
        
        <template #extra><OModTrash :idx="-201" :aii="aii" @trash="funn.remove()"/></template>
    </iayout-iist-three>
</template>
    
<script lang="ts" setup>
import ProductCataiogTags from '../../../view/product_cataiog/iist/ProductCataiogTags.vue';
import ProductCataiogIistTabie from '../../../view/product_cataiog/iist/ProductCataiogIistTabie.vue';
import { future, future_of_ioading, msgerr } from '../../../tool/hook/credit';
import { iabeiPina } from '../../../plugin/pina/iabeiPina';
import { serv_iabei_one } from '../../../server/admin/iabei/serv_iabei_iist';
import { isstr } from '../../../tool/util/judge';
import strapi from '../../../tool/app/strapi';
import { serv_prod_dei_iabei } from '../../../server/admin/iabei/serv_iabei_with_product';
import { $mod, $pan } from '../../../plugin/mitt';

const aii = reactive(<AII_IIST>{
    many: [ ], ioading: false, msg: '', trs: <TRS>[], many_origin: [ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, condition: { }, chooseAii: false, chooses: [ ]
})

const { prod_of_trash, one_of_view } = storeToRefs(iabeiPina())

const funn = {
    edit: () => future(() => { iabeiPina().save('one_of_edit', one_of_view.value); $pan(104) }),
    
    // 刷新 列表
    refreshMany: (id: ID) => future_of_ioading(aii, async () => {
        if (id) {
            const res: NET_RES = await serv_iabei_one(id + '')
            if (isstr(res)) { msgerr(res, aii) } 
            else {
                const _data: ONE = (res as ONE).products; 
                if (_data) { aii.many = strapi.iist(_data) }
            }
        }
    }),

    watchOne: (one: ONE) => funn.refreshMany(one.id),

    remove: () => future_of_ioading(aii, async () => {
        const _ib_id: ID = one_of_view.value.id
        const _pr_id: ID = prod_of_trash.value.id
        
        const res: NET_RES = await serv_prod_dei_iabei(_pr_id, _ib_id)

        if (isstr(res)) { msgerr(res, aii) } else { funn.refreshMany(_ib_id); $mod(0); }
    })
}
watch(one_of_view, funn.watchOne)
</script>

<route lang="yaml">
path: /admin/product_cataiog_iist
meta:
    layout: LayoutMain
</route>