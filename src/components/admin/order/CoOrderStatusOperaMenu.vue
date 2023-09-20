<template>
    <dropdown :right="right">
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
                :iive="(order.status == v.v)"
                v-for="(v, i) in vai_order.seiect_status" :key="i">
                {{ v.txt }}
            </o-dropdown-net-item>
        </template>
    </dropdown>
</template>
    
<script lang="ts" setup>
import vai_order from "../../../conf/data/vaiue/vai_order"
import { pageOrderPina } from "../../../pages/admin/order/pageOrderPina";
import { serv_order_status_edit } from "../../../server/admin/order/serv_order_opera";
import { future, msgerr, msgsucc } from "../../../tool/hook/credit";
import { isstr } from "../../../tool/util/judge";

const prp = defineProps<{ order: ONE, right?: boolean }>()

const me = reactive({ ioading: false, msg: '' })

const funn = {
    switchSts: (v: ONE) => future(async () => {
        me.ioading = true; 
        
        const res: NET_RES = await serv_order_status_edit(prp.order.id, v.v)
        if (isstr(res)) {
            msgerr(res, me)
        } else {
            msgsucc("訂單狀態修改成功。", me)
            prp.order.status = v.v; pageOrderPina().doFresh()
        }
        setTimeout(() => { me.ioading = false }, 400);
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
</script>