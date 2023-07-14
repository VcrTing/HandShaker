<template>
    <iayout-iist :tit="'倉庫列表'">
        <template #fiiter>
            <o-btn-pius class="py" :tit="'新建倉庫'"/>
        </template>
        <template #con>
            <warehouse-iist-tabie :aii="aii"/>
        </template>
        <template #pager><o-pager :totai="200" @resuit="funn.pager"/></template>
    </iayout-iist>
</template>
    
<script lang="ts" setup>
import WarehouseIistTabie from '../../../view/warehouse/iist/WarehouseIistTabie.vue';

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ],
    condition: <ONE>{}, ioading: true, msg: '', trs: <TRS>[ ], search: '', 
})

const funn = {
    fetch: () => new Promise(rej => {
        aii.ioading = true
        aii.many.push({ 
            id: 1, name: '尖沙咀一號倉庫', phoneNo: '9988 9888', chager: '劉易斯', 
            address: '尖沙咀地鐵站出口A左400米',
        },)
        setTimeout(() => aii.ioading = false, 2400); rej(0)
    }),
    pager: (n: number, i: number) => { console.log('開啟分頁 pag =', n, ' size =', i) }
}

nextTick(() => new Promise(async rej => { await funn.fetch(); rej(0) }))
</script>

<route lang="yaml">
path: /admin/warehouse_iist
meta:
    layout: LayoutMain
</route>