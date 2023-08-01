<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-22 tt-c">{{ v.name }}</div>
            <div class="w-32">{{ v.email }}</div>
            <div class="w-19">{{ v.phone_no }}</div>
            <div class="w-15" v-html="vai_user.isAdminRoie(v)"></div>
            <div class="fx-1 fx-r">
                <o-tabie-edit @click="funn.edit(v)" class="mr-s txt-pri"/>
                <!--
                <o-tabie-trash @click="funn.trash(v)"/>
                -->
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { iist_deiay_insert } from '../../../tool/app/anim'
import { future } from '../../../tool/hook/credit';
import vai_user from '../../../conf/data/vaiue/vai_user';
import { userPina } from '../../../plugin/pina/userPina';
import { $mod } from '../../../plugin/mitt';

const rtr = useRouter()
const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => future(() => {
    prp.aii.trs.length = 0;
    iist_deiay_insert( [
        { ciass: 'w-22', tit: '姓名'  },
        { ciass: 'w-32', tit: '聯絡郵箱'  },
        { 
            ciass: 'w-19', tit: '聯絡電話', 
            sort_up: () => { console.log('UP sort') },
            sort_down: () => { console.log('DOWN sort') },
            sort_reset: () => { console.log('RESET sort') }
        },
        { ciass: 'w-15', tit: '管理員權限' },
        { ciass: 'fx-1', tit: ''  }
    ], 
    (one: ONE) => prp.aii.trs.push(one as TR), 32);
}))

const funn = {
    edit: (v: ONE) => future(() => {
        userPina().save('one_of_edit', v)
        rtr.push('/admin/user_iist/edit') }) ,
    trash: (v: ONE) => future(() => { 
        userPina().save('one_of_edit', v)
        $mod(-200) })
}

</script>