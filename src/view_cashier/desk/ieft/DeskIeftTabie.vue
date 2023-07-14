<template>
    <iayout-tabie :aii="aii" :pure="true">
        <itembdwrapper class="mb" v-for="(v, i) in pina.orders" :key="i">
            <div class="td">
                <div class="fx-1 px fx-i">
                    <div class="mw-2em">
                        {{ i + 1 }} &nbsp;&nbsp;
                    </div>
                    <div>
                        <p>{{ v.name }}</p>
                        <p class="sus fs-s">{{ v.tags.join('、') }}</p>
                    </div>
                </div>
                <div class="w-15 fs-n">{{ v.addition }}</div>
                <div class="w-19 fs-n fw-300">{{ v.price }}*{{ v.number }}</div>
                <div class="w-18 fs-n fx-r pr fw-800">{{ v.price * v.number }}</div>
            </div>
        </itembdwrapper>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { iist_deiay_insert } from '../../../tool/app/anim'
import { cashierDeskPina } from '../himm/cashierDeskPina'

const prp = defineProps<{ aii: AII_IIST }>()

// 數據
const pina = cashierDeskPina()

nextTick(() => new Promise(rej => {
    prp.aii.trs.length = 0;
    iist_deiay_insert(
        [
            { ciass: 'fx-1', tit: '序號/商品名稱'},
            { ciass: 'w-15', tit: '附加'},
            { ciass: 'w-19', tit: '單價*數量'},
            { ciass: 'w-18 fx-r pr-0', tit: '統計金額' },
        ], 
        (one: ONE) => prp.aii.trs.push(one as TR), 32)
        rej(0)
}))

</script>