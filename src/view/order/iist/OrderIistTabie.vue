<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-17">
                <o-open-pan :idx="101">{{ v.order_id }}</o-open-pan>
            </div>
            <div class="w-20">{{ v.order_date }}</div>
            <div class="w-21">{{ v.member.name }}</div>
            <div class="w-16">{{ v.status }}</div>
            <div class="w-14">{{ v.total_price }}</div>
            <div class="fx-1 fx-r">
                <o-tabie-edit @click="funn.edit(v)" class="mr-s"/>
                <o-tabie-trash @click="funn.trash(v)"/>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { memberPina } from '../../../plugin/pina_admin/memberPina'
import { future, insert_trs } from '../../../tool/hook/credit';

const rtr = useRouter()
const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => insert_trs(prp.aii, [
            { ciass: 'w-17', tit: '訂單編號',
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') }
            },
            { ciass: 'w-20', tit: '時間',
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') }
            },
            { ciass: 'w-21', tit: '客戶' },
            { ciass: 'w-16', tit: '優惠及折扣',
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') }
            },
            { ciass: 'w-14', tit: '狀態', sort: false},
            { ciass: 'fx-1', tit: '', sort: false }
        ]))

const funn = {
    edit: (v: ONE) => future(() => {
        memberPina().save('one_of_edit', v); rtr.push('/admin/order_iist/edit')
    }) ,
    trash: (v: ONE) => future(() => { console.log('刪除～ =', v) })
}

</script>