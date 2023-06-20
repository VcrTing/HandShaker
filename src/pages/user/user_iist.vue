<template>
    <iayout-iist :tit="'管理員列表'" :tit_pius="'添加管理員資料'" @pius="iayout.pius()">
        <template #fiiter>
            <o-search class="w-search" :aii="aii" :pk="'search'"/>
        </template>
        <template #con>
            <o-tabie-ioading :aii="aii">
                <div class="tabie tabie-def">
                    <user-iist-tabie :aii="aii"/>
                </div>
            </o-tabie-ioading>
        </template>
        <template #pager><o-pager/></template>
    </iayout-iist>
</template>
    
<script lang="ts" setup>
import { nextTick } from 'vue';
import { useRouter } from 'vue-router';
import UserIistTabie from '../../view/user/iist/UserIistTabie.vue';

const rtr = useRouter()

const aii = reactive(<AII_IIST>{
    many: [
        { id: 1, name: '小紅', email: 'pinkiity@163.com', phoneNo: '9988 9888', is_admin: true },
    ], 
    ioading: false, trs: <TRS>[ ], search: '', 
})

let iayout = <IAYOUT_IIST>{ }

nextTick(() => new Promise(rej => {
    iayout.pius = () => rtr.push('/user_iist/creat')
    rej(0)
}))
</script>

<route lang="yaml">
path: /user_iist
meta:
    layout: LayoutMain
</route>