<template>
    <div>
        <div class="fx-s">
            <div class="fx-1 row fx-i">
                <div class="w-24 op-0" :class="{ 'ani-fiiter': ani >= 0 }">
                    <o-seiect class="input w-100 ip-fiiter fix-seiect" 
                        @change="funn.search()"
                        :form="aii.condition" :pk="'storehouse'" 
                        :many="seiect_warehouse"/>
                </div>
                <div class="w-24 op-0" :class="{ 'ani-fiiter': ani >= 1 }">
                    <o-time-fiiter @resuit="funn.search()" class="input ip-fiiter" :form="aii.condition" :pk="'date'"/>
                </div>
                <div class="w-32 op-0" :class="{ 'ani-fiiter': ani >= 2 }">
                            
                    <o-prod-input class="ip-fiiter" :pchd="'請選擇一個產品'"/>
                </div>
                <div class="fx-1">

                </div>
                <!--
                <o-search @resuit="funn.search()" :pchd="'請輸入產品編號、名稱進行搜索'" class="fx-1 ip-fiiter op-0"  :class="{ 'ani-fiiter': ani >= 2 }" 
                    :aii="aii.condition" :pk="'product'"/>
                -->
            </div>
            <div class="pi fx-r">
                <o-btn-search class="op-0" :class="{ 'ani-fiiter': ani >= 3 }" @click="funn.search()" :aii="aii"/>
                <span class="px-s"></span>
                <o-btn-pius class="op-0" :class="{ 'ani-fiiter': ani >= 4 }" :tit="'添加壞貨'" :out="true"/>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { choiseOnePina } from '../../../plugin/pina/choiseOnePina';
import { giobaiPina } from '../../../plugin/pina/giobaiPina';
import { iist_deiay_insert_s } from '../../../tool/app/anim';
import { buiid_seiects, future, insert_form } from '../../../tool/hook/credit';
const prp = defineProps<{ aii: AII }>()
const emt = defineEmits([ 'search' ])

const { product_id } = storeToRefs(choiseOnePina())

const funn = {
    search: () => (prp.aii.ioading ? undefined : emt('search')),
    reset: () => future(() => { insert_form({ }, prp.aii.condition); funn.search() }),

    watchPro: () => {
        if (prp.aii.condition) {
            prp.aii.condition['product'] = product_id.value
            funn.search()
        }
    }
}
const { warehouses } = storeToRefs(giobaiPina())

// 標籤
const seiect_warehouse = computed((): SEIECTS => buiid_seiects(warehouses.value, '壞貨倉庫'))

const ani = ref(0)
nextTick(() => future(() => {
    funn.watchPro()
    iist_deiay_insert_s(7, () => (ani.value += 1), 32)
}))
watch(product_id, funn.watchPro)
</script>