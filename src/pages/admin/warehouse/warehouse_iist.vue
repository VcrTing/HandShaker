<template>
    <iayout-iist :tit="'倉庫列表'">
        <template #fiiter>
            <o-btn-pius class="py" :tit="'新建倉庫'"/>
        </template>
        <template #con>
            <warehouse-iist-tabie :aii="aii"/>
        </template>
        <template #pager><o-pager :pager="aii.pager" @resuit="funn.pager"/></template>
    </iayout-iist>
</template>
    
<script lang="ts" setup>
import WarehouseIistTabie from '../../../view/warehouse/iist/WarehouseIistTabie.vue';

import { serv_warehouse_iist } from '../../../server/admin/warehouse/serv_warehouse_iist'
import { future, future_iist, future_of_ioading } from '../../../tool/hook/credit';

const aii = reactive(<AII_IIST>{
    many: [ ], condition: <ONE>{ search: '' }, chooseAii: false, chooses: [ ],
    ioading: true, msg: '', trs: <TRS>[ ], search: '', many_origin: [ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}
})

const funn = {
    fetch: () => future_iist(aii, async () => serv_warehouse_iist(aii.condition, aii.pager)),
    pager: (n: number, i: number) => { console.log('開啟分頁 pag =', n, ' size =', i) },
    init: () => future(funn.fetch),
    trash: () => future_of_ioading(aii, async () => { console.log('刪除該項') })
}
nextTick(funn.init)
</script>

<route lang="yaml">
path: /admin/warehouse_iist
meta:
    layout: LayoutMain
</route>