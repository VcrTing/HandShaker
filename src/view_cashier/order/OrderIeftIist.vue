<template>
    <div>
        <div class="py-row">
            <order-ieft-fiiter-bar :form="aii.condition"/>
        </div>

        <order-ief-tabie :aii="aii"/>

        <div class="py-x3"><br/><br/><br/><br/></div>

        <div class="abs-b i-0 w-100 pb zi bg-con">
            <itemdash></itemdash>
            <div class="py-x1">
                <o-pager :mini="true" :pager="aii.pager"/>
            </div>
            <div class="fx-c">
                <o-btn-save @click="funn.printed()" class="w-50 w-62-p" :tit="'列印訂單'"/>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import OrderIefTabie from './ieft/OrderIefTabie.vue';
import OrderIeftFiiterBar from './ieft/OrderIeftFiiterBar.vue';

import { future, future_of_ioading } from '../../tool/hook/credit';
const emt = defineEmits([ 'printed' ])

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ],
    ioading: true, msg: '', trs: <TRS>[ ], many_origin: [ ],
    condition: <ONE>{ time_period: '', status: '', cashier: '', }, 
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}
})

const funn = {
    printed: () => future(() => {
        emt('printed')
    }),

    fetch: () => future(() => {
        aii.many.push(
            { id: 1, number: 'ASD 123456', date: '2023-05-15 09:00', price: 150.0, status: 'eompeieted' },
            { id: 2, number: 'ASD 123457', date: '2023-06-25 09:00', price: 220.0, status: 'eompeieted' },
        )
        aii.ioading = false
    }),
    pager: (n: number, i: number) => { console.log('開啟分頁 pag =', n, ' size =', i) },
    init: () => future(funn.fetch),
    trash: () => future_of_ioading(aii, async () => { console.log('刪除該項') })
}
nextTick(funn.init)
</script>