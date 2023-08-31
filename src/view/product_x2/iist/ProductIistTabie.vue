<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-9">{{ v.product_id }}</div>
            <div class="w-13">{{ v.name }}</div>
            <div class="w-9">{{ v.new_supplier }}</div>
            <div class="w-15">{{ v.new_restock_date }}</div>
            <div class="w-11">{{ v.new_restock_price }}</div>
            <div class="w-11">{{ v.new_lowest_price }}</div>
            <div class="w-9">{{ v.new_selling_price }}</div>
            <div class="w-10">{{ v.average_restock_price }}</div>
            <div class="w-6">{{ v.total_stock }}</div>
            <div class="fx-1 ta-r">
                <o-tabie-opera :tit="'庫存詳情'"/>
                <div class="fx-r">
                    <o-tabie-edit :id="v.id" :func="funn.editFuture" @tap="funn.dump" class="txt-pri"/>
                    <!--
                    <o-tabie-trash @click="funn.trash(v)"/>
                    -->
                </div>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { nextTick } from 'vue';
import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina';
import { iist_deiay_insert } from '../../../tool/app/anim'
const rtr = useRouter()
const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => new Promise(rej => {
    prp.aii.trs.length = 0;
    iist_deiay_insert(
        [
            { ciass: 'w-9', tit: '產品編號',
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') } },
            { ciass: 'w-13', tit: '產品名稱' },
            { ciass: 'w-9', tit: '供應商' },
            { ciass: 'w-15', tit: '最新入貨時間',
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') } },
            { ciass: 'w-11', tit: '最新入貨價錢',
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') } },
            { ciass: 'w-11', tit: '最新最低價錢',
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') } },
            { ciass: 'w-9', tit: '最新售價',
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') } },
            { ciass: 'w-10', tit: '入貨平均價',
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') } },
            { ciass: 'w-6', tit: '庫存',
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') } },
            { ciass: 'fx-1', tit: ''}
        ], 
        (one: ONE) => prp.aii.trs.push(one as TR), 32)
        rej(0)
}))

const funn = {
    editFuture: async (id: ID) => { await pageProducEditPina().fetchOne(id) },
    dump: () => rtr.push('/admin/product_inventory_iist/edit'),
    // trash: (v: ONE) => future(() => { console.log('刪除～ =', v) })
}

</script>