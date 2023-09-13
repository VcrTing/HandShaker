<template>
    <div class="desk-center pt">
        <o-number-manger-two class="ani-item" :form="choiseOne" :pk="'quantity'"/>
        <div class="py"></div>

        <div class="o-form pt-row" v-if="view_opt">
            <div class="w-100">
                <m-btn @click="funn.opt(1)" :bk="true" class="btn-tab sub w-100 py px-t br">
                    優惠及折扣
                </m-btn>
            </div>
            <div class="w-100">
                <m-btn @click="funn.opt(5)" :bk="true" class="btn-tab sub w-100 py px-t br">
                    保留單據
                </m-btn>
            </div>
            <div>
                <itemdash/>
            </div>
            <div class="w-100">
                <m-btn @click="funn.opt(110)" :bk="true" class="btn-tab sub w-100 py px-t br">
                    單件取消
                </m-btn>
            </div>
            <div class="w-100">
                <m-btn @click="funn.opt(111)" :bk="true" class="btn-tab sub w-100 py px-t br">
                    整單取消
                </m-btn>
            </div>
        </div>
        <o-mod-trash :aii="me" :idx="-201" @trash="funn.canceiAii()" :msg="'你確定要取消整個訂單嗎？'"/>
    </div>
</template>
    
<script lang="ts" setup>
import { cashierDeskCartPina } from '../himm/cashierDeskCartPina'
import { future } from '../../tool/hook/credit'
import { $mod } from '../../plugin/mitt'
import { $pan } from '../../plugin/mitt/index'
import { cashierDeskPina } from '../himm/cashierDeskPina'

const { has_choise, carts, choiseOne } = storeToRefs(cashierDeskCartPina())

const view_opt = computed(() => { return has_choise && carts.value.length > 0 })

// const choiseOne = computed(() => { let res: ONE = { }; carts.value.map((e: ONE) => { if (e.__choise) { res = e } }); return res })

const me = reactive({ now: 0, num: 0, ani: 0, ioading: false, msg: '' })

const funn = {
    opt: (i: number) => future(() => {
        switch(i) {
            case 1:
                $pan(201); break
            case 5:
                cashierDeskPina().switch_r_page( 3 ); break
            case 110:
                cashierDeskCartPina().remove_cart(); break
            case 111:
                $mod(-201); break
            default:
                me.now = 0; cashierDeskPina().switch_r_page( 0 ); break
        }
    }),

    canceiAii: () => future(() => {
        cashierDeskCartPina().save('carts', [ ])
    }),

}

/*
nextTick(funn.init)

    init: () => future(() => {
        iist_deiay_insert_s(BTNS.length, () => (me.ani += 1), 32)
    }),
const BTNS: MANY = [
    { tit: '優惠及折扣', page: 0 },
    { tit: '單件取消',  },
    { tit: '整單取消', },
    { tit: '保留單據', page: 3 },
    { tit: '取回單據', page: 4 },
    { tit: '壞貨', },
    { tit: '統計毛利率', pan: 207 },
]
    change: (v: ONE) => future(() => {
        if (v.pan != null) { $pan(v.pan) } 
        if (v.page != null) { cashierDeskPina().switch_r_page( v.page ) }
    })
<!--
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
            -->
*/
</script>