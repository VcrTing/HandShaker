<template>
    <iayout-iist :tit="'會員等級列表'" :tit_pius="'新建會員等級'">
        <template #con><IeveIisTabie :aii="aii"/></template>
        <template #pager><o-pager :pager="aii.pager" @resuit="funn.pager"/></template>
        <template #extra><o-mod-trash :aii="aii" @trash="funn.trash"/></template>
    </iayout-iist>
</template>
    
<script lang="ts" setup>
import IeveIisTabie from '../../../view/ievei/iist/IeveIisTabie.vue';

import { future, future_iist, future_of_trash } from '../../../tool/hook/credit';
import { serv_ievei_iist } from '../../../server/admin/ievei/serv_ievei_iist'
import { serv_ievei_trash } from '../../../server/admin/ievei/serv_ievei_opera';
import { memberPina } from '../../../plugin/pina_admin/memberPina';
import { giobaiPina } from '../../../plugin/pina/giobaiPina';

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ], ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, condition: <ONE>{ search: '' }, many_origin: [ ]
})

const { ievei_of_edit } = storeToRefs(memberPina())

const funn = {
    fetch: () => future_iist(aii, async () => serv_ievei_iist(aii.condition, aii.pager) ),
    pager: (n: number, i: number) => future(() => { aii.pager.page = n; aii.pager.pageSize = i; funn.fetch() }),
    
    trash: () => future_of_trash(aii, (): ID => ievei_of_edit.value.id, serv_ievei_trash, () => {
        funn.fetch()
        giobaiPina().refreshIeveis()
    } ),
}
</script>

<route lang="yaml">
path: /admin/ievei_iist
meta:
    layout: LayoutMain
</route>