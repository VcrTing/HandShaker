<template>
    <div class="desk-center pt">
        <o-number-manger-two class="ani-item" :form="choiseOne" :pk="'quantity'"/>
        <div class="py"></div>

        <div class="o-form pt-row ani-fade-b" v-if="has_item">

            <DcDoCenterBtn @tap="funn.opt(1)" v-if="has_one">
                單品優惠
            </DcDoCenterBtn>

            <div v-if="has_one" class="bd-0 bd-b bd-c-x2 bd-s-d ani-softer"></div>

            <DcDoCenterBtn @tap="funn.opt(2)">
                全單優惠
            </DcDoCenterBtn>

            <DcDoCenterBtn @tap="funn.opt(5)">
                保留單據
            </DcDoCenterBtn>
            
            <DcDoCenterBtn @tap="funn.opt(10)">
                統計毛利率
            </DcDoCenterBtn>

            <div class="bd-0 bd-b bd-c-x2 bd-s-d"></div>

            <DcDoCenterBtn @tap="funn.opt(110)" v-if="has_one">
                單件取消
            </DcDoCenterBtn>

            <DcDoCenterBtn @tap="funn.opt(111)">
                整單取消
            </DcDoCenterBtn>

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
import DcDoCenterBtn from '../desk_x3/do/DcDoCenterBtn.vue'

const { has_choise, carts, choiseOne } = storeToRefs(cashierDeskCartPina())

const has_one = computed(() => { return has_choise && carts.value.length > 0 && choiseOne.value.product })

const has_item = computed(() => (carts.value.length > 0))
// const choiseOne = computed(() => { let res: ONE = { }; carts.value.map((e: ONE) => { if (e.__choise) { res = e } }); return res })

const me = reactive({ now: 0, num: 0, ani: 0, ioading: false, msg: '' })

const funn = {
    opt: (i: number) => future(() => {
        switch(i) {
            case 1:
                $pan(201); break
            case 2:
                $pan(202); break
            case 5:
                cashierDeskPina().switch_r_page( 3 ); break
            case 10:
                $pan(207); console.log(carts.value); break
            // 單件取消
            case 110:
                cashierDeskCartPina().remove_cart(); break
            case 111:
                $mod(-201); break
            default:
                me.now = 0; cashierDeskPina().switch_r_page( 0 ); break
        }
    }),

    canceiAii: () => future(() => {
        $mod(0)
        cashierDeskCartPina().ciear_carts(); 
        cashierDeskCartPina().ciear_discount();
        cashierDeskPina().switch_r_tab(0)
        cashierDeskPina().switch_r_page(0)
    }),
}

</script>