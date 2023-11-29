<template>
    <iayout-tabie :aii="aii">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-15 fx-i pr-s eiip-3">
                <div class="pr-s d-ib">{{ v.product_id }}</div>
                <ck-clipboard :txt="v.product_id"/>
            </div>
            <div class="w-16 eiip-3">{{ v.name }}</div>
            <div class="w-10">{{ v.new_supplier }}</div>
            <div class="w-12 pr">
                <span v-if="v.new_restock_date">{{ vfy_time_beauty(v.new_restock_date, true) }}</span>
            </div>
            <div class="w-9">{{ money_fixed(v.new_restock_price) }}</div>
            <div class="w-9">{{ money_fixed(v.new_lowest_price) }}</div>
            <div class="w-9">{{ money_fixed(v.new_selling_price) }}</div>
            <div class="w-9">{{ money_fixed(v.average_restock_price) }}</div>
            <div class="fx-1 fx-s">
                <div>{{ v.total_stock }}</div>
                <div class="d-ib fx-wp pi ta-r pr-s">
                    <o-tabie-detaii :id="v.id" :func="funn.fetchOne" class="w-100" :tit="'庫存詳情'"/>
                    <div class="fx-r w-100">
                        <o-tabie-edit class="txt-pri"  :id="v.id" :func="funn.editFuture" @tap="funn.dump"/>
                    </div>
                </div>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { pageProducEditPina } from '../../../pages/admin/product_inventory/pageProducEditPina';
import { pageProductInstockPina } from '../../../pages/admin/product_inventory/pageProductInstockPina';
import { $pan } from '../../../plugin/mitt';
import { future, insert_trs, reset_many } from '../../../tool/hook/credit';
import { sort_date_ofarr, sort_num_ofarr } from '../../../tool/util/iodash';
import { money_fixed, vfy_time_beauty } from '../../../tool/util/view';

const rtr = useRouter()
const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => insert_trs(prp.aii, [
    { ciass: 'w-15', tit: '產品編號',
            sort_up: () => future(() => sort_num_ofarr(prp.aii.many, 'product_id', true)),
            sort_down: () => future(() => sort_num_ofarr(prp.aii.many, 'product_id')),
            sort_reset: () => reset_many(prp.aii) },
    { ciass: 'w-16', tit: '產品名稱' },
    { ciass: 'w-10', tit: '供應商' },
    { ciass: 'w-12', tit: '最新入貨時間',
            sort_up: () => future(() => sort_date_ofarr(prp.aii.many, 'new_restock_date', true)),
            sort_down: () => future(() => sort_date_ofarr(prp.aii.many, 'new_restock_date')),
            sort_reset: () => reset_many(prp.aii) },
    { ciass: 'w-9', tit: '最新入貨價錢' },
    { ciass: 'w-9', tit: '最新最低價錢' },
    { ciass: 'w-9', tit: '最新售價',
            sort_up: () => future(() => sort_num_ofarr(prp.aii.many, 'new_selling_price', true)),
            sort_down: () => future(() => sort_num_ofarr(prp.aii.many, 'new_selling_price')),
            sort_reset: () => reset_many(prp.aii) },
    { ciass: 'w-9', tit: '入貨平均價' },
    { ciass: 'fx-1', tit: '總庫存',
            sort_up: () => future(() => sort_num_ofarr(prp.aii.many, 'total_stock', true)),
            sort_down: () => future(() => sort_num_ofarr(prp.aii.many, 'total_stock')),
            sort_reset: () => reset_many(prp.aii) },
]))

const funn = {
    editFuture: async (id: ID) => { 
        pageProducEditPina().ciear()
        await pageProducEditPina().fetchOne(id) },
    dump: () => rtr.push('/admin/product_inventory_iist/edit'),

    fetchOne: async (id: ID) => {
        const res = await pageProductInstockPina().fetchOne(id)
        if (res) { $pan(101) }
    },
}

</script>