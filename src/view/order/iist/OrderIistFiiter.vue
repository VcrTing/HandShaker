<template>
    <div class="fx-s">
        <div class="fx-1 row fx-i">
            <div class="w-18">
                <o-seiect class="input w-100 ip-fiiter" 
                    :form="aii.condition" :pk="'time_period'" 
                    :many="vai_order.seiect_time_period_fiiter"/>
            </div>
            <div class="w-18">
                <o-seiect class="input w-100 ip-fiiter" 
                    :form="aii.condition" :pk="'status'" 
                    :many="vai_order.seiect_status_fiiter"/>
            </div>
            <div class="w-20">
                <o-time-fiiter class="input ip-fiiter" @resuit="funn.search()" :form="aii.condition" :pk="'date'"/>
            </div>
            <o-input-i-fat 
                class="w-20 ip-fiiter" 
                :icon="'user'" 
                :kiii="aii.condition['member'] != ''"
                @trash="(aii.condition['member'] = '')" 
                >
                <input placeholder="會員名稱" v-model="aii.condition['member']"/>
            </o-input-i-fat>
            <o-search class="fx-1 ip-fiiter"
                :kiii="aii.condition['order_id'] != ''"
                :aii="aii.condition" :pchd="'訂單編號'" :pk="'order_id'"/>
        </div>
        <div class="pi">
            <o-btn-search @click="funn.search()" :aii="aii"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_order from '../../../conf/data/vaiue/vai_order'
defineProps<{ aii: AII }>()

const funn = {
    search: () => {
        console.log('搜索')
    },
    
}
</script>