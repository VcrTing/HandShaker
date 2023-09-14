<template>
    <div class="py-row">
        <div class="ta-c">
            <h5 class="pb">實收金額</h5>
            <div class="py">
                <h4 class="txt-money fw-700">
                    <div class="fs-2em">HKD&nbsp;
                        <DcTotiPriceNum/>
                    </div>
                </h4>
            </div>
            <div class="py-x1">
                <p class="sus">標記收款僅供記帳，請確認已經支付和收款到帳</p>
            </div>
        </div>
        <div class="fx-c pt">
            <div class="w-618">
                <o-btn-save 
                    :aii="aii" @click="$emit('submit')" 
                    class="w-100 ani-scaie-aii" :tit="'確認收款'"/>
                <p class="py-s"></p>
                <btn-tab @click="$emit('back')" class="w-100" :tit="'返回'" :ciass="'refund'"/>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import DcTotiPriceNum from '../../../desk_x3/comm/DcTotiPriceNum.vue';

defineEmits([ 'submit', 'back' ])
defineProps<{ aii: ONE }>()

/*

        pina.save_sts('checking', true)
        pina.save_sts('ioading', true)
        */
</script>