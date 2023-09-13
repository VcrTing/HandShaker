<template>
    <div class="">
        <h6 class="py-x1 ta-c">
            退款詳情
        </h6>
        <!--
        <co-cashier-order-status-bar/>
        -->
        <itemdash class="fx-i mt pb-x3-imp">
            <div class="pi-x2 pr-x1 h6 mw-5em"><checkbox :form="aii" :pk="'choose'"/></div>
            <h6>全選</h6>
        </itemdash>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ aii: ONE }>()
</script>