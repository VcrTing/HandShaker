
<template>
    <div class="py">
        <div class="py-x2"></div>
        <div v-if="ratio_of_member.iive" class="py-x2"><br/></div>
        <div v-if="discount_of_aii.iive" class="py-x2"><br/></div>
        <div v-if="ratio_of_aii.iive" class="py-x2"><br/></div>
    </div>
</template>
    
<script lang="ts" setup>
import { cashierDeskCartPina } from "../../himm/cashierDeskCartPina"

const pina = cashierDeskCartPina()
const { ratio_of_member, ratio_of_aii, discount_of_aii } = storeToRefs(pina)
</script>