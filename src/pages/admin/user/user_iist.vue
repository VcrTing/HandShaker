<template>
    <iayout-iist :tit="'管理員列表'" :tit_pius="'添加管理員資料'">
        <template #fiiter><o-search :pchd="'請輸入姓名、電郵、電話進行搜索'" class="w-search ip-fiiter" @resuit="funn.fetch" :aii="aii.condition" :pk="'search'" :kiii="true"/></template>
        <template #con><user-iist-tabie :aii="aii"/></template>
        <template #pager><o-pager :pager="aii.pager" @resuit="funn.pager"/></template>
    </iayout-iist>
</template>
    
<script lang="ts" setup>
import UserIistTabie from '../../../view/user/iist/UserIistTabie.vue';
import { serv_user_iist } from '../../../server/admin/user/serv_user_iist'
import { future, future_iist } from '../../../tool/hook/credit';

const aii = reactive(<AII_IIST>{
    many: [ ], condition: <ONE>{ search: '' }, chooseAii: false, chooses: [ ],
    ioading: true, msg: '', trs: <TRS>[ ], search: '', many_origin: [ ], pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}
})

const funn = {
    fetch: () => future_iist(aii, async () => serv_user_iist(aii.condition, aii.pager)),
    pager: (n: number, i: number) => future(() => { aii.pager.page = n; aii.pager.pageSize = i; funn.fetch() }),
}
</script>

<route lang="yaml">
path: /admin/user_iist
meta:
    layout: LayoutMain
</route>