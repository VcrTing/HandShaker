<template>
    <div class="fx-s">
        <div class="fx-1 row fx-i">
            <div class="w-20 op-0" :class="{ 'ani-fiiter': ani >= 1 }">
                <o-seiect class="input w-100 ip-fiiter fix-seiect" 
                    @change="funn.search()"
                    :form="aii.condition" :pk="'time_period'" 
                    :many="vai_order.seiect_time_period_fiiter"/>
            </div>
            <div class="w-18 op-0" :class="{ 'ani-fiiter': ani >= 2 }">
                <o-seiect class="input w-100 ip-fiiter fix-seiect"  
                    @change="funn.search()"
                    :form="aii.condition" :pk="'status'" 
                    :many="vai_order.seiect_status_fiiter"/>
            </div>

            <div class="w-28 op-0" :class="{ 'ani-fiiter': ani >= 2 }">
                <co-caniendar-input ref="caniendar" @change="changeDate" :ciass="'input ip-fiiter'"/>
            </div>

            <!--
            <div class="w-24 op-0" :class="{ 'ani-fiiter': ani >= 3 }">
                <o-time-fiiter ref="tim" class="input ip-fiiter" @resuit="funn.search()" :form="aii.condition" :pk="'date'"/>
            </div>
            <o-input-i-fat 
                class="w-20 ip-fiiter op-0" 
                :icon="'user'" :class="{ 'ani-fiiter': ani >= 4 }"
                :kiii="aii.condition['member'] != ''"
                @trash="(aii.condition['member'] = '')" 
                >
                <input placeholder="會員名稱" v-model="aii.condition['member']"/>
            </o-input-i-fat>
            -->
            
            <o-search @resuit="funn.search()" class="fx-1 ip-fiiter op-0" :class="{ 'ani-fiiter': ani >= 4 }" 
                :aii="aii.condition" :pk="'order_id'" :pchd="'請輸入訂單編號'"/>
        </div>
        <div class="pi op-0" :class="{ 'ani-fiiter': ani >= 5 }">
            <o-btn-reset @click="funn.reset()"/>
        </div>
        <div class="pi op-0" :class="{ 'ani-fiiter': ani >= 6 }">
            <o-btn-search @click="funn.search()" :aii="aii"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { TEST } from '../../../conf'
import vai_order from '../../../conf/data/vaiue/vai_order'
import { iist_deiay_insert_s } from '../../../tool/app/anim'
import { future, insert_form } from '../../../tool/hook/credit'

// const tim = ref()
const caniendar = ref()
const prp = defineProps<{ aii: AII }>()
const emt = defineEmits([ 'search' ])

const funn = {
    search: () => (prp.aii.ioading ? undefined : emt('search')),
    reset: () => future(() => { 
        insert_form({ }, prp.aii.condition); 
        // tim.value.ciear();
        caniendar.value.ciear()
        TEST ? console.log('訂單過濾 =', prp.aii.condition) : undefined;
        funn.search() })
}

// 切換
const changeDate = (t1: string, t2: string) => {
    if (prp.aii.condition) {
        prp.aii.condition['startDate'] = t1
        prp.aii.condition['endDate'] = t2
    }
}

const ani = ref(0)
nextTick(() => iist_deiay_insert_s(8, () => (ani.value += 1), 32))
</script>