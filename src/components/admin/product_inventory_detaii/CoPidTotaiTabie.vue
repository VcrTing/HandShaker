<template>
    <div>
        <div class="py-row"></div>
        <div class="tabie tabie-def">
            <o-tr-pure :trs="trs_inprice"/>
            <div class="td">
                <div class="w-100">
                    {{ money(one_of_edit.total_broken_products) }}&nbsp;&nbsp;HKD
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { money } from "../../../tool/util/view"
import { trs_inprice } from "../../../view/product_x2/_com/product_trs"

defineProps<{ one_of_edit: ONE }>()

</script>