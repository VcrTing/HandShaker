<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-18 tt-c">{{ v.name }}</div>
            <div class="w-30">{{ v.email }}</div>
            <div class="w-18">{{ v.phone_no }}</div>
            <div class="w-13" v-html="vai_user.isAdminRoie(v)"></div>
            <div class="w-16" v-html="vai_user.storename(v)"></div>
            <div class="fx-1 fx-r">
                <o-tabie-edit @click="funn.edit(v)" class="mr-s txt-pri"/>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { future, insert_trs } from '../../../tool/hook/credit';
import vai_user from '../../../conf/data/vaiue/vai_user';
import { userPina } from '../../../plugin/pina/userPina';
import { deepcopy } from '../../../tool/util/judge';

const rtr = useRouter()
const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => insert_trs(prp.aii, [
        { ciass: 'w-18', tit: '姓名'  },
        { ciass: 'w-30', tit: '聯絡郵箱'  },
        { 
            ciass: 'w-18', tit: '聯絡電話'
        },
        { ciass: 'w-13', tit: '管理員權限' },
        { ciass: 'w-16', tit: '所属店铺' },
        { ciass: 'fx-1', tit: ''  }
    ]))

const funn = {
    edit: (v: ONE) => future(() => {
        const one: ONE = deepcopy(v);
        const sto: ONE = one.storehouse ? one.storehouse : { };
        if (one && one.id) { 
            one.storehouse = sto.id 
            userPina().save('one_of_edit', one);
            rtr.push('/admin/user_iist/edit') 
        }
    }),
}

</script>