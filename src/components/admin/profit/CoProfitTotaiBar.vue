<template>
    <div class="pt-x1 pb fx-s br co-profit-totai-bar">
        <div class="w-50 fx-i">
            <div class="mw-8em">
                <p class="fx-1" v-html="star_y"></p>
                <h2 class="n fx-1" v-html="star_day"></h2>
            </div>
            <div class="mw-7em">
                <p>&nbsp;</p>
                <div class="fx-c pr"><ArrowLongRightIcon class="i h4"/></div>
            </div>
            <div class="mw-8em">
                <p class="fx-1" v-html="end_y"></p>
                <h2 class="n fx-1" v-html="end_day"></h2>
            </div>
        </div>
        <div class="w-50 ta-r">
            <p class="">總毛利率</p>
            <h2 class="n">HKD&nbsp;{{ totai }}</h2>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'; 
import dayjs from 'dayjs';
import { tonum } from '../../../tool/util/judge';
import { vfy_time } from '../../../tool/util/view';

const prp = defineProps<{ totai: number, condition: ONE }>()

const star_y = computed(() => {
    if (funn.is_empty()) return '(全部年份)';
    return dayjs( funn.is_period() ? funn.period_to_time() : __star() ).format('YYYY')
})
const star_day = computed(() => {
    if (funn.is_empty()) return '*';
    return dayjs( funn.is_period() ? funn.period_to_time() : __star() ).format('MM-DD')
})

const end_y = computed(() => {
    return dayjs( funn.is_period() ? (new Date()) : __end() ).format('YYYY')
})
const end_day = computed(() => {
    return dayjs( funn.is_period() ? (new Date()) : __end() ).format('MM-DD')
})

// const __date = () => prp.condition.date
const __star = () => prp.condition.startDate
const __end = () => prp.condition.endDate ? prp.condition.endDate : new Date()
const __period = () => prp.condition.time_period

const funn = {
    is_date: () => {
        if (__period()) return false;
        return (__star() || __end()) ? true : false
    },
    is_period: () => {
        if (__period()) return true;
        return (__star() || __end()) ? false : true
    },
    period_to_time: (): string => {
        const tp: ID = __period(); const nn: number = tp ? tonum(tp) : 0
        return  vfy_time( nn > 0 ? dayjs().subtract(nn, 'day') : dayjs() )
    },
    is_empty: (res: boolean = true) => { 
        // if (__date()) res = false; 
        if (__star()) res = false;
        if (__period()) res = false; 
        return res; 
    },
}
</script>

<style lang="sass" scoped>
.co-profit-totai-bar
    background: #7DF1B0
    h2
        font-size: 2.86em
        font-weight: 300
</style>