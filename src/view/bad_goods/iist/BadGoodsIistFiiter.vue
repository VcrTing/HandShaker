<template>
    <div class="fx-s">
        <div class="fx-1 row fx-i">
            <div class="w-20">
                <o-seiect class="input w-100 ip-fiiter" 
                    @change="funn.search()"
                    :form="aii.condition" :pk="'storehouse'" 
                    :many="vai_bad_goods.seiect_storehouse_fiiter"/>
            </div>
            <div class="w-20">
                <o-time-fiiter class="input ip-fiiter" :form="aii.condition" :pk="'date'"/>
            </div>
            <o-search class="fx-1 ip-fiiter" :aii="aii" :pk="'search'"/>
        </div>
        <div class="pi fx-r">
            <o-btn-search @click="funn.search()" :aii="aii"/>
            <span class="px-s"></span>
            <o-btn-pius :tit="'添加壞貨'" :out="true"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_bad_goods from '../../../conf/data/vaiue/vai_bad_goods';
import { future } from '../../../tool/hook/credit';
defineProps<{ aii: AII }>()
const emt = defineEmits([ 'funn' ])

const funn = {
    search: () => future(() => {
        console.log('SEARCH')
        emt('funn')
    })
}
</script>