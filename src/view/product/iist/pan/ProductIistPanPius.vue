<template>
    <Pan :idx="idx ? idx : 100">
        <pan-inner :tit="'添加入貨信息'">
            <div class="py-row"></div>
            <co-product-income-creat-form :form="form" :aii="aii"/>
            <div class="py-row"></div>
            <h5>倉存數量分配</h5>
            <div class="pt-row pb-s"></div>
            <co-product-invent-aiiocat-form :form="form" :aii="aii"/>
            <div class="py-x3">
                <o-btn-save class="w-100" :tit="'添加'"/>
            </div>
        </pan-inner>
    </Pan>
</template>

<script lang="ts" setup>
defineProps<{ idx?: number }>()

const aii = reactive(<AII_CREAT>{ ioading: false, msg: '', can: false, sign: 0 })
const form = reactive({ 
    number: 'ASD 1234', name: 'Hello Kitty MG',
    suppiier_number: '', suppiier_name: '',
    in_date: '2022-12-12', in_time: '15:00', 
    in_price: null, iow_price: null, 
    price: null, stock_price: null, 
    invent: null })
</script>