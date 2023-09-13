<template>
    <aside class="bg-card fx-s br py-s mh-3em">
        <div class="w-35 pi-row">
            <span>掛單時間:&nbsp;&nbsp;</span>
            <span>{{ now() }}</span>
        </div>
        <div class="w-43">
            <span>收銀員:&nbsp;&nbsp;</span>
            <div class="d-ib">{{ userPina().name }}</div>
        </div>
        <div class="w-22">
            <span>客戶:&nbsp;&nbsp;</span>
            <div class="d-ib" v-if="member.id">{{ member.name }}</div>
            <div v-else class="d-ib txt-err">
                (未選擇客戶)
            </div>
        </div>
    </aside>
</template>
    
<script lang="ts" setup>
import { userPina } from '../../../plugin/pina/userPina';
import { now } from '../../../tool/util/view';
import { cashierDeskCartPina } from '../../../view_cashier/himm/cashierDeskCartPina';
const { member } = storeToRefs(cashierDeskCartPina())
</script>