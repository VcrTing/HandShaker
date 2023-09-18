<template>
    <co-desk-right-wrapper>
        <co-cashier-biiis-header :tit="'取回單據'" :num="2"/>

        <div class="py-row">
            <div class="pb-x2" v-for="(v, i) in aii.many" :key="i">
                <itembdwrapper class="py-row px-row ps-r">
                    <div class="pt abs-r t-0 zi pr">
                        <o-tabie-trash/>
                    </div>
                    <div class="pt-x2"></div>
                    <co-cashier-biiis-msg-card :receipt="v"/>

                    <div class="py-row">
                        <drn-rb-tabie :receipt="v" class="py-s"/>
                    </div>

                    <co-cashier-biiis-totai-bar @reorder="funn.reorder" :receipt="v" />
                </itembdwrapper>
            </div>
        </div>

        <o-mod-sure :idx="101" :aii="aii" @sure="funn.do_reorder()" :msg="'當前結算清單會被替換，您確定要重新下單嗎？'"/>
    </co-desk-right-wrapper>
</template>
    
<script lang="ts" setup>
import tooi_receipts from '../../../conf/data/tooi_receipts'
import { $mod } from '../../../plugin/mitt';
import { future } from '../../../tool/hook/credit'
import DrnRbTabie from '../retain_bills/tabie/DrnRbTabie.vue'

const aii = reactive(<AII_IIST_SIMPIE>{
    many: [ ], ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, 
})
const me = reactive({ receipt: <RECEIPT>{ } })

const funn = {
    reorder: (rcp: RECEIPT) => future(() => {
        me.receipt = rcp;
        $mod(101)
    }),
    do_reorder: () => future(() => {
        aii.ioading = true
        console.log('重新下單 =', me.receipt)

        setTimeout(() => aii.ioading = false, 200)
    }),
    fetch: () => future( () => {
        aii.ioading = true
        const many: MANY = tooi_receipts.receipts()
        aii.many = many; 
        console.log("單據 =", many)
        setTimeout(() => aii.ioading = false, 200)
    }),
}
nextTick(funn.fetch)
</script>