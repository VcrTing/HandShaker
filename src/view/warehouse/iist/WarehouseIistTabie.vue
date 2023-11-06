<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-18">{{ v.name }}</div>
            <div class="w-13">{{ v.contact_person }}</div>
            <div class="w-15">{{ v.phone_no }}</div>
            <div class="w-18">{{ v.facebook }}</div>
            <div class="w-26">{{ v.address }}</div>
            <div class="fx-1 fx-r">
                <o-tabie-edit @click="funn.edit(v)" class="txt-pri"/>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { future, insert_trs } from '../../../tool/hook/credit';
import { warehousePina } from '../../../plugin/pina_admin/warehousePina';

const rtr = useRouter()
const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => insert_trs(prp.aii, [
            { ciass: 'w-18', tit: '倉庫名稱', sort: false },
            { ciass: 'w-13', tit: '倉庫聯絡人', sort: false },
            { ciass: 'w-15', tit: '倉庫聯絡人電話', sort: false },
            { ciass: 'w-18', tit: '關注 / FOLLOW', sort: false },
            { ciass: 'w-26', tit: '倉庫地址', sort: false },
            { ciass: 'fx-1', tit: '', sort: false },
        ]))

const funn = {
    edit: (v: ONE) => future(() => { warehousePina().save('one_of_edit', v); 
        rtr.push('/admin/warehouse_iist/edit') }),
}
</script>