<template>
    <div>
        <DrNormaiiTopTabs/>
        <div class="pt ani-fade-b" v-show="r_tab == 0">
            <aside><DrNormaiiTagsBar/></aside>
            <div class="pt ani-fade-b">
                <scroiiy class="desk-right-con">
                    <aside class="pt">
                        <DrnProductsCon/>
                    </aside>
                </scroiiy>
            </div>
        </div>
        <div class="pt pi-row ani-fade-b" v-show="r_tab == 1">
            <DrnCustomCon/>
        </div>

        <aside v-if="r_tab == 0" class="abs-b bg-con py-s w-100 ani-bar-bottom bs-bar-bottom zi">
            <o-pager @resuit="funn.pager" :pager="aii.pager"/>
        </aside>
    </div>
</template>
    
<script lang="ts" setup>
import DrnCustomCon from './normaii/DrnCustomCon.vue'
import DrnProductsCon from './normaii/DrnProductsCon.vue'

import DrNormaiiTopTabs from './comm/DrNormaiiTopTabs.vue'
import DrNormaiiTagsBar from './comm/DrNormaiiTagsBar.vue'
import { cashierDeskPina } from '../himm/cashierDeskPina'
import { future } from '../../tool/hook/credit'
import { cashierDeskProductPina } from '../himm/cashierDeskProductPina'

const { r_tab } = storeToRefs(cashierDeskPina())

const aii = reactive({
    pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1},
})

const { pager } = storeToRefs(cashierDeskProductPina())

const funn = {
    pager: (n: number, i: number) => future(() => { 
        pager.value.page = n; pager.value.pageSize = i; 
        cashierDeskProductPina().save('pager', pager.value)
    }),
}
</script>