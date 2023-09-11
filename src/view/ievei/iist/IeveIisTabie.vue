<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-32 tt-c">{{ v.name }}</div>
            <div class="w-56">{{ v.discount }}&nbsp;&nbsp;折扣</div>
            <div class="w-12 fx-r">
                <o-tabie-edit @click="funn.edit(v)" class="mr-s txt-pri"/>
                <o-tabie-trash @click="funn.trash(v)"/>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { future, insert_trs, reset_many } from '../../../tool/hook/credit';
import { memberPina } from '../../../plugin/pina_admin/memberPina';
import { $mod } from '../../../plugin/mitt/index';
import { sort_num_ofarr } from '../../../tool/util/iodash';

const rtr = useRouter(); 
const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => insert_trs(prp.aii, [
    { ciass: 'w-32', tit: '會員等級'  },
    { ciass: 'w-68', tit: '購買折扣', 
        sort_up: () => future(() => sort_num_ofarr(prp.aii.many, 'discount', true)),
        sort_down: () => future(() => sort_num_ofarr(prp.aii.many, 'discount')),
        sort_reset: () => reset_many(prp.aii),
    },
]))

const funn = {
    edit: (v: ONE) => future(() => { memberPina().save('ievei_of_edit', v); rtr.push('/admin/ievei_iist/edit') }),
    trash: (v: ONE) => future(() => { memberPina().save('ievei_of_edit', v);; $mod(-200) })
}
</script>