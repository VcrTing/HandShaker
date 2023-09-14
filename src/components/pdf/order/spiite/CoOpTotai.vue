<template>
    <div class="">
        <div class="pdf-hr"></div>
        <div class="pt-pdf-x2 fx-r">
            <h5 class="pr-pdf n">統計金額:</h5>
            <h3>HK&nbsp;{{ money(one.total_price) }}</h3>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'

import { money } from "../../../../tool/util/view";

defineProps<{ one: ONE }>()
</script>