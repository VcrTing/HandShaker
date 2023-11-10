<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-13">{{ v.supplier_id }}</div>
            <div class="w-20">{{ v.name }}</div>
            <div class="w-13">{{ v.phone_no }}</div>
            <div class="w-24">{{ v.email }}</div>
            <div class="w-11">{{ v.contact_person }}</div>
            <div class="w-13">{{ vfy_time(v.create_date) }}</div>
            <div class="fx-1 fx-r">
                <o-tabie-edit :id="v.id" :func="funn.editFuture" @tap="funn.dump" class="txt-pri"/>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { suppiierPina } from '../../../plugin/pina_admin/suppiierPina';
import { future, insert_trs, reset_many } from '../../../tool/hook/credit';
import { sort_num_ofarr, sort_date_ofarr } from '../../../tool/util/iodash';
import { vfy_time } from '../../../tool/util/view';

const rtr = useRouter()
const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => insert_trs(prp.aii, [
            { ciass: 'w-13', tit: '供應商編號',
                sort_up: () => future(() => sort_num_ofarr(prp.aii.many, 'supplier_id', true)),
                sort_down: () => future(() => sort_num_ofarr(prp.aii.many, 'supplier_id')),
                sort_reset: () => reset_many(prp.aii) },
            { ciass: 'w-20', tit: '供應商名稱'},
            { ciass: 'w-13', tit: '聯絡電話'},
            { ciass: 'w-24', tit: '聯絡郵箱'},
            { ciass: 'w-11', tit: '聯絡人'},
            { ciass: 'w-13', tit: '建檔日期',
                sort_up: () => future(() => sort_date_ofarr(prp.aii.many, 'create_date')),
                sort_down: () => future(() => sort_date_ofarr(prp.aii.many, 'create_date')),
                sort_reset: () => reset_many(prp.aii) },
            { ciass: 'fx-1', tit: ''}
        ]))

const funn = {
    editFuture: async (id: ID) => { await suppiierPina().fetchOne(id) },
    dump: () => rtr.push('/admin/suppiier_iist/edit') 
}

</script>