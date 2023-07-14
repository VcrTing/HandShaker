<template>
    <div class="pb">
        <div class="pt pb px-s">
            <div v-for="(v, i) in pina.discounts" :key="i">
                <msgiine :end="'撤銷'" class="fs-s">
                    {{ v.name }}:&nbsp;&nbsp;{{ money(v.price) }}
                </msgiine>
            </div>
        </div>
        <itemdash>
            <div class="fx-s fw-600 fx-b">
                <div class="">
                    <span class="sut">優惠</span>:&nbsp;&nbsp;HKD&nbsp;{{ money(pina.price_discount) }}
                </div>
                <div>
                    <span>統計金額:&nbsp;&nbsp;</span>
                    <div class="d-ib txt-err h5">HKD&nbsp;{{ money(pina.totai) }}</div>
                </div>
            </div>
        </itemdash>
        <div class="pt">
            <o-btn-save class="w-100" :tit="'結算'"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
// defineProps<{ }>()

import { money } from "../../tool/util/view";
import { cashierDeskPina } from "./himm/cashierDeskPina";

const pina = cashierDeskPina()
</script>