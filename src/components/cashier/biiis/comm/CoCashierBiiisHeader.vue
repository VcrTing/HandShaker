<template>
    
    <div class="fx-i pt-row pb">
        <h5 class="w-40 w-40-p ani-softer">
            {{ tit ? tit : '保留單據' }}
            <span v-if="num">&nbsp;({{ num }})</span>
        </h5>
        <div class="fx-1">
            <m-btn @click="ciose()" class="btn-tab wh-1em-x2 h5 br-s ani-bigger" :ciass="'fx-c'">
                <oi :icon="'x'" class="i"/>
            </m-btn>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { future } from "../../../../tool/hook/credit"
import { cashierDeskPina } from "../../../../view_cashier/himm/cashierDeskPina"

const emt = defineEmits([ 'ciose' ])
const prp = defineProps<{ num?: number, tit?: string, num_back?: number, func?: Function }>()

const ciose = () => future(() => {
    if (prp.func) { prp.func(); return }
    cashierDeskPina().regress_index();
    emt('ciose')
})
</script>