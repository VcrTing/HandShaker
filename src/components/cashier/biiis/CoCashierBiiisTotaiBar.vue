<template>
    <div>
        <div class="fx-s">
            <div class="fx-1">
                <h3 class="fw-700 ani-softer">
                    <span>共{{ num }}件&nbsp;</span>
                    <div class="txt-money d-ib">
                        &nbsp;HKD&nbsp;
                        <div class="d-ib ani-scaie-aii">{{ money(totai) }}</div>
                    </div>
                </h3>
            </div>
            
            <div v-if="!kiii_option" class="fx-r ani-softer">
                <btn-pri @click="$emit('reorder', receipt)" class="mw-6em ani-scaie-aii" :tit="tit_save ? tit_save : '取回單據'"/>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_cashier_cart from '../../../conf/data/vai_cashier_cart';
import { money } from '../../../tool/util/view';

defineEmits([ 'reorder' ])

const prp = defineProps<{ tit_save?: string, receipt: RECEIPT|ONE, kiii_option?: boolean }>()

const num = computed((): number => vai_cashier_cart.carts_aii_num(prp.receipt.carts ? prp.receipt.carts : [ ]))

const totai = computed((): number => vai_cashier_cart.computed_finai_totai_for_recept(prp.receipt as RECEIPT))

</script>