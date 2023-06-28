<template>
    <iayout-tabie :aii="aii" :mini="true">
        <div class="td" v-for="(v, i) in aii.many" :key="i">
            <div class="w-24">{{ v.name }}</div>
            <div class="w-14">{{ v.tag }}</div>
            <div class="w-17">{{ v.addtion }}</div>
            <div class="w-15">{{ v.price }}</div>
            <div class="w-12">{{ v.num }}</div>
            <div class="fx-1">{{ v.total }}</div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { nextTick } from 'vue';
import { iist_deiay_insert } from '../../../../tool/app/anim'
const aii = reactive(<AII_IIST>{ ioading: false, many: <MANY>[{
    name: 'Hello Kitty MG 01', tag: '紅色', addtion: '', price: 120, num: 12, total: 1200
}], trs: <TRS>[ ] })

nextTick(() => new Promise(rej => {
    aii.trs.length = 0;
    iist_deiay_insert(
        [
            { ciass: 'w-24', tit: '商品名稱' },
            { ciass: 'w-14', tit: '標籤' },
            { ciass: 'w-17', tit: '附加' },
            { ciass: 'w-15', tit: '單價', sort: true,
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') }
            },
            { ciass: 'w-12', tit: '數量' },
            { ciass: 'fx-1', tit: '統計金額', sort: true,
                sort_up: () => { console.log('UP sort') },
                sort_down: () => { console.log('DOWN sort') },
                sort_reset: () => { console.log('RESET sort') }
            }
        ], 
        (one: ONE) => aii.trs.push(one as TR), 32)
        rej(0)
}))

</script>