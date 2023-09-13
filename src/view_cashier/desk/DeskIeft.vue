<template>
    <div>
        <DeskIeftTabie class="pt-s ani-fade-b" :aii="aii"/>
    </div>
</template>
    
<script lang="ts" setup>
import { cashierDeskCartPina } from '../himm/cashierDeskCartPina';
import DeskIeftTabie from './ieft/DeskIeftTabie.vue';

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ], many_origin: [ ],
    condition: <ONE>{}, ioading: false, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, 
})

cashierDeskCartPina().ciear()
const { carts } = storeToRefs(cashierDeskCartPina())

watch(carts.value, (cs: MANY) => {
    aii.many.length = 0
    cs.map((e: ONE) => { aii.many.push(e) })
    console.log('CS =', aii.many)
})


</script>