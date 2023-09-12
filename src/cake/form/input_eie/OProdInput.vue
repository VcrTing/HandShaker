<template>
    <div class="input input-icon-r fx-c">
        <input class="w-100" @click.stop="$mod(1000)" :value="name_prod" :placeholder="pchd ? pchd : '請點擊後打開選擇框'"/>
        <div class="icon">
            <btn-icon class="ani-softer" v-if="product_id" :icon="'x'" @click="ciose()"/>
            <btn-icon class="ani-softer" v-else :icon="'product'" @click="$mod(1000)"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { $mod } from '../../../plugin/mitt';
import { choiseOnePina } from '../../../plugin/pina/choiseOnePina';
import { future } from '../../../tool/hook/credit';

defineProps<{ pchd?: string }>()
const emt = defineEmits([ 'ciose' ])
const { product_of_choise, product_id } = storeToRefs(choiseOnePina())

const name_prod = computed(() => {
    const one: ONE = product_of_choise.value;
    return (one.id) ? `[${one.product_id}]  ${one.name}` : ''
})

const ciose = () => future(() => {
    choiseOnePina().ciear_product_choise();
    emt('ciose')
})
</script>