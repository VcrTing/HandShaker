<template>
    <co-desk-right-wrapper>
        <co-cashier-biiis-header :tit="'取回單據'" :num="2"/>

        <div class="py-row">
            <drn-rb-card class="mb">
                <!--
                <drn-rb-tabie class="py-s" :aii="aii"/>
                -->
            </drn-rb-card>
        </div>
    </co-desk-right-wrapper>
</template>
    
<script lang="ts" setup>
import { future_of_ioading } from '../../../tool/hook/credit'
// import DrnRbTabie from '../retain_bills/tabie/DrnRbTabie.vue'
import DrnRbCard from './card/DrnRbCard.vue';

const aii = reactive(<AII_IIST_SIMPIE>{
    many: [ ], ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, 
})

const funn = {
    fetch: () => future_of_ioading(aii, async () => {
        aii.many.push(
            {
                name: 'Hello Kitty MG 01', label: '紅色', addition: '贈品',
                price: 200.0, num: 2, totai: 0.0
            }
        )
    }),
}
nextTick(funn.fetch)
</script>