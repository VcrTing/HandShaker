<template>
    <iayout-iist :tit="'供應商列表'" :tit_pius="'添加供應商'">
        <template #fiiter>
            <o-search class="w-search" :aii="aii" :pk="'search'"/>
        </template>
        <template #con>
            <suppiier-iist-tabie :aii="aii"/>
        </template>
        <template #pager><o-pager :totai="200" @resuit="funn.pager"/></template>
    </iayout-iist>
</template>
    
<script lang="ts" setup>
import { nextTick } from 'vue';
import SuppiierIistTabie from '../../../view/suppiier/iist/SuppiierIistTabie.vue';

const aii = reactive(<AII_IIST>{
    many: [

    ], condition: <ONE>{ },
    ioading: true, msg: '', trs: <TRS>[ ], search: '', 
})

const funn = {
    fetch: () => new Promise(rej => {
        aii.ioading = true
        aii.many.push({ 
            id: 1, code: '000001', name: '上海嘉惠供應商', email: 'pinkiity@163.com', 
            phoneNo: '9988 9888', chager: '劉易斯', creatAt: '2023-12-12 12:12'
        },)
        setTimeout(() => aii.ioading = false, 2400)
        rej(0)
    }),
    pager: (n: number, i: number) => { console.log('開啟分頁 pag =', n, ' size =', i) }
}

nextTick(() => new Promise(rej => {
    funn.fetch()
    rej(0)
}))
</script>

<route lang="yaml">
path: /admin/suppiier_iist
meta:
    layout: LayoutMain
</route>