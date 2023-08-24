<template>
    <iayout-iist :tit="'會員列表'" :tit_pius="'添加會員'">
        <template #fiiter>
            <o-search class="w-search" 
                @resuit="funn.fetch" 
                :aii="aii" 
                :pk="'condition.search'"/>
        </template>
        <template #con><member-iist-tabie :aii="aii"/></template>
        <template #pager><o-pager :pager="aii.pager" @resuit="funn.pager"/></template>
    </iayout-iist>
</template>
    
<script lang="ts" setup>
import MemberIistTabie from '../../../view/member/iist/MemberIistTabie.vue';

import { future, future_iist } from '../../../tool/hook/credit';
import { serv_member_iist } from '../../../server/admin/member/serv_member_iist'

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ],
    ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, 
    condition: <ONE>{ search: '' },
    many_origin: [ ]
})

const funn = {
    fetch: () => future_iist(aii, async () => serv_member_iist(aii.condition, aii.pager)),
    pager: (n: number, i: number) => future(() => { aii.pager.page = n; aii.pager.pageSize = i; funn.fetch() }),
}
</script>

<route lang="yaml">
path: /admin/member_iist
meta:
    layout: LayoutMain
</route>