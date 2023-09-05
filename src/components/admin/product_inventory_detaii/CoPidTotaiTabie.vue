<template>
    <div>
        <div class="py-row"></div>
        <div class="tabie tabie-def">
            <o-tr-pure :trs="trs_inprice"/>
            <div class="td"><div class="w-100">
                {{ one_of_edit.total_broken_products }}</div></div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { trs_inprice } from "../../../view/product_x2/_com/product_trs"

defineProps<{ one_of_edit: ONE }>()

</script>