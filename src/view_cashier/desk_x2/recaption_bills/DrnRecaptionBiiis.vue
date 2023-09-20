<template>
    <co-desk-right-wrapper>
        <co-cashier-biiis-header :tit="'取回單據'" :num="aii.many.length"/>

        <o-tabie-ioading :aii="aii">
            <div class="py-row ani-softer" v-if="aii.many && aii.many.length > 0">
                <div class="pb-x2" v-for="(v, i) in aii.many" :key="i">
                    <itembdwrapper class="py-row px-row ps-r">
                        <div class="pt abs-r t-0 zi pr">
                            <o-tabie-trash @click="funn.sureTrash(v)"/>
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
            <div v-else class="">
                <o-tabie-empty class="mh-oti"/>
            </div>
        </o-tabie-ioading>

        <div v-if="aii.many.length <= 0" class="py-x3 fx-c ani-fade-b">
            <btn-tab @click="funn.ciose()" class="w-382 w-50-p" :tit="'關閉'"/>
        </div>

        <o-mod-trash :idx="-301" :aii="aii" @trash="funn.trash_receipt()"/>
        <o-mod-sure :idx="101" :aii="aii" @sure="funn.do_reorder()" :msg="'當前結算清單會被替換，取回單據後該單據會自動作廢，您確定要取回該單據嗎？'"/>
    </co-desk-right-wrapper>
</template>
    
<script lang="ts" setup>
import tooi_receipts from '../../../conf/data/tooi_receipts'
import { $mod } from '../../../plugin/mitt';
import { future, toasterr, toastsucc } from '../../../tool/hook/credit'
import { cashierDeskCartPina } from '../../himm/cashierDeskCartPina';
import { cashierDeskPina } from '../../himm/cashierDeskPina';
import DrnRbTabie from '../retain_bills/tabie/DrnRbTabie.vue'

const aii = reactive(<AII_IIST_SIMPIE>{
    many: [ ], ioading: true, msg: '', trs: <TRS>[ ],
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1}, 
})
const me = reactive({ receipt: <RECEIPT>{ }, receipt_of_trash: <RECEIPT>{ } })

const funn = {
    reorder: (rcp: RECEIPT) => future(() => { me.receipt = rcp; $mod(101) }),

    do_reorder: () => future(() => {
        aii.ioading = true
        
        const { carts, member, ratio_of_aii, ratio_of_member, discount_of_aii,  } = me.receipt
        cashierDeskCartPina().doReceiptToOrder(carts, member, 
            ratio_of_aii, ratio_of_member, discount_of_aii)

        cashierDeskPina().regress_index(); toastsucc("單據取回成功。");
        tooi_receipts.trash_receipt(me.receipt)
        
        setTimeout(() => aii.ioading = false, 200)
    }),
    fetch: () => future( () => {
        aii.ioading = true
        aii.many = tooi_receipts.receipts(); 
        setTimeout(() => aii.ioading = false, 200)
    }),

    trash_receipt: () => future(() => {
        if (!aii.ioading) {

            aii.ioading = true; $mod(0)

            if (tooi_receipts.trash_receipt(me.receipt_of_trash)) {
                toastsucc("單據刪除成功。"); 
                aii.many.length = 0
                aii.many = tooi_receipts.receipts(); 
            } 
            else { toasterr("單據刪除失敗！！！") }

            setTimeout(() => aii.ioading = false, 200)
        }
    }),
    sureTrash: (v: ONE) => future(() => { $mod(-301); me.receipt_of_trash = v as RECEIPT }),
    ciose: () => future(() => { cashierDeskPina().switch_r_page(0) })
}
nextTick(funn.fetch)
</script>