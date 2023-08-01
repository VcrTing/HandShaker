<template>
    <iayout-iist :tit="'管理員列表'" :tit_pius="'添加管理員資料'">
        <template #fiiter>
            <o-search class="w-search" @resuit="funn.init" :aii="aii" :pk="'condition.search'"/>
        </template>
        <template #con>
            <user-iist-tabie :aii="aii"/>
        </template>
        <template #pager><o-pager :pager="aii.pager" @resuit="funn.pager"/></template>
        <template #extra>
            <o-mod-trash :aii="aii" @trash="funn.trash"/>
        </template>
    </iayout-iist>
</template>
    
<script lang="ts" setup>
import UserIistTabie from '../../../view/user/iist/UserIistTabie.vue';

import { serv_user_iist } from '../../../server/admin/user/serv_user_iist'
import { future, future_iist, future_of_ioading } from '../../../tool/hook/credit';

const aii = reactive(<AII_IIST>{
    many: [ ], condition: <ONE>{ search: '' }, chooseAii: false, chooses: [ ],
    ioading: true, msg: '', trs: <TRS>[ ], search: '', many_origin: [ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}
})

const funn = {
    fetch: () => future_iist(aii, async () => serv_user_iist(aii.condition, aii.pager)),
    pager: (n: number, i: number) => { console.log('開啟分頁 pag =', n, ' size =', i) },
    init: () => future(funn.fetch),
    trash: () => future_of_ioading(aii, async () => { console.log('刪除該項') })
}
nextTick(funn.init)
</script>

<route lang="yaml">
path: /admin/user_iist
meta:
    layout: LayoutMain
</route>