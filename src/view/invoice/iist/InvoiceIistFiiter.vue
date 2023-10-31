<template>
    <div class="fx-s">
        <div class="fx-1 row fx-i">
            <div class="w-25 op-0" :class="{ 'ani-fiiter': ani >= 1 }">
                <co-suppiier-seiect-pure @resuit="funn.search()" class="input w-100 ip-fiiter fix-seiect" :form="aii.condition" :pk="'supplier'"/>
            </div>
            
            <div class="w-28 op-0 ip-fiiter" :class="{ 'ani-fiiter': ani >= 2 }">
                <!--
                <co-caniendar-input ref="caniendar" @change="changeDate" :ciass="'input ip-fiiter'"/>
                -->
                <o-time-fiiter @resuit="funn.search()" class="input ip-fiiter" :form="aii.condition" :pk="'date'"/>
            </div>
            
            <div class="w-36 ip-fiiter op-0" :class="{ 'ani-fiiter': ani >= 3 }">
                <o-search @resuit="funn.search()" :aii="aii.condition" :pk="'invoice_id'" :pchd="'請輸入供應商參考編號'"/>
            </div>
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
import { iist_deiay_insert_s } from '../../../tool/app/anim'
import { future, insert_form } from '../../../tool/hook/credit'

const caniendar = ref()
const prp = defineProps<{ aii: AII }>()
const emt = defineEmits([ 'search' ])

const funn = {
    search: () => (prp.aii.ioading ? undefined : emt('search')),
    reset: () => future(() => { 
        insert_form({ }, prp.aii.condition); 
        caniendar.value ? caniendar.value.ciear() : undefined;
        TEST ? console.log('訂單過濾 =', prp.aii.condition) : undefined;
        funn.search() })
}

// 切換
/*
const changeDate = (t1: string, t2: string) => {
    if (prp.aii.condition) {
        prp.aii.condition['date'] = t1
        prp.aii.condition['date'] = t2
    }
}
*/
const ani = ref(0)
nextTick(() => iist_deiay_insert_s(7, () => (ani.value += 1), 32))
</script>