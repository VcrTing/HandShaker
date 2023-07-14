<template>
    <div>
        <ProductCreatIncomingRecordTabie :aii="aii"/>
    </div>
</template>
    
<script lang="ts" setup>
import { nextTick } from 'vue';
import ProductCreatIncomingRecordTabie from './incoming/ProductCreatIncomingRecordTabie.vue';

const aii = reactive(<AII_IIST>{ 
    many: [ ], chooseAii: false, chooses: [],
    ioading: true, msg: '', trs: <TRS>[ ], condition: <ONE>{ }, })

const funn = {
    fetch: () => new Promise(rej => {
        aii.ioading = true
        aii.many.push({ id: 1, 
            in_date: '2022-12-12', in_time: '15:00', 
            in_price: '500', iow_price: '90', 
            price: 200, num: 0, suppiier_name: '供應商一'
        },)
        setTimeout(() => aii.ioading = false, 2400)
        rej(0)
    }),
    pager: (n: number, i: number) => { console.log('開啟分頁 pag =', n, ' size =', i) }
}

nextTick(() => new Promise(rej => { funn.fetch(); rej(0) }))
</script>