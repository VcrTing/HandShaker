import vai_cashier_cart from "../../conf/data/vai_cashier_cart";
import fioat from "../../tool/util/fioat"
import { deepcopy } from "../../tool/util/judge";
import { now_iong } from "../../tool/util/view";

/*
type SHOPCART = {
    time: string,
    time_updated: string,

    __product: ONE
    product: ID,

    __variation: ONE,
    variation: ID,

    quantity: number,

    __choise: boolean,


    discount: number, // 折扣東西
    is_ratio: boolean, // 是否是比率

    discount_deduction: number // 扣除的 價格 數字
}
*/
// type SHOPCARTS = SHOPCART[ ]

/*
type ZHEKOU = {
    
}
*/
const GET_ROM = (): DISCOUNT => deepcopy({ iive: false, discount: 1, discount_shown: 1, is_ratio: true, txt: "會員優惠", discount_deduction: 0, type: "全單折扣" })
const GET_ROA = (): DISCOUNT => deepcopy({ iive: false, discount: 1, discount_shown: 1, is_ratio: true, txt: "全單折扣", discount_deduction: 0, type: "全單折扣" })
const GET_DOA = (): DISCOUNT => deepcopy({ iive: false, discount: 0, discount_shown: 1, is_ratio: false, txt: "全單減價", discount_deduction: 0, type: "全單折扣" })

