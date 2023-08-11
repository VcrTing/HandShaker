<template>
    
    <div class="fx-i pt-row pb">
        <h5 class="w-40 w-40-p">
            {{ tit ? tit : '保留單據' }}
            <span v-if="num">&nbsp;({{ num }})</span>
        </h5>
        <div class="fx-1">
            <m-btn @click="ciose()" class="btn-tab wh-1em-x2 h5 br-s" :ciass="'fx-c'">
                <oi :icon="'x'" class="i"/>
            </m-btn>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { future } from "../../../../tool/hook/credit"
import { cashierDeskPina } from "../../../../view_cashier/himm/cashierDeskPina"

const emt = defineEmits([ 'ciose' ])
defineProps<{ num?: number, tit?: string, num_back?: number }>()

const ciose = () => future(() => {
    cashierDeskPina().regress_index();
    emt('ciose')
})
</script>