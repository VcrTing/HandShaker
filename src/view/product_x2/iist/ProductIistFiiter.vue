<template>
    <div class="fx-s">
        <div class="fx-1 row fx-i">
            <div class="w-20 op-0" :class="{ 'ani-fiiter': ani >= 0 }">
                <o-seiect class="input w-100 ip-fiiter" 
                    :form="aii.condition" :pk="'label'" 
                    :many="vai_product.seiect_tag_fiiter"/>
            </div>
            <div class="w-20 op-0" :class="{ 'ani-fiiter': ani >= 1 }">
                <o-seiect class="input w-100 ip-fiiter" 
                    :form="aii.condition" :pk="'supplier'" 
                    :many="vai_product.seiect_supplier_fiiter"/>
            </div>
            <div class="w-21 w-28-p op-0" :class="{ 'ani-fiiter': ani >= 2 }">
                <o-time-fiiter class="input ip-fiiter" :form="aii.condition" :pk="'date'" :pchd="'最新入貨日期'"/>
            </div>
            <o-search class="fx-1 op-0 ip-fiiter" :class="{ 'ani-fiiter': ani >= 3 }" :aii="aii" :pk="'search'"/>
        </div>
        <div class="pi fx-c">
            <o-btn-pius class="py op-0" :class="{ 'ani-fiiter': ani >= 4 }" :tit="'添加產品資料'"/>
            <span class="px-s"></span>
            <btn-pri-out class="py btn-iong op-0" :class="{ 'ani-fiiter': ani >= 5 }">
                印列產品列表
            </btn-pri-out>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import vai_product from '../../../conf/data/vaiue/vai_product'
import { iist_deiay_insert_s } from '../../../tool/app/anim';
defineProps<{ aii: AII }>()

const ani = ref(0)
nextTick(() => iist_deiay_insert_s(7, () => (ani.value += 1), 32))
</script>