<template>
    <div>
        <ProductCreatIncomingNewestTabie :aii="aii"/>
    </div>
</template>
    
<script lang="ts" setup>
import { nextTick } from 'vue';
import ProductCreatIncomingNewestTabie from './incoming/ProductCreatIncomingNewestTabie.vue';

const aii = reactive(<AII_IIST>{ many: [ ], ioading: true, msg: '', trs: <TRS>[ ], condition: <ONE>{ }, })

const funn = {
    fetch: () => new Promise(rej => {
        aii.ioading = true
        aii.many.push({ id: 1,
            in_date: '2022-12-12', in_time: '15:00', 
            in_price: '500', iow_price: '90', 
            price: 200, stock_price: 120, 
            invent: 30, broken: 10
        },)
        setTimeout(() => aii.ioading = false, 2400)
        rej(0)
    }),
    pager: (n: number, i: number) => { console.log('開啟分頁 pag =', n, ' size =', i) }
}

nextTick(() => new Promise(rej => { funn.fetch(); rej(0) }))
</script>