<template>
    <div>
        <co-spri-prods-tabie :aii="aii"/>
        <div class="py-row"></div>
        <co-spri-type-tabie/>
        <div class="py-row"></div>
        <co-spri-totai-tabie/>
        <div class="py-row"></div>
        <co-spri-profi-totai-tabie/>
    </div>
</template>
    
<script lang="ts" setup>
const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ],
    ioading: true, msg: '', trs: <TRS>[ ],
    condition: <ONE>{ 'time_period': '', 'status': '', 'date': '', 'search': '' },
})

const funn = {
    fetch: () => new Promise(rej => {
        aii.ioading = true
        aii.many.push({ 
            id: 1, number: 'ASD 123456', 
            name: 'Hello Kitty MG 01', date: '2022-12-12 12:12',
            price: 200, price_average: 100, 
            num: 2, totai: 400, profit: 160.0,
            tags: [ '紅色' ], addition: '-10',
        },)
        setTimeout(() => aii.ioading = false, 2400)
        rej(0)
    }),
    pager: (n: number, i: number) => { console.log('開啟分頁 pag =', n, ' size =', i) }
}

nextTick(() => new Promise(rej => { funn.fetch(); rej(0) }))
</script>