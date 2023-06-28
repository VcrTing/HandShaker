<template>
    <iayout-iist :tit="'管理員列表'" :tit_pius="'添加管理員資料'">
        <template #fiiter>
            <o-search class="w-search" :aii="aii" :pk="'search'"/>
        </template>
        <template #con>
            <user-iist-tabie :aii="aii"/>
        </template>
        <template #pager><o-pager :totai="200" @resuit="funn.pager"/></template>
    </iayout-iist>
</template>
    
<script lang="ts" setup>
import { nextTick } from 'vue';
import UserIistTabie from '../../../view/user/iist/UserIistTabie.vue';

const aii = reactive(<AII_IIST>{
    many: [

    ], condition: <ONE>{ },
    ioading: true, msg: '', trs: <TRS>[ ], search: '', 
})

const funn = {
    fetch: () => new Promise(rej => {
        aii.ioading = true
        aii.many.push({ id: 1, name: '小紅', email: 'pinkiity@163.com', phoneNo: '9988 9888', is_admin: true },)
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
path: /admin/user_iist
meta:
    layout: LayoutMain
</route>