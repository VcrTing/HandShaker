<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-10">{{ v.code }}</div>
            <div class="w-20">{{ v.name }}</div>
            <div class="w-13">{{ v.phoneNo }}</div>
            <div class="w-24">{{ v.email }}</div>
            <div class="w-11">{{ v.chager }}</div>
            <div class="w-13">{{ v.creatAt }}</div>
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
            { ciass: 'w-10', tit: '供應商編號', sort: false },
            { ciass: 'w-20', tit: '供應商名稱', sort: false },
            { ciass: 'w-13', tit: '聯絡電話', sort: false },
            { ciass: 'w-24', tit: '聯絡郵箱', sort: false},
            { ciass: 'w-11', tit: '聯絡人', sort: false},
            { ciass: 'w-13', tit: '建檔日期', sort: true,
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') }},
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