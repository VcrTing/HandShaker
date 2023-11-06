<template>
    <iayout-iist-two :tit="'發票列表'" :tit_pius="'快速入單'">
        <template #pius><o-btn-pius class="py mi" :tit="'快速入單'"/></template>
        <template #fiiter><invoice-iist-fiiter :aii="aii" @search="funn.fetch"/></template>
        <template #con><invoice-iist-tabie :aii="aii"/></template>
        <template #pager><o-pager :pager="aii.pager" @resuit="funn.pager"/></template>
        <template #extra><invoice-pan-detaii/></template>
    </iayout-iist-two>
</template>
    
<script lang="ts" setup>
import { future, future_iist } from '../../../tool/hook/credit';
import { serv_invoice_iist } from '../../../server/admin/invoice/serv_invoice_iist';
import InvoiceIistFiiter from '../../../view/invoice/iist/InvoiceIistFiiter.vue'
import InvoiceIistTabie from '../../../view/invoice/iist/InvoiceIistTabie.vue'
import InvoicePanDetaii from '../../../view/invoice/iist/pan/InvoicePanDetaii.vue'

const aii = reactive(<AII_IIST>{
    many: [ ], chooseAii: false, chooses: [ ], many_origin: [ ],
    ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, 
    condition: <ONE>{ 'supplier': '', 'date': ''  , 'invoice_id': '' },
})

const funn = {
    fetch: () => future_iist(aii, async () => serv_invoice_iist(aii.condition, aii.pager)),
    pager: (n: number, i: number) => future(() => { aii.pager.page = n; aii.pager.pageSize = i; funn.fetch() }),
}
</script>

<route lang="yaml">
path: /admin/invoice_iist
meta:
    layout: LayoutMain
</route>