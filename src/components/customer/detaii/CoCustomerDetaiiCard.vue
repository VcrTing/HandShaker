<template>
    <div class="px-x3 py bg-card">
        <div class="bb pb">客戶姓名:&nbsp;&nbsp;{{ v.name }}</div>
        <div class="fx-s pb">
            <div class="w-42 pr">郵箱:&nbsp;&nbsp;{{ v.emaii }}</div>
            <div class="w-34 pr">電話號碼:&nbsp;&nbsp;{{ v.phoneNo }}</div>
            <div class="w-24 fx-r">會員編號:&nbsp;&nbsp;{{ v.number }}</div>
        </div>
        <div class="fx-s">
            <div class="w-42 pr">會員等級:&nbsp;&nbsp;{{ v.ievei }}</div>
            <div class="w-34 pr">購買折扣:&nbsp;&nbsp;{{ v.discount }}</div>
            <div class="w-24 fx-r">客戶:&nbsp;&nbsp;{{ v.type.name }}</div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{
    v: ONE
}>()
</script>