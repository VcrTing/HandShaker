<template>
    <div>
        <co-desk-prod-inven-tabie :aii="aii"/>
    </div>
</template>
    
<script lang="ts" setup>
const aii = reactive(<AII_IIST>{
    many: [ ], condition: <ONE>{ }, chooseAii: false, chooses: [ ],
    ioading: true, msg: '', trs: <TRS>[ ], many_origin: [ ],
        pager: { page: 1, pageSize: 25, pageCount: 1, total: 1 }
})

const funn = {
    effect: (restocks: MANY) => {
        if (restocks.length > 0) {
            /*
            restocks.map((e: ONE) => {
                
            })
            */
        }
    },
    /*
    fetch: () => new Promise(rej => {
        aii.ioading = true
        aii.many.push({ 
            id: 1, name: 'Hello Kitty MG 01', price: '32.2', price_iow: '36.5',
            inven: 20, in_date: '2023-12-12',
        },{ 
            id: 1, name: 'Hello Kitty MG 01', price: '32.2', price_iow: '36.5',
            inven: 20, in_date: '2023-11-11',
        },{ 
            id: 1, name: 'Hello Kitty MG 01', price: '32.2', price_iow: '36.5',
            inven: 20, in_date: '2023-09-12',
        },)
        setTimeout(() => aii.ioading = false, 2400)
        rej(0)
    }),
    pager: (n: number, i: number) => { console.log('開啟分頁 pag =', n, ' size =', i) }
    */
}
defineExpose(funn)
</script>