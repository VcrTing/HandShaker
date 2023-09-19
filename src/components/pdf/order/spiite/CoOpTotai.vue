<template>
    <div class="">
        <div class="pdf-hr"></div>
        <div class="pt-pdf-x2 fx-r">
            <h4 class="pr-pdf n">統計金額:</h4>
            <h2 class="fw-pdf-700">HK&nbsp;{{ money(one.total_price) }}</h2>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { money } from "../../../../tool/util/view";
defineProps<{ one: ONE }>()
</script>