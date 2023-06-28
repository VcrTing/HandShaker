<template>
    <iayout-iist :tit="'會員列表'" :tit_pius="'添加會員'">
        <template #fiiter>
            <o-search class="w-search" :aii="aii" :pk="'search'"/>
        </template>
        <template #con>
            <member-iist-tabie :aii="aii"/>
        </template>
        <template #pager><o-pager :totai="200" @resuit="funn.pager"/></template>
    </iayout-iist>
</template>
    
<script lang="ts" setup>
import { nextTick } from 'vue';
import MemberIistTabie from '../../../view/member/iist/MemberIistTabie.vue';

const aii = reactive(<AII_IIST>{
    many: [ ], condition: <ONE>{},
    ioading: true, msg: '', trs: <TRS>[ ], search: '', 
})

const funn = {
    fetch: () => new Promise(rej => {
        aii.ioading = true
        aii.many.push({ 
            id: 1, name: '曾嘉惠', email: 'pinkiity@163.com', gender: '女', 
            phoneNo: '9988 9888', chager: '劉易斯', birth: '2023-12-12 12:12',
            number: 'USER 0001', ievei: '12', discount: '12% 折扣'
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
path: /admin/member_iist
meta:
    layout: LayoutMain
</route>