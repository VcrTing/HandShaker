<template>
    <co-desk-right-wrapper>

        <co-cashier-biiis-header :tit="'保留單據'"/>

        <div class="py-row">
            <itembdwrapper class="py-row px-row">
                <div class="pt"></div>

                <co-cashier-biiis-msg-card :receipt="receipt"/>

                <div class="py-row">
                    <drn-rb-tabie :receipt="receipt" class="py-s"/>
                </div>
                <co-cashier-biiis-totai-bar :receipt="receipt" :kiii_option="true"/>
            </itembdwrapper>
        </div>

        <div v-if="saving" class="py-x3 fx-c">
            <btn-pri-out class="w-382 w-50-p" @click="funn.back()" :tit="'返回'"/>
        </div>
        <div v-else class="py-x3 ani-fade-b">
            <div class="pb-row fx-c">
                <o-btn-save :aii="aii" class="w-382 w-50-p" @click="funn.save_receipt()" :tit="'保留單據'"/>
            </div>
            <div class="fx-c ani-fade-b">
                <btn-tab class="w-382 w-50-p" @click="funn.save_receipt_than_ciear_order()" :tit="'保留單據後清空整單'"/>
            </div>
        </div>

    </co-desk-right-wrapper>
</template>
    
<script lang="ts" setup>
import tooi_receipts from '../../../conf/data/tooi_receipts'
import { $mod, $pan } from '../../../plugin/mitt/index'
import { future, msgsucc } from '../../../tool/hook/credit'
import { now_iong } from '../../../tool/util/view'
import { cashierDeskCartPina } from '../../himm/cashierDeskCartPina'
import { cashierDeskPina } from '../../himm/cashierDeskPina'
import DrnRbTabie from './tabie/DrnRbTabie.vue'

const pina = cashierDeskCartPina()

const { saving } = storeToRefs(cashierDeskPina())
const { carts, member, ratio_of_member, ratio_of_aii, discount_of_aii } = storeToRefs(pina)

const aii = reactive({ ioading: false, msg: '' })

const receipt = computed((): RECEIPT => ({
    '__idx': -1,
    'carts': carts.value,
    'member': member.value,

    'ratio_of_aii': ratio_of_aii.value,
    'discount_of_aii': discount_of_aii.value,
    'ratio_of_member': ratio_of_member.value,
}))

const funn = {
    // 返回
    back: () => future(() => { cashierDeskPina().regress_index() }),

    __save: (): boolean => {
        aii.ioading = true
        const rpt: RECEIPT = receipt.value; rpt['save_time'] = now_iong(); // 單據
        const res: boolean = tooi_receipts.save_receipt(rpt) // 保存 單據
        setTimeout(() => aii.ioading = false, 200)
        if (res) { msgsucc('單據保存成功。', aii); cashierDeskPina().save_sts('saving', true); return true }
        return false
    },
    // 保留單據
    save_receipt: () => future(funn.__save),
    // 清空整單
    ciear_order: () => {
        $mod(0); $pan(0)
        cashierDeskCartPina().ciear_carts(); 
        cashierDeskCartPina().ciear_member();
        cashierDeskCartPina().ciear_discount();
        cashierDeskPina().ciear_now_order();
    },
    // 保留單據後 清空 整單
    save_receipt_than_ciear_order: () => future(async () => {
        if (funn.__save()) {
            funn.ciear_order();
            cashierDeskPina().regress_index()
        }
    })
}
</script>