<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-9">{{ v.number }}</div>
            <div class="w-13">{{ v.name }}</div>
            <div class="w-9">{{ v.shop }}</div>
            <div class="w-15">{{ v.in_date }}&nbsp;{{ v.in_time }}</div>
            <div class="w-11">{{ v.in_price }}</div>
            <div class="w-11">{{ v.iow_price }}</div>
            <div class="w-9">{{ v.price }}</div>
            <div class="w-10">{{ v.stock_price }}</div>
            <div class="w-6">{{ v.invent }}</div>
            <div class="fx-1 ta-r">
                <p class="hand">庫存詳情</p>
                <div>
                    <o-tabie-edit @click="funn.edit(v)" class="mr-s"/>
                    <o-tabie-trash @click="funn.trash(v)"/>
                </div>
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
            { ciass: 'w-9', tit: '產品編號' },
            { ciass: 'w-13', tit: '產品名稱' },
            { ciass: 'w-9', tit: '供應商' },
            { ciass: 'w-15', tit: '最新入貨時間' },
            { ciass: 'w-11', tit: '最新入貨價錢' },
            { ciass: 'w-11', tit: '最新最低價錢' },
            { ciass: 'w-9', tit: '最新售價' },
            { ciass: 'w-10', tit: '入貨平均價' },
            { ciass: 'w-6', tit: '庫存' },
            { ciass: 'fx-1', tit: '', sort: false }
        ], 
        (one: ONE) => prp.aii.trs.push(one as TR), 32)
        rej(0)
}))

const funn = {
    edit: (v: ONE) => future(() => {
        memberPina().save_member_of_edit(v); rtr.push('/admin/order_iist/edit')
    }) ,
    trash: (v: ONE) => future(() => { console.log('刪除～ =', v) })
}

</script>