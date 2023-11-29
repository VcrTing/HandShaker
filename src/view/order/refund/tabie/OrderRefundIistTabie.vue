<template>
    <iayout-tabie :aii="aii" :mini="true" :pure="true">
        <div v-for="(v, i) in aii.many" :key="i" class="py-s">
            <itembdwrapper 
                class="ani-scaie-hv py-0" 
                :class="{ 'bg-con-x2': v.__can_refunded_quantity <= 0 }"
                >
                <div class="w-100 ta-i">
                    <div class="td fs-s">
                        <div class="w-28 fx-i fs pi-x2">
                            <div class="mw-2em pr">
                                <o-check-one v-if="v.__can_refunded_quantity > 0"
                                    :chooses="aii.chooses" :id="v.id" :totai="aii.many.length" 
                                    @choosAii="(n: boolean) => (aii.chooseAii = n)"
                                    />
                            </div>
                            <!-- <div class="mw-2em pr">{{ i + 1 }}</div> -->
                            <div class="fx-1">{{ vai_order.order_product(v).name }}</div>
                        </div>
                        <div class="w-11">{{ vai_order.order_product_variation(v).name }}</div>
                        <div class="w-8">{{ v.selling_price }}</div>

                        <div class="w-10">{{ v.__discount_rate }}</div>
                        <div class="w-9">-&nbsp;{{ v.discount_deduction }}</div>
                        <div class="w-10 pr">{{ money(v.total_price) }}</div>

                        <div class="w-11 pi">
                            {{ v.__can_refunded_quantity }}
                            <!--
                                w-20
                            <o-number-mnager-smaii 
                                :ciass_num="'fw-900'" 
                                :form="v" :pk="'refunded_quantity'" 
                                :deno="v.__can_refunded_quantity"
                                :max="v.__can_refunded_quantity" />
                            -->
                        </div>
                        <div class="w-13">
                            <o-inpu-td class="w-100">
                                <input class="txt-money fw-900 ta-c" v-model="v.refunded_price" type="number" placeholder="請輸入"/>
                            </o-inpu-td>
                        </div>
                    </div>
                </div>
            </itembdwrapper>
        </div>
        <div class="py-x3"></div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import vai_order from '../../../../conf/data/vaiue/vai_order';
import { pageOrderPina } from '../../../../pages/admin/order/pageOrderPina';
import { insert_trs } from '../../../../tool/hook/credit';
import { money } from '../../../../tool/util/view';
const prp = defineProps<{ aii: AII_IIST }>()
const pina = pageOrderPina()

watch(prp.aii.chooses, (ids: IDS) => {
    pina.ciear_product_refund()

    if (ids.length > 0) {
        prp.aii.many.map((e: ONE) => { 
            ids.map((_id: ID) => { if (e.id == _id) pina.pius_product_refund(e) })
        })
    }
})

nextTick(() => insert_trs(prp.aii, [
    { ciass: 'w-28 h6', tit: '商品名稱' },
    { ciass: 'w-11 h6', tit: '樣式' },
    { ciass: 'w-8 h6', tit: '單價' },
    { ciass: 'w-10 h6', tit: '折扣%' },
    { ciass: 'w-9 h6', tit: '減價' },
    { ciass: 'w-10 h6', tit: '總金額' },

    { ciass: 'w-11 h6', tit: '退款數量' },
    { ciass: 'w-13 h6 fx-c', tit: '退款金額' },
]))
</script>