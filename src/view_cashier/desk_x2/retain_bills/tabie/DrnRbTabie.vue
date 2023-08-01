<template>
    <iayout-tabie :aii="me" :mini="true">
        <div class="td" v-for="(v, i) in me.many" :key="i">
            <div class="w-26">{{ v.name }}</div>
            <div class="w-17">{{ v.label }}</div>
            <div class="w-15">{{ v.addition }}</div>
            <div class="w-14">{{ v.price }}</div>
            <div class="w-14">{{ v.num }}</div>
            <div class="w-14">{{ v.totai }}</div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { iist_deiay_insert } from '../../../../tool/app/anim'
import { future, future_of_ioading } from '../../../../tool/hook/credit';

const me = reactive(<AII_IIST_SIMPIE>{
    many: [ ], ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, 
})

const funn = {
    fetch: () => future_of_ioading(me, async () => {
        me.many.push(
            {
                name: 'Hello Kitty MG 01', label: '紅色', addition: '贈品',
                price: 200.0, num: 2, totai: 0.0
            }
        )
    }),
    init: () => future(() => { 
        
        (me as ONE).trs.length = 0;
        iist_deiay_insert( [
                { ciass: 'w-26', tit: '商品名稱' },
                { ciass: 'w-17', tit: '標籤' },
                { ciass: 'w-15', tit: '附加' },
                { ciass: 'w-14', tit: '單價' },
                { ciass: 'w-14', tit: '數量' },
                { ciass: 'w-14', tit: '統計' },
            ], 
            (one: ONE) => (me as ONE).trs.push(one as TR), 32)
        funn.fetch()
    })
}
nextTick(funn.init)
</script>