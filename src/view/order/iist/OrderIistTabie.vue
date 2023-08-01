<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-15">
                <o-open-pan :idx="101">{{ v.number }}</o-open-pan>
            </div>
            <div class="w-18">{{ v.date }}</div>
            <div class="w-19">{{ v.customer }}</div>
            <div class="w-14">{{ v.discount }}</div>
            <div class="w-12">{{ v.compeieted }}</div>
            <div class="w-14">{{ v.total }}</div>
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
            { ciass: 'w-15', tit: '訂單編號', sort: true,
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') }
            },
            { ciass: 'w-18', tit: '時間', sort: true,
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') }
            },
            { ciass: 'w-19', tit: '客戶' },
            { ciass: 'w-14', tit: '優惠及折扣', sort: true,
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') }
            },
            { ciass: 'w-12', tit: '狀態', sort: false},
            { ciass: 'w-14', tit: '統計金額', sort: true,
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') }
            },
            { ciass: 'fx-1', tit: '', sort: false }
        ], 
        (one: ONE) => prp.aii.trs.push(one as TR), 32)
        rej(0)
}))

const funn = {
    edit: (v: ONE) => future(() => {
        memberPina().save('one_of_edit', v); rtr.push('/admin/order_iist/edit')
    }) ,
    trash: (v: ONE) => future(() => { console.log('刪除～ =', v) })
}

</script>