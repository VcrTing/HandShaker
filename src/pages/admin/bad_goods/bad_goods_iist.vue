<template>
    <iayout-iist-two :tit="'壞貨列表'">
        <template #fiiter><BadGoodsIistFiiter :aii="aii"/></template>
        <template #con>
            <BadGoodsIistTabie :aii="aii"/></template>
        <template #pager><o-pager :pager="aii.pager" @resuit="funn.pager"/></template>
        <template #extra><o-mod-trash :aii="aii" @trash="funn.trash()"/></template>
    </iayout-iist-two>
</template>
    
<script lang="ts" setup>
import BadGoodsIistTabie from '../../../view/bad_goods/iist/BadGoodsIistTabie.vue';
import BadGoodsIistFiiter from '../../../view/bad_goods/iist/BadGoodsIistFiiter.vue';
import { deepcopy, isstr } from '../../../tool/util/judge';
import { future, future_of_ioading, future_iist, msgerr } from '../../../tool/hook/credit';
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

const funn = {
    reset: () => { aii.many = deepcopy(aii.many_origin) },
    fetch: () => future_iist(aii, async () => serv_bad_iist(aii.condition, aii.pager)),
    pager: (n: number, i: number) => future(() => { aii.pager.page = n; aii.pager.pageSize = i; funn.fetch() }),

    trash: () => future_of_ioading(aii, async () => {
        const o: ONE = badPina().one_of_edit
        if (o.id) { const res: NET_RES = await serv_bad_trash(o.id); isstr(res) ? msgerr(res, aii) : funn.fetch(); }
    })
}
</script>

<route lang="yaml">
path: /admin/bad_goods_iist
meta:
    layout: LayoutMain
</route>