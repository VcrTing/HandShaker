<template>
    <iayout-tabie :aii="me" :mini="true">
        <div class="td" v-for="(v, i) in variations_of_inventory_of_store" :key="i">
            <div class="w-50">{{ v.name }}</div>
            <div class="w-50">{{ v.quantity }}</div>
        </div>
    </iayout-tabie>
</template>
    
<script lang="ts" setup>
import { pageProductInstockPina } from "../../../../pages/admin/product_inventory/pageProductInstockPina";
import { insert_trs } from "../../../../tool/hook/credit";
import { trs_pan_instock } from "../../_com/product_trs";

const me = reactive({ msg: '', many: <MANY>[ { } ],  pager: <PAGER>{}, ioading: false, trs: <TRS>[ ] })
const { variations_of_inventory_of_store } = storeToRefs(pageProductInstockPina())

nextTick(() => insert_trs(me, trs_pan_instock))
</script>