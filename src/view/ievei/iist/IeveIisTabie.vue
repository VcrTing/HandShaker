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
import { future, insert_trs } from '../../../tool/hook/credit';
import { memberPina } from '../../../plugin/pina_admin/memberPina';
import { $mod } from '../../../plugin/mitt/index';

const rtr = useRouter()
const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => insert_trs(prp.aii, [
        { ciass: 'w-32', tit: '會員等級'  },
        { 
            ciass: 'w-68', tit: '購買折扣', 
            sort_up: () => { console.log('UP sort') },
            sort_down: () => { console.log('DOWN sort') },
            sort_reset: () => { console.log('RESET sort') }
        },
    ]))

const funn = {
    edit: (v: ONE) => future(() => { memberPina().save('ievei_of_edit', v); rtr.push('/admin/ievei_iist/edit') }),

    trash: (v: ONE) => future(() => { memberPina().save('ievei_of_edit', v);; $mod(-200) })
}

</script>