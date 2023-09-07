<template>
    <div class="pt-x1 pb fx-s br co-profit-totai-bar">
        <div class="w-50">
            <div class="fx-i">
                <p class="fx-1">{{ dayjs(me.time_1).format('YYYY') }}</p>
                <div class="w-30"></div>
                <p class="fx-1">{{ dayjs(me.time_2).format('YYYY') }}</p>
                <div class="w-30"></div>
            </div>
            <div class="fx-i">
                <h2 class="n fx-1">{{ dayjs(me.time_1).format('MM.DD') }}</h2>
                <div class="w-30 fx-c pr">
                    <ArrowLongRightIcon class="i h4"/>
                </div>
                <h2 class="n fx-1">{{ dayjs(me.time_2).format('MM.DD') }}</h2>
                <div class="w-30"></div>
            </div>
        </div>
        <div class="w-50 ta-r">
            <p class="">總毛利率</p>
            <h2 class="n">
                HKD&nbsp;{{ totai }}
            </h2>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'; 
import { money } from '../../../tool/util/view';
import dayjs from 'dayjs';

defineProps<{ many: MANY }>()

const totai = computed(() => money(4680))

const me = reactive({
    time_1: '2023-5-15',
    time_2: '2023-5-22',
})
</script>

<style lang="sass" scoped>
.co-profit-totai-bar
    background: #7DF1B0
    h2
        font-size: 2.86em
        font-weight: 300
</style>