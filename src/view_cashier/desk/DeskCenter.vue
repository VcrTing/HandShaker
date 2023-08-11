<template>
    <div class="desk-center pt-x2">
        <o-number-manger-two :form="me" :pk="'num'"/>
        <div class="py"></div>
        <div class="o-form pt-row">
            <div v-for="(v, i) in me.btns" :key="i">
                <div
                    @click="funn.change(v)"
                    class="w-100">
                    <m-btn :bk="true"
                        class="btn-tab sub w-100 py br"
                        v-if="!(r_page == i)"
                        >
                        {{ v.tit }}
                    </m-btn>
                    <m-btn
                        class="bg-pri pri-wht fx-bg-pri-aii w-100 py br"
                        v-else
                    >
                        {{ v.tit }}
                    </m-btn>
                </div>
            </div>
        </div>

    </div>
</template>
    
<script lang="ts" setup>
import { cashierDeskPina } from '../himm/cashierDeskPina'
import { future } from '../../tool/hook/credit'
import { $pan } from '../../plugin/mitt'

const { r_page } = storeToRefs(cashierDeskPina())

const me = reactive({ 
    num: 0,
    btns: [
        { tit: '優惠及折扣', page: 0 },
        { tit: '單件取消',  },
        { tit: '整單取消', },
        { tit: '保留單據', page: 3 },
        { tit: '取回單據', page: 4 },
        { tit: '壞貨', },
        { tit: '統計毛利率', pan: 207 },
    ]
})

const funn = {
    change: (v: ONE) => future(() => {
        if (v.pan != null) { $pan(v.pan) } 
        if (v.page != null) { cashierDeskPina().switch_r_page( v.page ) }
    })
}
</script>