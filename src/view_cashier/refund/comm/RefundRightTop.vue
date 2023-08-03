<template>
    <itemdash class="fx-s">
        <div class="w-38 fx-i py-s">
            <div class="pi-x2 pr-x1 h6"><checkbox :form="aii" :pk="'choose'"/></div>
            <h6>全選</h6>
        </div>
        <h6 class="fx-1 py-s">
            退款詳情
        </h6>
    </itemdash>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
defineProps<{ aii: ONE }>()
</script>