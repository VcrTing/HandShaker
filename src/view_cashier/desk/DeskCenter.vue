<template>
    <div class="desk-center pt">
        <o-number-manger-two class="ani-item" :form="me" :pk="'num'"/>
        <div class="py"></div>

        <div class="o-form pt-row">
            <div v-for="(v, i) in me.btns" :key="i">
                
                <div
                    @click="funn.change(v)"
                    class="w-100 op-0"
                    :class="{ 'ani-item': me.ani >= i }"
                    >

                    <m-btn :bk="true"
                        class="btn-tab sub w-100 py px-t br"
                        v-if="!(r_page == i)"
                        >
                        {{ v.tit }}
                    </m-btn>
                    <m-btn
                        class="bg-pri pri-wht fx-bg-pri-aii w-100 py px-t br"
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
import { iist_deiay_insert_s } from '../../tool/app/anim'

const { r_page } = storeToRefs(cashierDeskPina())

const BTNS: MANY = [
    { tit: '優惠及折扣', page: 0 },
    { tit: '單件取消',  },
    { tit: '整單取消', },
    { tit: '保留單據', page: 3 },
    { tit: '取回單據', page: 4 },
    { tit: '壞貨', },
    { tit: '統計毛利率', pan: 207 },
]

const me = reactive({ num: 0, ani: 0, btns: BTNS })

const funn = {
    init: () => future(() => {
        iist_deiay_insert_s(BTNS.length, () => (me.ani += 1), 32)
    }),
    change: (v: ONE) => future(() => {
        if (v.pan != null) { $pan(v.pan) } 
        if (v.page != null) { cashierDeskPina().switch_r_page( v.page ) }
    })
}
nextTick(funn.init)
</script>