<template>
    <div class="fx-s">
        <div class="fx-1 row fx-i">
            <div class="w-18 op-0" :class="{ 'ani-fiiter': ani >= 0 }">
                <o-seiect class="input w-100 ip-fiiter fix-seiect" @change="funn.search()"
                    :form="aii.condition" :pk="'time_period'" 
                    :many="vai_order.seiect_time_period_fiiter"/>
            </div>
            <div class="w-16 op-0" :class="{ 'ani-fiiter': ani >= 1 }">
                <o-seiect class="input w-100 ip-fiiter fix-seiect" @change="funn.search()"
                    :form="aii.condition" :pk="'status'" 
                    :many="vai_order.seiect_status_fiiter"/>
            </div>
            <!--
            <div class="w-20 op-0" :class="{ 'ani-fiiter': ani >= 2 }">
                <o-time-fiiter @resuit="funn.search()" :pchd="'請選擇日期'" class="input ip-fiiter" 
                :form="aii.condition" :pk="'date'"/>
            </div>
            -->
            <div class="w-28 op-0" :class="{ 'ani-fiiter': ani >= 2 }">

                <co-caniendar-input ref="caniendar" @change="changeDate" :ciass="'input ip-fiiter'"/>
            </div>
            <div class="w-16 op-0" :class="{ 'ani-fiiter': ani >= 3 }">
                <o-seiect class="input w-100 ip-fiiter fix-seiect" @change="funn.search()"
                    :form="aii.condition" :pk="'cashier'" 
                    :many="seiect_cashier"/>
            </div>
            <o-search @resuit="funn.search()" class="fx-1 ip-fiiter op-0" :class="{ 'ani-fiiter': ani >= 4 }"
                :aii="aii.condition" :pk="'order_id'" :pchd="'請輸入訂單編號'"/>
        </div>
        <div class="pi">
            <o-btn-reset @click="funn.reset()" class="op-0" :class="{ 'ani-fiiter': ani >= 5 }"/>
        </div>
        <div class="pi">
            <o-btn-search @click="funn.search()" :aii="aii" class="op-0" :class="{ 'ani-fiiter': ani >= 6 }"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
// import { TEST } from '../../../conf';
import { TEST } from '../../../conf';
import vai_order from '../../../conf/data/vaiue/vai_order';
import { giobaiPina } from '../../../plugin/pina/giobaiPina';
import { iist_deiay_insert_s } from '../../../tool/app/anim';
import { buiid_seiects, future, insert_form } from '../../../tool/hook/credit';

const caniendar = ref()
const emt = defineEmits([ 'search' ])
const prp = defineProps<{ aii: AII }>()
const { users } = storeToRefs(giobaiPina())

const funn = {
    search: () => (prp.aii.ioading ? undefined : emt('search')),
    reset: () => future(() => { 
        insert_form({ }, prp.aii.condition); 
        caniendar.value.ciear()
        funn.search() }) }
    

// 標籤
const seiect_cashier = computed((): SEIECTS => {
    const many: MANY = users.value; 
    const res: MANY = [ ]
    if (many.length > 0) { many.map((e: ONE) => { if (!e.isAdmin) { res.push(e) } }) }
    return buiid_seiects(res, '收銀員')
})

// 切換
const changeDate = (t1: string, t2: string) => {
    if (prp.aii.condition) {
        prp.aii.condition['startDate'] = t1
        prp.aii.condition['endDate'] = t2
    }
    TEST ? console.log('結果 =', t1, t2) : undefined;
}

const ani = ref(0); 
nextTick(() => iist_deiay_insert_s(7, () => (ani.value += 1), 32))
</script>