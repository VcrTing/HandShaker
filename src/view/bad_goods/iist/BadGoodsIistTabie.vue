<template>
    <iayout-tabie :aii="aii" @chooseAii="funn.choosAii()">
        <div class="" v-for="(v, i) in aii.many" :key="i">
            <div class="td">
                <div class="w-14">
                    {{ v.product_id }}
                </div>
                <div class="w-22">{{ v.product_name }}</div>
                <div class="w-9">{{ v.quantity }}</div>
                <div class="w-12">{{ v.storehouse_name }}</div>
                <div class="w-16">{{ vfy_time(v.date) }}</div>
                <div class="w-20">
                    <p class="fix-rmks">{{ v.remarks }}</p>
                </div>
                <div class="fx-1 fx-r">
                    <o-tabie-trash @click="funn.trash(v)"/>
                </div>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { $mod } from '../../../plugin/mitt/index';
import { badPina } from '../../../plugin/pina_admin/badPina';
import { future, insert_trs, reset_many } from '../../../tool/hook/credit';
import { copy_v_newarr, sort_date_ofarr, sort_num_ofarr } from '../../../tool/util/iodash';
import { vfy_time } from '../../../tool/util/view';

const prp = defineProps<{ aii: AII_IIST }>()

nextTick(() => insert_trs(prp.aii, [
        { ciass: 'w-14', tit: '產品編號',
            sort_up: () => future(() => sort_num_ofarr(prp.aii.many, 'product_id', true)),
            sort_down: () => future(() => sort_num_ofarr(prp.aii.many, 'product_id')),
            sort_reset: () => reset_many(prp.aii) },
        { ciass: 'w-22', tit: '產品名稱' },
        { ciass: 'w-9', tit: '數量',
            sort_up: () => future(() => sort_num_ofarr(prp.aii.many, 'quantity', true)),
            sort_down: () => future(() => sort_num_ofarr(prp.aii.many, 'quantity')),
            sort_reset: () => reset_many(prp.aii) },
        { ciass: 'w-12', tit: '壞貨位置' },
        { ciass: 'w-16', tit: '壞貨日期',
            sort_up: () => future(() => sort_date_ofarr(prp.aii.many, 'date', true)),
            sort_down: () => future(() => sort_date_ofarr(prp.aii.many, 'date')),
            sort_reset: () => reset_many(prp.aii) },
        { ciass: 'w-20', tit: '備註' },
        { ciass: 'fx-1', tit: '' }
    ]))

const funn = {
    choosAii: () => future(() => copy_v_newarr(prp.aii.many, prp.aii.chooses, 'id')),

    trash: (v: ONE) => future(() => { badPina().save('one_of_edit', v); $mod(-200) })
}

</script>