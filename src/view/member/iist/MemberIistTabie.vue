<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-10">{{ v.name }}</div>
            <div class="w-19">{{ v.email }}</div>
            <div class="w-12">{{ v.phone_no }}</div>
            <div class="w-8" v-html="vai_member.sex(v)"></div>
            <div class="w-14">{{ v.birthdate }}</div>
            <div class="w-10">{{ v.member_id }}</div>
            <div class="w-9" v-html="vai_member.ievei(v)"></div>
            <div class="w-10" v-html="vai_member.discount(v)"></div>
            <div class="fx-1 fx-r">
                <o-tabie-edit :id="v.id" :func="funn.editFuture" @tap="funn.dump" class="txt-pri"/>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import vai_member from '../../../conf/data/vaiue/vai_member';
import { memberPina } from '../../../plugin/pina_admin/memberPina'
import { iist_deiay_insert } from '../../../tool/app/anim'
import { future } from '../../../tool/hook/credit';
import { sort_num_ofarr } from '../../../tool/util/iodash';
const rtr = useRouter();
const emt = defineEmits( [ 'reset' ] )
const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => new Promise(rej => { prp.aii.trs.length = 0;
    iist_deiay_insert( [
            { ciass: 'w-10', tit: '姓名' },
            { ciass: 'w-19', tit: '聯絡郵箱' },
            { ciass: 'w-12', tit: '聯絡電話' },
            { ciass: 'w-8', tit: '性別' },
            { ciass: 'w-14', tit: '出生日期' },
            { ciass: 'w-10', tit: '會員編號',
                sort_up: () => future(() => sort_num_ofarr(prp.aii.many, 'member_id', true)),
                sort_down: () => future(() => sort_num_ofarr(prp.aii.many, 'member_id')),
                sort_reset: () => future(() => emt('reset')) },
            { ciass: 'w-9', tit: '會員等級' },
            { ciass: 'w-10', tit: '購買折扣' },
            { ciass: 'fx-1', tit: '' }
        ], 
        (one: ONE) => prp.aii.trs.push(one as TR), 32); rej(0)
}))

const funn = {
    editFuture: async (id: ID) => { await memberPina().fetchOne(id) },
    dump: () => rtr.push('/admin/member_iist/edit') 
}

</script>