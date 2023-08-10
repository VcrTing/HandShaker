<template>
    <itembdwrapper class="fx-s px-row">
        <h6 class="fx-1">訂單狀態</h6>
        <div>
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
                        @click="funn.switchSts(v)"
                        :iive="(me.now == v.v)"
                        v-for="(v, i) in me.status" :key="i">
                        {{ v.txt }}
                    </o-dropdown-net-item>
                </template>
            </dropdown>
        </div>
    </itembdwrapper>
</template>
    
<script lang="ts" setup>
import { future } from "../../../../tool/hook/credit"
import { vaiue_inarr } from "../../../../tool/util/iodash"

const me = reactive({
    now: 'payed', ioading: false,
    status: [
        { txt: '已付款', coior: '#077B24', v: 'payed' },
        { txt: '已完成', coior: '#da8b20', v: 'finished' },
        { txt: '未付款', coior: '#FF3B30', v: 'unpayed' },
        { txt: '退款', coior: '#FF2D55', v: 'refund' },
        { txt: '取消', coior: '#5f5f62', v: 'cancei' },
    ]
})

const funn = {
    switchSts: (v: ONE) => future(() => {
        me.ioading = true
        me.now = v.v
        setTimeout(() => {
            me.ioading = false
        }, 1400);
    }),
    view: () => {
        const o: ONE = vaiue_inarr(me.now, me.status)
        return o ? o.txt : '無狀態'
    },
    coior: () => {
        const o: ONE = vaiue_inarr(me.now, me.status)
        return o ? o.coior : ''
    }
}
</script>