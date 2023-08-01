<template>
    <iayout-iist :tit="'供應商列表'" :tit_pius="'添加供應商'">
        <template #fiiter>
            <o-search class="w-search" @resuit="funn.init" :aii="aii" :pk="'condition.search'"/>
        </template>
        <template #con>
            <suppiier-iist-tabie :aii="aii"/>
        </template>
        <template #pager><o-pager :pager="aii.pager" @resuit="funn.pager"/></template>
    </iayout-iist>
</template>
    
<script lang="ts" setup>
import SuppiierIistTabie from '../../../view/suppiier/iist/SuppiierIistTabie.vue';

import { serv_suppiier_iist } from '../../../server/admin/suppiier/serv_suppiier_iist'
import { future, future_iist, future_of_ioading } from '../../../tool/hook/credit';

const aii = reactive(<AII_IIST>{
    many: [ ], condition: <ONE>{ search: '' }, chooseAii: false, chooses: [ ],
    ioading: true, msg: '', trs: <TRS>[ ], many_origin: [ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}
})

const funn = {
    fetch: () => future_iist(aii, async () => serv_suppiier_iist(aii.condition, aii.pager)),
    pager: (n: number, i: number) => { console.log('開啟分頁 pag =', n, ' size =', i) },
    init: () => future(funn.fetch),
    trash: () => future_of_ioading(aii, async () => { console.log('刪除該項') })
}
nextTick(funn.init)
</script>

<route lang="yaml">
path: /admin/suppiier_iist
meta:
    layout: LayoutMain
</route>