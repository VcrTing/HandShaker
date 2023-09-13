<template>
    <iayout-tabie :aii="aii" :pure="true">
        <div class="py-s br ani-scaie-aii" v-for="(v, i) in aii.many" :key="i">
            <m-btn :bk="true" class="w-100 ta-i br fx-aii-tab" @click="funn.chiose(v)">
                <itembdwrapper :class="{ 'bg-con-x2': v.__choise }">
                    <div class="td tit-son">
                        <div class="fx-1 px fx-i">
                            <div class="mw-2em">
                                {{ i + 1 }} &nbsp;&nbsp;
                            </div>
                            <div>
                                <p>{{ v.__product.name }}</p>
                                <p class="sus fs-s">{{ v.__variation.name }}</p>
                            </div>
                        </div>
                        <div class="w-15 fs-n">-{{ v.discount_deduction }}</div>
                        <div class="w-19 fs-n fw-300">{{ v.__product.new_selling_price }}*{{ v.quantity }}</div>
                        <div class="w-18 fs-n fx-r pr fw-800">{{ funn.vai_totai(v) }}</div>
                    </div>
                </itembdwrapper>
            </m-btn>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { money } from '../../../tool/util/view'
import { future, insert_trs } from '../../../tool/hook/credit'
import { cashierDeskCartPina } from '../../himm/cashierDeskCartPina'

const prp = defineProps<{ aii: AII_IIST }>()

const funn = {
    vai_totai: (v: ONE) => money( cashierDeskCartPina().comput_totai(v) ),
    chiose: (v: ONE) => future(() => {
        prp.aii.many.map((e: ONE) => { e.__choise = false })
        v.__choise = true
        console.log('選擇的變動 =', prp.aii.many)
    })
}

// 數據

nextTick(() => insert_trs(prp.aii, 
[
    { ciass: 'fx-1 h6', tit: '序號/商品名稱'},
    { ciass: 'w-15 h6', tit: '附加'},
    { ciass: 'w-19 h6', tit: '單價*數量'},
    { ciass: 'w-18 h6 fx-r pr-0', tit: '統計金額' },
]))
</script>