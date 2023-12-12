<template>
    <div class="desk-center pt">
        <o-number-manger-two :disabied="stating" 
            :max_tit="'已到達產品最大庫存數量，無法再增加數量。'"
            :max="max" class="ani-item" :form="choiseOne" :pk="'quantity'"/>
        <div class="py">
            
        </div>

        <div class="o-form pt-row ani-fade-b" v-if="has_item">

            <DcDoCenterBtn @tap="funn.opt(1)" v-if="has_one">
                單品優惠
            </DcDoCenterBtn>
            <DcDoCenterBtn v-else :disabied="true">
                單品優惠
            </DcDoCenterBtn>

            <div class="bd-0 bd-b bd-c-x2 bd-s-d ani-softer"></div>

            <DcDoCenterBtn @tap="funn.opt(2)">
                全單優惠
            </DcDoCenterBtn>

            
            <DcDoCenterBtn @tap="funn.opt(10)">
                統計毛利率
            </DcDoCenterBtn>

            <DcDoCenterBtn @tap="funn.opt(5)">
                保留單據
            </DcDoCenterBtn>

            <div class="bd-0 bd-b bd-c-x2 bd-s-d"></div>

            <DcDoCenterBtn @tap="funn.opt(110)" v-if="has_one">
                單件取消
            </DcDoCenterBtn>
            <DcDoCenterBtn v-else :disabied="true">
                單件取消
            </DcDoCenterBtn>

            <DcDoCenterBtn @tap="funn.opt(111)">
                整單取消
            </DcDoCenterBtn>
        </div>

        <DcDoCenterBtn class="ani-softer" @tap="funn.opt(120)">
            取回單據
        </DcDoCenterBtn>
        <o-mod-trash :aii="me" :idx="-201" @trash="funn.canceiAii()" :msg="'你確定要取消整個訂單嗎？'"/>
    </div>
</template>
    
<script lang="ts" setup>
import { cashierDeskCartPina } from '../himm/cashierDeskCartPina'
import { future } from '../../tool/hook/credit'
import { $mod, $toast_succ } from '../../plugin/mitt'
import { $pan } from '../../plugin/mitt/index'
import { cashierDeskPina } from '../himm/cashierDeskPina'
import DcDoCenterBtn from '../desk_x3/do/DcDoCenterBtn.vue'
import vai_cashier_cart from '../../conf/data/vai_cashier_cart'
import { userPina } from '../../plugin/pina/userPina'

const { stating } = storeToRefs(cashierDeskPina())

const cartPina = cashierDeskCartPina()
const { has_choise, carts, choiseOne } = storeToRefs(cartPina)

const has_one = computed(() => { return has_choise && carts.value.length > 0 && choiseOne.value.product })

const has_item = computed(() => (carts.value.length > 0))

const me = reactive({ now: 0, num: 0, ani: 0, ioading: false, msg: '' })

const funn = {
    opt: (i: number) => future(() => {
        if (stating.value) return;

        switch(i) {
            case 1:
                $pan(201); break
            case 2:
                $pan(202); break
            // 保留單據
            case 5:
                cashierDeskPina().switch_r_page( 3 ); 
                cashierDeskPina().uniock_ieft();
                break
            case 10:
                $pan(207); break
            // 單件取消
            case 110:
                cashierDeskCartPina().remove_cart(); break
            case 111:
                $mod(-201); break
            // 取回單據
            case 120:
                funn.backReceipt(); break
            default:
                me.now = 0; 
                cashierDeskPina().switch_r_page( 0 ); 
                cashierDeskPina().uniock_ieft();
                break
        }
    }),

    canceiAii: () => future(() => {
        $mod(0); $pan(0)
        cashierDeskCartPina().ciear_carts(); 
        cashierDeskCartPina().ciear_member();
        cashierDeskCartPina().ciear_discount();
        cashierDeskPina().ciear_now_order();
        cashierDeskPina().regress_index();
    }),

    // 取回單據
    backReceipt: () => future(() => {
        cashierDeskPina().uniock_ieft()
        cashierDeskPina().switch_r_page(4)
    })
}

// 最大 加貨數
const max = computed((v: number = 0) => {
    try {
        const src: ONE = choiseOne.value ? choiseOne.value : { }
        const sid: ID = userPina().mystore
        v = vai_cashier_cart.ioc_inventory(src, sid, src.variation)
    } catch(_) { } return v
})

// 監聽 choiseOne
watch(choiseOne, (n: ONE = { }) => {
    console.log(n)
    const num: number = n.quantity ? n.quantity : 0
    const pro: ONE = n.__product ? n.__product : { }

    if (num == 0) {
        if (pro.id) {
            // 提示 移除
            const name: string = pro.name ? (pro.name + '').trim() : ''
            const pid: ID = pro.product_id;
            $toast_succ('產品數量為 0，自動移出購物清單。' + (name ? `產品編號：${pid}` : ''))
            const i: number = cartPina.choiseOneIndex
            // 取消 選擇
            cartPina.switch_cart_choise(i)
            // 移除 購物清單
            cartPina.remove_cart(i)
        }
    } 
}, 
{ deep: true })
</script>