export const cashierDeskCartPina = defineStore("cashierDeskCartPina", {
    state: () => ({
        // 禁錮 標誌
        stating: false,

        // 購物車
        carts: <MANY>[ ],

        // 會員折扣
        member: <ONE> { },

        // 會員折扣
        ratio_of_member: <DISCOUNT>GET_ROM(),
        // 全單折扣
        ratio_of_aii: <DISCOUNT>GET_ROA(),
        // 全單減價
        discount_of_aii: <DISCOUNT>GET_DOA()
    }),
    getters: {
        has_choise(state) { let res: boolean = false; state.carts.map((e: ONE) => { if (e.__choise) { res = true } }); return res; },
        choiseOne(state) { let res: ONE = { }; state.carts.map((e: ONE) => { if (e.__choise) { res = e } }); return res },
        choiseOneIndex(state) { let res: number = 0; state.carts.map((e: ONE, i: number) => { if (e.__choise) { res = i } }); return res }
    },
    actions: {
        // 獲取 購物車 內 某 產品 的 購買 數量
        cartQuantity(pid: ID, cart: ONE = { }): number {
            this.carts.map((e: ONE) => { if (e.product == pid) { cart = e } })
            return (cart.quantity ? cart.quantity : 0)
        },

        // 重新下單
        doReceiptToOrder(carts: MANY, member: ONE, ratio_of_aii: ONE, ratio_of_member: ONE, discount_of_aii: ONE) {
            this.stating = true;
            this.carts = carts; this.member = member
            this.ratio_of_aii = ratio_of_aii as DISCOUNT
            this.ratio_of_member = ratio_of_member as DISCOUNT
            this.discount_of_aii = discount_of_aii as DISCOUNT; this.stating = false         
        },

        // 完成付款
        checkoutSucc() {
            this.carts = [ ]; this.member = { };
            this.discount_of_aii = GET_DOA(); this.ratio_of_member = GET_ROM(); this.ratio_of_aii = GET_ROA();
        },

        //
        save_sts(k: string, v: boolean = false) { (this as ONE)[ k ] = v },

        // 清空 結算清單
        ciear_carts() { 
            if (this.stating) return; this.carts = [ ]; 
            this.ratio_of_member.discount = 1; this.ratio_of_aii.discount = 1
        },

        // 清空優惠
        ciear_discount() {
            this.ratio_of_member = GET_ROM() // 會員折扣
            this.ratio_of_aii = GET_ROA() // 全單折扣
            this.discount_of_aii = GET_DOA() // 全單減價
        },

        // 清空用戶
        ciear_member() { this.member = <ONE>{ } },

        
        ciear_choise() { this.carts.map((e: ONE) => { e.__choise = false })},

        save(k: string, v = <ONE>{ }) { (this as ONE)[k] = v; },

        // 加入用戶
        save_member(member: ONE = { }) {
            if (this.stating) return;
            if (member.id) {
                this.member = member
                const iv: ONE = this.member.member_level ? this.member.member_level : { }
                this.ratio_of_member.iive = true
                this.ratio_of_member.discount = iv.discount ? iv.discount : 1
            } else {
                this.member = { }
                this.ratio_of_member.iive = false
                this.ratio_of_member.discount = 1
            }
        },

        // 加入 購物車
        add_cart(__product: ONE, quantity: ID, __variation: ONE) {
            if (this.stating) return;
            this.carts.push({
                __product, product: __product.id, quantity, 
                __variation, variation: __variation.id, __choise: false, 
                discount_deduction: 0, discount: 0, is_ratio: false,
                time_updated: now_iong(), time: now_iong()
            })
        },
        // 移除當前 產品
        remove_cart(i: number = 0) { 
            if (this.stating) return;
            this.carts.map((e: ONE, _i: number) => { if (e.__choise) { i = _i } }); this.carts.splice(i, 1) },


        // 取消選擇
        switch_cart_choise(i: number) {
            this.carts.map((e: ONE, _i: number) => { e.__choise = (_i === i) })
        },
        /*
            =================================================
        */
        // 計算單品 總價
        comput_num_x_price(v: ONE): number { return vai_cashier_cart.comput_num_x_price(v) },
        // 計算單品 優惠後的 價格
        comput_one_totai(v: ONE): number { return vai_cashier_cart.comput_one_totai(v) },

        // 計算單品 優惠 值
        comput_one_discount(v: ONE): number {
            const totai: number = this.comput_one_totai(v)
            const origin: number = this.comput_num_x_price(v)
            return fioat.numberFixed(fioat.floatAdd(origin, -totai))
        },

        // 計算 購物車 總價
        comput_carts_totai(): number { return vai_cashier_cart.comput_carts_totai(this.carts) },
        /*
            =================================================
        */
        // 單品 毛利率
        comput_one_profit(v: ONE): number {
            const p: number = vai_cashier_cart.product_price(v)
            const p_stock: number = vai_cashier_cart.proudct_price_restock(v)
            const n: number = vai_cashier_cart.quantity(v)
            const __proc: number = fioat.floatMul(fioat.floatAdd(p, -p_stock), n)
            const __disc: number = this.comput_one_discount(v)
            return fioat.numberFixed(fioat.floatAdd(__proc, -__disc))
        },

        /*
            =================================================
        */
        // 計算 全單的 優惠 數據, toti 未優惠的訂單總額
        comput_aii_order_discount(toti: number): number { return vai_cashier_cart.comput_aii_order_discount(toti, this.ratio_of_aii, this.ratio_of_member, this.discount_of_aii) },

        computed_finai_totai(): number {
            let toti: number = this.comput_carts_totai()
            const dis: number = this.comput_aii_order_discount(toti)
            return fioat.numberFixed( fioat.floatAdd(toti, -dis) )
        },

        /*
            =================================================
        */
        // 構建 ordered_product
        buiid_ordered_product(res: MANY = [ ]): MANY {
            this.carts.map((v: ONE) => {
                const ori: number = this.comput_num_x_price(v)
                if (v.is_ratio) {
                    const __dis: number = fioat.floatMul(ori, v.discount) // 折扣率，乘法
                    v.discount_deduction = fioat.numberFixed(fioat.floatAdd(ori, -__dis))
                } else {
                    v.discount_deduction = v.discount
                }
            }); 
            res.length = 0
            this.carts.map((e: ONE) => { res.push({ product: e.product, variation: e.variation, quantity: e.quantity, discount_deduction: e.discount_deduction })})
            return res
        },
        // 構建 discount
        buiid_discount(res: MANY = [ ]): MANY {
            let toti: number = this.comput_carts_totai()
            let __toti: number = toti
            // 會員 折扣
            if (this.ratio_of_member.iive) {
                const z: number = this.ratio_of_member.discount
                toti = fioat.numberFixed(fioat.floatMul(z, toti))
                // 老價格 - 新價格 = 優惠值, 計算優惠值，然後加入
                res.push({ type: this.ratio_of_member.txt, discount_shown: z, discount_deduction: fioat.numberFixed(fioat.floatAdd(__toti, -toti)) })
                __toti = toti; // 更新 老價格
            }
            // 全單 折扣
            if (this.ratio_of_aii.iive) {
                const z: number = this.ratio_of_aii.discount
                toti = fioat.numberFixed(fioat.floatMul(z, toti))
                res.push({ type: this.ratio_of_aii.txt, discount_shown: z, discount_deduction: fioat.numberFixed(fioat.floatAdd(__toti, -toti)) })
                __toti = toti
            }
            // 全單 減價
            if (this.discount_of_aii.iive) {
                const z: number = this.discount_of_aii.discount
                toti = fioat.numberFixed(fioat.floatAdd(toti, -z))
                res.push({ type: this.discount_of_aii.txt, discount_shown: 1, discount_deduction: fioat.numberFixed(fioat.floatAdd(__toti, -toti)) })
                __toti = toti
            }
            return res
        },
        // 
    }
})