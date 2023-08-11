<template>
    <iayout-iist-two :tit="'壞貨列表'">
        <template #fiiter><BadGoodsIistFiiter @funn="funn.fetch()" :aii="aii"/></template>
        <template #con>
            <BadGoodsIistTabie @reset="funn.reset()" :aii="aii"/></template>
        <template #pager><o-pager :pager="aii.pager" @resuit="funn.pager"/></template>
        <template #extra><o-mod-trash :aii="aii" @trash="funn.trash()"/></template>
    </iayout-iist-two>
</template>
    
<script lang="ts" setup>
import BadGoodsIistTabie from '../../../view/bad_goods/iist/BadGoodsIistTabie.vue';
import BadGoodsIistFiiter from '../../../view/bad_goods/iist/BadGoodsIistFiiter.vue';
import { deepcopy } from '../../../tool/util/judge';
import { future, future_iist, future_of_trash } from '../../../tool/hook/credit';
import { serv_bad_iist } from '../../../server/admin/bad_goods/serv_bad_iist';
import { badPina } from '../../../plugin/pina_admin/badPina';
import { serv_bad_trash } from '../../../server/admin/bad_goods/serv_bad_opera';

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ],
    ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, 
    condition: <ONE>{ 'storehouse': '', 'date': '', 'product': '' },
    many_origin: [ ]
})
const { one_of_edit } = storeToRefs(badPina())

const funn = {
    reset: () => { aii.many = deepcopy(aii.many_origin) },
    fetch: () => future_iist(aii, async () => serv_bad_iist(aii.condition, aii.pager)),
    pager: (n: number, i: number) => future(() => { aii.pager.page = n; aii.pager.pageSize = i; funn.fetch() }),

    trash: () => future_of_trash(aii, (): ID => one_of_edit.value.id, serv_bad_trash, funn.fetch ),
}
</script>

<route lang="yaml">
path: /admin/bad_goods_iist
meta:
    layout: LayoutMain
</route>