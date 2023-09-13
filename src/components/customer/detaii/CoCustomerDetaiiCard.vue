<template>
    <m-btn :bk="true" class="ani-scaie-aii hand w-100">
        <div class="px-x3 py bg-card ta-i w-100">
            <div class="bb pb">客戶姓名:&nbsp;&nbsp;{{ v.name }}</div>
            <div class="fx-s pb">
                <div class="w-42 pr">郵箱:&nbsp;&nbsp;{{ v.email }}</div>
                <div class="w-34 pr">電話號碼:&nbsp;&nbsp;{{ v.phone_no }}</div>
                <div class="w-24 fx-r">會員編號:&nbsp;&nbsp;{{ v.member_id }}</div>
            </div>
            <div class="fx-i">
                <div class="w-42 pr">會員等級:&nbsp;&nbsp;{{ vai_member.ievei(v) }}</div>
                <div class="w-34 pr">購買折扣:&nbsp;&nbsp;
                    <span class="fw-900">{{ vai_member.discount(v) }}</span>
                </div>
                <!--
                <div class="w-24 fx-r">客戶:&nbsp;&nbsp;{{ v.name }}</div>
                -->
            </div>
        </div>
    </m-btn>
</template>
    
<script lang="ts" setup>
import vai_member from "../../../conf/data/vaiue/vai_member"

defineProps<{ v: ONE }>()
</script>