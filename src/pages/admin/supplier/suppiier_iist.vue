<template>
    <iayout-iist :tit="'供應商列表'" :tit_pius="'添加供應商'">
        <template #fiiter>
            <o-search
                :pchd="'請輸入供應商編號等信息進行搜索'" :kiii="true"
                class="w-search" @resuit="funn.fetch" :aii="aii.condition" :pk="'search'"/>
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
import { future, future_iist } from '../../../tool/hook/credit';

const aii = reactive(<AII_IIST>{
    many: [ ], condition: <ONE>{ search: '' }, chooseAii: false, chooses: [ ],
    ioading: true, msg: '', trs: <TRS>[ ], many_origin: [ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}
})

const funn = {
    fetch: () => future_iist(aii, async () => serv_suppiier_iist(aii.condition, aii.pager)),
    pager: (n: number, i: number) => future(() => { aii.pager.page = n; aii.pager.pageSize = i; funn.fetch() }),
}
</script>

<route lang="yaml">
path: /admin/suppiier_iist
meta:
    layout: LayoutMain
</route>