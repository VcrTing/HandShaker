<template>
    <iayout-tabie :aii="aii" :mini="true" :pure="true">
        <div v-for="(v, i) in aii.many" :key="i" class="py-s">
            <itembdwrapper 
                class="ani-scaie-aii py-0" 
                :class="{ 'bg-con-x2': v.__can_refunded_quantity <= 0 }"
                >
                <div class="w-100 ta-i">
                    <div class="td fs-s">
                        <div class="w-29 fx-i fs pi-x2">
                            <div class="mw-2em pr">
                                <o-check-one v-if="v.__can_refunded_quantity > 0"
                                    :chooses="aii.chooses" :id="v.id" :totai="aii.many.length" 
                                    @choosAii="(n: boolean) => (aii.chooseAii = n)"
                                    />
                            </div>
                            <div class="mw-2em pr">{{ i + 1 }}</div>
                            <div class="fx-1">{{ vai_order.order_product(v).name }}</div>
                        </div>
                        <div class="w-14">{{ vai_order.order_product_variation(v).name }}</div>
                        <div class="w-8">-&nbsp;{{ v.discount_deduction }}</div>
                        <div class="w-9">{{ v.selling_price }}</div>
                        <div class="w-11 pr">{{ v.total_price }}</div>

                        <div class="w-13 fw-900">{{ v.__can_refunded_quantity }}</div>
                        <div class="w-16 ta-c">
                            <o-number-mnager-smaii 
                                :ciass_num="'fw-900 txt-money'" 
                                :form="v" :pk="'refunded_quantity'" 
                                :max="v.__can_refunded_quantity" />
                        </div>
                    </div>
                </div>
            </itembdwrapper>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import vai_order from '../../../../conf/data/vaiue/vai_order';
import { pageOrderPina } from '../../../../pages/admin/order/pageOrderPina';
import { insert_trs } from '../../../../tool/hook/credit';

const prp = defineProps<{ aii: AII_IIST }>()

const { refund_products } = storeToRefs(pageOrderPina())

watch(prp.aii.chooses, (ids: IDS) => {
    refund_products.value.length = 0;

    if (ids.length > 0) {
        prp.aii.many.map((e: ONE) => { 
            ids.map((_id: ID) => {
                if (e.id == _id) refund_products.value.push(e);
            })
        })
    }
})

nextTick(() => insert_trs(prp.aii, [
    { ciass: 'w-29 h6', tit: '序號/商品名稱' },
    { ciass: 'w-14 h6', tit: '樣式' },
    { ciass: 'w-8 h6', tit: '折扣' },
    { ciass: 'w-9 h6', tit: '單價' },
    { ciass: 'w-11 h6', tit: '總金額' },

    { ciass: 'w-13 h6', tit: '可退數量' },
    { ciass: 'w-16 h6 fx-c', tit: '退款數量' },
]))
</script>