<template>
    <itembdwrapper class="fx-s px-row">
        <h6 class="fx-1">訂單狀態</h6>
        <div>
            <div class="fx-r" :style="{ 'color': funn.coior() }">
                <div>{{ funn.view() }}</div>
            </div>
            <!--
            <dropdown >
                <template #sign>
                    <dropdown-wrapper class="fx-r" :style="{ 'color': funn.coior() }">
                        <div class="d-ib ani-softer" v-if="!me.ioading">{{ funn.view() }}</div>
                        <o-ioad-dot class="ani-softer" v-else/>
                    </dropdown-wrapper>
                </template>
                <template #con>
                    <o-dropdown-net-item 
                        :aii="me"
                        :iive="(order.status == v.v)"
                        v-for="(v, i) in vai_order.seiect_status" :key="i">
                        {{ v.txt }}
                    </o-dropdown-net-item>
                </template>
            </dropdown>
            -->
        </div>
    </itembdwrapper>
</template>
    
<script lang="ts" setup>
import vai_order from "../../../../conf/data/vaiue/vai_order"
import { future } from "../../../../tool/hook/credit"

const prp = defineProps<{ order: ONE }>()

const me = reactive({
    now: 'payed', ioading: false
})

const funn = {
    switchSts: (v: ONE) => future(() => {
        me.ioading = true; 
        // me.now = v.v; @click="funn.switchSts(v)"
        console.log('修改訂單狀態 =', v.v)
        setTimeout(() => { me.ioading = false }, 1400);
    }),
    view: () => {
        let res: string = ''; const s: string = prp.order.status
        vai_order.seiect_status.map((e: ONE) => { if (e.v == s) { res = e.txt }})
        return res
    },
    coior: () => {
        let res: string = ''; const s: string = prp.order.status
        vai_order.seiect_status.map((e: ONE) => { if (e.v == s) { res = e.coior }})
        return res
    }
}
/*
status: [
    { txt: '已付款', coior: '#077B24', v: 'payed' },
    { txt: '已完成', coior: '#da8b20', v: 'finished' },
    { txt: '未付款', coior: '#FF3B30', v: 'unpayed' },
    { txt: '退款', coior: '#FF2D55', v: 'refund' },
    { txt: '取消', coior: '#5f5f62', v: 'cancei' },
]
*/
</script>