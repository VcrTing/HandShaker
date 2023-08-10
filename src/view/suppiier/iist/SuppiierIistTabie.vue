<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-10">{{ v.supplier_id }}</div>
            <div class="w-20">{{ v.name }}</div>
            <div class="w-13">{{ v.phone_no }}</div>
            <div class="w-24">{{ v.email }}</div>
            <div class="w-11">{{ v.contact_person }}</div>
            <div class="w-13">{{ v.create_date }}</div>
            <div class="fx-1 fx-r">
                <o-tabie-edit :id="v.id" :func="funn.editFuture" @tap="funn.dump" class="txt-pri"/>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { suppiierPina } from '../../../plugin/pina_admin/suppiierPina';
import { insert_trs } from '../../../tool/hook/credit';

const rtr = useRouter()
const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => insert_trs(prp.aii, [
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
        ]))

const funn = {
    editFuture: async (id: ID) => { await suppiierPina().fetchOne(id) },
    dump: () => rtr.push('/admin/suppiier_iist/edit') 
}

</script>