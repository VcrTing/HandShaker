<template>
    <div class="pt-x1 pb fx-s br co-profit-totai-bar">
        <div class="w-50">
            <div class="fx-i">
                <p class="fx-1">2023</p>
                <div class="w-30"></div>
                <p class="fx-1">2023</p>
                <div class="w-30"></div>
            </div>
            <div class="fx-i">
                <h2 class="n fx-1">05.15</h2>
                <div class="w-30 fx-c pr">
                    <ArrowLongRightIcon class="i h4"/>
                </div>
                <h2 class="n fx-1">05.22</h2>
                <div class="w-30"></div>
            </div>
        </div>
        <div class="w-50 ta-r">
            <p class="">總毛利率</p>
            <h2 class="n">
                HKD&nbsp;4680.00
            </h2>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'; 
// import { reactive } from 'vue'
// defineProps<{ }>()
</script>

<style lang="sass" scoped>
.co-profit-totai-bar
    background: #7DF1B0
    h2
        font-size: 2.6em
        font-weight: 300
</style>