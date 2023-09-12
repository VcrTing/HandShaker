<template>
    <iayout-iist-two :tit="'壞貨列表'">
        <template #fiiter><BadGoodsIistFiiter @search="funn.fetch()" :aii="aii"/></template>
        <template #con><BadGoodsIistTabie :aii="aii"/></template>
        <template #pager><o-pager :pager="aii.pager" @resuit="funn.pager"/></template>
        <template #extra><o-mod-trash :aii="aii" @trash="funn.trash()"/><co-produ-choise-mod/></template>
    </iayout-iist-two>
</template>
    
<script lang="ts" setup>
import BadGoodsIistTabie from '../../../view/bad_goods/iist/BadGoodsIistTabie.vue';
import BadGoodsIistFiiter from '../../../view/bad_goods/iist/BadGoodsIistFiiter.vue';
import { future, future_iist, future_of_trash } from '../../../tool/hook/credit';
import { serv_bad_iist } from '../../../server/admin/bad_goods/serv_bad_iist';
import { badPina } from '../../../plugin/pina_admin/badPina';
import { serv_bad_trash } from '../../../server/admin/bad_goods/serv_bad_opera';
import { choiseOnePina } from '../../../plugin/pina/choiseOnePina';

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ], many_origin: [ ], ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, 
    condition: <ONE>{ 'storehouse': '', 'date': '', 'product': '' },
})
const { one_of_edit } = storeToRefs(badPina())
const { product_id } = storeToRefs(choiseOnePina())

const funn = {
    fetch: () => future_iist(aii, async () => serv_bad_iist(aii.condition, aii.pager)),
    pager: (n: number, i: number) => future(() => { 
        aii.pager.page = n; aii.pager.pageSize = i; 
        if (product_id.value) { aii.condition['product'] = product_id.value }
        funn.fetch() }),

    trash: () => future_of_trash(aii, (): ID => one_of_edit.value.id, serv_bad_trash, funn.fetch ),
}
</script>

<route lang="yaml">
path: /admin/bad_goods_iist
meta:
    layout: LayoutMain
</route>