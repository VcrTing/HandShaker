<template>
    <div>
        <DeskIeftTabie class="pt-s" :aii="aii"/>
    </div>
</template>
    
<script lang="ts" setup>
import DeskIeftTabie from './ieft/DeskIeftTabie.vue';

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ], many_origin: [ ],
    condition: <ONE>{}, ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, 
})

const funn = {
    fetch: () => new Promise(rej => {
        aii.ioading = true
        aii.many.push({ 
            id: 1, name: 'Hallo Kitty 01', 
            price: 220, num: 2, add: '卡片', tags: [ '粉紅色' ]
        },)
        setTimeout(() => aii.ioading = false, 2400)
        rej(0)
    }),
    pager: (n: number, i: number) => { console.log('開啟分頁 pag =', n, ' size =', i) }
}

nextTick(() => new Promise(rej => {
    funn.fetch()
    rej(0)
}))
</script>