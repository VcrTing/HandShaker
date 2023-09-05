<template>
    <Pan :idx="110" :big="true">
        <pan-inner :tit="'庫存詳情'">

            <h5 class="py-x2">{{ inventory_of_store.storehouse_name }}</h5>
            <pepi-tabie />
        </pan-inner>
    </Pan>
</template>
    
<script lang="ts" setup>
import PepiTabie from './_tabie/PepiTabie.vue'
import { pageProductInstockPina } from '../../../pages/admin/product_inventory/pageProductInstockPina'

const { inventory_of_store } = storeToRefs(pageProductInstockPina())
</script>