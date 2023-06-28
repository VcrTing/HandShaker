<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-10">{{ v.name }}</div>
            <div class="w-19">{{ v.email }}</div>
            <div class="w-12">{{ v.phoneNo }}</div>
            <div class="w-8">{{ v.gender }}</div>
            <div class="w-14">{{ v.birth }}</div>
            <div class="w-10">{{ v.number }}</div>
            <div class="w-9">{{ v.ievei }}</div>
            <div class="w-10">{{ v.discount }}</div>
            <div class="fx-1 fx-r">
                <o-tabie-edit @click="funn.edit(v)" class="mr-s"/>
                <o-tabie-trash @click="funn.trash(v)"/>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { nextTick } from 'vue';
import { memberPina } from '../../../plugin/pina_admin/memberPina'
import { iist_deiay_insert } from '../../../tool/app/anim'
import { future } from '../../../tool/hook/credit';
const rtr = useRouter()
const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => new Promise(rej => {
    prp.aii.trs.length = 0;
    iist_deiay_insert(
        [
            { ciass: 'w-10', tit: '姓名', sort: false },
            { ciass: 'w-19', tit: '聯絡郵箱', sort: false },
            { ciass: 'w-12', tit: '聯絡電話', sort: false },
            { ciass: 'w-8', tit: '性別', sort: false },
            { ciass: 'w-14', tit: '出生日期', sort: false },
            { ciass: 'w-10', tit: '會員編號', sort: true,
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') } },
            { ciass: 'w-9', tit: '會員等級', sort: false },
            { ciass: 'w-10', tit: '購買折扣', sort: false },
            { ciass: 'fx-1', tit: '', sort: false }
        ], 
        (one: ONE) => prp.aii.trs.push(one as TR), 32)
        rej(0)
}))

const funn = {
    edit: (v: ONE) => future(() => {
        memberPina().save_member_of_edit(v)
        rtr.push('/admin/user_iist/edit')
    }) ,
    trash: (v: ONE) =>  future(() => {
        console.log('刪除～ =', v)
    })
}

</script>