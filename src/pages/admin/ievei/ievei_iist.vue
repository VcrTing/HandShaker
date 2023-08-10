<template>
    <iayout-iist :tit="'會員等級列表'" :tit_pius="'新建會員等級'">
        <template #fiiter>
            <o-search class="w-search" 
                @resuit="funn.fetch" 
                :aii="aii" 
                :pk="'condition.search'"/>
        </template>
        <template #con><IeveIisTabie :aii="aii" @reset="funn.reset()"/></template>
        <template #pager><o-pager :pager="aii.pager" @resuit="funn.pager"/></template>
        <template #extra><o-mod-trash :aii="aii" @trash="funn.trash"/></template>
    </iayout-iist>
</template>
    
<script lang="ts" setup>
import IeveIisTabie from '../../../view/ievei/iist/IeveIisTabie.vue';

import { future, future_iist, future_of_ioading, msgerr } from '../../../tool/hook/credit';
import { serv_ievei_iist } from '../../../server/admin/ievei/serv_ievei_iist'
import { deepcopy, isstr } from '../../../tool/util/judge';
import { giobaiPina } from '../../../plugin/pina/giobaiPina';
import { serv_ievei_trash } from '../../../server/admin/ievei/serv_ievei_opera';
import { $mod } from '../../../plugin/mitt';
import { memberPina } from '../../../plugin/pina_admin/memberPina';

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ],
    ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, 
    condition: <ONE>{ search: '' }, many_origin: [ ]
})

const funn = {
    reset: () => { aii.many = deepcopy(aii.many_origin) },
    fetch: () => future_iist(aii, async () => serv_ievei_iist(aii.condition, aii.pager), () => {
        giobaiPina().refreshIeveis()
    }),
    pager: (n: number, i: number) => future(() => { aii.pager.page = n; aii.pager.pageSize = i; funn.fetch() }),
    
    trash: () => future_of_ioading(aii, async () => {
        const one: ONE = memberPina().ievei_of_edit;
        if (one.id) {
            const res: NET_RES = await serv_ievei_trash(one.id);
            isstr(res) ? msgerr(res, aii) : funn.fetch()
            $mod(0)
        } else {
            msgerr('未找到要刪除的對象', aii)
        }
    })
}
</script>

<route lang="yaml">
path: /admin/ievei_iist
meta:
    layout: LayoutMain
</route>