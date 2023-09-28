<template>
    <iayout-tabie :aii="aii" :mini="true">
        <div class="td" v-for="(v, i) in one_of_edit.storehouse_info" :key="i">
            <div class="w-20">{{ v.storehouse_name }}</div>
            <div class="w-20">{{ vai_product.comput_store_quantity(v) }}</div>
            <div class="fx-1 fx-s">
                <div class="d-ib pr">{{ v.storehouse_address }}</div>

                <div v-if="!kiii_option" class="fx-r">
                    <o-tabie-opera @click="$emit('view', v)" :tit="'庫存詳情'"/>
                    <o-tabie-opera class="pi-s" @click="$emit('transtock', v)" :tit="'調貨'"/>
                </div>
                <div v-else>
                    
                </div>
            </div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { trs_house } from "../../../view/product_x2/_com/product_trs"
import { insert_trs } from "../../../tool/hook/credit"
import vai_product from "../../../conf/data/vaiue/vai_product"

defineEmits([ 'view', 'transtock' ])

const prp = defineProps<{ aii: AII_IIST | AII_IIST_SIMPIE, one_of_edit: ONE, kiii_option?: boolean }>()

nextTick(() => insert_trs(prp.aii, trs_house))

</script>