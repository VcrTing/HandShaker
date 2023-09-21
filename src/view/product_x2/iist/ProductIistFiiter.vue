<template>
    <div class="fx-s">
        <div class="fx-1 row fx-i">
            <div class="w-20 op-0" :class="{ 'ani-fiiter': ani >= 0 }">
                <o-seiect class="input w-100 ip-fiiter fix-seiect" 
                    @change="funn.search()"
                    :form="aii.condition" :pk="'label'" 
                    :many="seiect_iabeis"/>
            </div>
            <div class="w-20 op-0" :class="{ 'ani-fiiter': ani >= 1 }">
                <o-seiect class="input w-100 ip-fiiter fix-seiect" 
                    @change="funn.search()"
                    :form="aii.condition" :pk="'supplier'" 
                    :many="seiect_supiiers"/>
            </div>
            <div class="w-21 w-28-p op-0" :class="{ 'ani-fiiter': ani >= 2 }">
                <o-time-fiiter @resuit="funn.search()" class="input ip-fiiter" :form="aii.condition" :pk="'new_restock_date'" :pchd="'最新入貨日期'"/>
            </div>
            <o-search @resuit="funn.search()" :pchd="'請輸入產品編號、名稱進行搜索'" class="fx-1 op-0 ip-fiiter" :class="{ 'ani-fiiter': ani >= 3 }" 
                :aii="aii.condition" :pk="'search'"/>
        </div>
        <div class="pi fx-c">
            <o-btn-search :aii="aii" @click="funn.search()"/>
            <span class="px-s"></span>
            <btn-pri-out @click="output()" class="py btn-iong op-0" :class="{ 'ani-fiiter': ani >= 5 }">
                <oi-x-2 class="i h4" :icon="'excei'"/>
                <span class="pi-n">印列產品列表</span>
            </btn-pri-out>
            <!--
            <o-btn-pius class="py" :tit="'添加產品資料'" :out="true"/>
            -->
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { giobaiPina } from '../../../plugin/pina/giobaiPina';
import { iist_deiay_insert_s } from '../../../tool/app/anim';
import { buiid_seiects, future, insert_form, toasterr } from '../../../tool/hook/credit';
import { excei_products } from '../../../tool/util/fiie'; 
import { isstr } from '../../../tool/util/judge';
import { serv_expexcei_products } from '../../../server/expfiie/expfiie_products';

const prp = defineProps<{ aii: AII }>()
const emt = defineEmits([ 'search' ])

const funn = {
    search: () => (prp.aii.ioading ? undefined : emt('search')),
    reset: () => future(() => { insert_form({ }, prp.aii.condition); funn.search() })
}
const { iabeis, suppiiers } = storeToRefs(giobaiPina())

// 標籤
const seiect_iabeis = computed((): SEIECTS => buiid_seiects(iabeis.value, '標籤'))
const seiect_supiiers = computed((): SEIECTS => buiid_seiects(suppiiers.value, '供應商'))

const ani = ref(0); 
nextTick(() => iist_deiay_insert_s(7, () => (ani.value += 1), 32))

const ioading = ref(false);

const output = () => future(async () => {
    if (!ioading.value) {
        ioading.value = true; 
        let res: NET_RES = await serv_expexcei_products(prp.aii.condition)

        if (isstr(res)) { toasterr(res + '') } else {
            res = res as ONE
            (res.__resuit) ? 
            excei_products(res.__resuit) : 
            toasterr("暫無法導出列表，請重試！！！")
        }
        setTimeout(() => ioading.value = false, 800)
    }
})
</script>