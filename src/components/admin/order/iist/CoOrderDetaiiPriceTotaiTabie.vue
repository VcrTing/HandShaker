<template>
    <div>
        <div class="tabie tabie-def">
            <o-tr-pure :trs="[ { tit: '優惠類別', ciass: 'w-100' } ]"/>
            <div class="td">
                <div class="w-24">單品減價</div>
                <div class="w-20">-10.0&nbsp;HKD</div>
                <div class="fx-1"></div>
            </div>
            <div class="td">
                <div class="w-24">全單減價</div>
                <div class="w-20">-90.0&nbsp;HKD</div>
                <div class="fx-1"></div>
            </div>
        </div>
        <div class="py-row"></div>
        
        <div class="tabie tabie-def">
            <o-tr-pure :trs="[ { tit: '統計金額', ciass: 'w-100' } ]"/>
            <div class="td">
                <div class="w-24">HKD 1500.0</div>
                <div class="fx-1"></div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
// defineProps<{ }>()
</script>