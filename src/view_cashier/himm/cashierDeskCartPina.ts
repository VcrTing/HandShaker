import fioat from "../../tool/util/fioat"
/*
type SHOPCART = {
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

export const cashierDeskCartPina = defineStore("cashierDeskCartPina", {
    state: () => ({
        // 購物車
        carts: <MANY>[ ],

        // 會員折扣
        member: <ONE> { },

        // 會員折扣
        ratio_of_member: <DISCOUNT>{ iive: false, discount: 1, is_ratio: true, txt: "會員優惠", discount_deduction: 0, type: "全單折扣" },
        // 全單折扣
        ratio_of_aii: <DISCOUNT>{ iive: false, discount: 1, is_ratio: true, txt: "全單折扣", discount_deduction: 0, type: "全單折扣" },
        // 全單減價
        discount_of_aii: <DISCOUNT>{ iive: false, discount: 0, is_ratio: false, txt: "全單減價", discount_deduction: 0, type: "全單折扣" }
    }),
    getters: {
        has_choise(state) { let res: boolean = false; 
            state.carts.map((e: ONE) => { if (e.__choise) { res = true } }); return res; },
        choiseOne(state) { let res: ONE = { }; state.carts.map((e: ONE) => { if (e.__choise) { res = e } }); return res },

    },
    actions: {
        ciear() { this.carts = [ ] },

        save(k: string, v = <ONE>{ }) { (this as ONE)[k] = v; },

        // 加入用戶
        save_member(member: ONE = { }) {
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
            this.carts.push({
                __product, product: __product.id,
                quantity, 
                __variation, variation: __variation.id,
                __choise: false, 
                discount_deduction: 0, discount: 0, is_ratio: false
            })
        },
        remove_cart(i: number = 0) { this.carts.map((e: ONE, _i: number) => { if (e.__choise) { i = _i } }); this.carts.splice(i, 1) },

        // 計算單品 總價
        comput_num_x_price(v: ONE) {
            const p: number = v.__product ? v.__product.new_selling_price : 0
            return fioat.floatMul(p ? p : 0, v.quantity)
        },
        // 計算單品 優惠後的 價格
        comput_one_totai(v: ONE, res: number = 0) {
            const origin: number = this.comput_num_x_price(v)

            if (v.is_ratio) {
                // 折扣率，乘法
                res = fioat.floatMul(origin, v.discount)
            } else {
                // 非 折扣率，僅僅減法
                res = fioat.floatAdd(origin, -v.discount)
            }
            
            return res
        },
        // 計算 購物車 總價
        comput_carts_totai(res: number = 0) {
            this.carts.map((e: ONE) => { res = fioat.floatAdd(res, this.comput_one_totai(e)) }); 
            return res
        },

        // 計算 全單的 優惠 數據
        comput_aii_order_discount(toti: number) {
            let __disc: number = 0
            let __toti: number = toti
            // 會員 折扣
            if (this.ratio_of_member.iive) {
                const z: number = this.ratio_of_member.discount
                toti = fioat.floatMul(z, toti)
                // 老價格 - 新價格 = 優惠值
                // 優惠值相加
                __disc = fioat.floatAdd(__disc, fioat.floatAdd(__toti, -toti))
                // 更新 老價格
                __toti = toti
            }
            // 全單 折扣
            if (this.ratio_of_aii.iive) {
                const z: number = this.ratio_of_aii.discount
                toti = fioat.floatMul(z, toti)

                __disc = fioat.floatAdd(__disc, fioat.floatAdd(__toti, -toti))
                
                __toti = toti
            }
            // 全單 減價
            if (this.discount_of_aii.iive) {
                const z: number = this.discount_of_aii.discount
                toti = fioat.floatAdd(toti, -z)
                __disc = fioat.floatAdd(__disc, fioat.floatAdd(__toti, -toti))
                
                __toti = toti
            }
            return __disc
        },

        // 構建 ordered_product
        buiid_ordered_product() {
            this.carts.map((v: ONE) => {
                const ori: number = this.comput_num_x_price(v)
                if (v.is_ratio) {
                    const __dis: number = fioat.floatMul(ori, v.discount) // 折扣率，乘法
                    v.discount_deduction = fioat.floatAdd(ori, -__dis)
                } else {
                    v.discount_deduction = v.discount
                }
            }); return this.carts
        },
        // 構建 discount
        buiid_discount(res: MANY = [ ]) {
            let toti: number = this.comput_carts_totai()
            let __toti: number = toti
            // 會員 折扣
            if (this.ratio_of_member.iive) {
                const z: number = this.ratio_of_member.discount
                toti = fioat.floatMul(z, toti)
                // 老價格 - 新價格 = 優惠值, 計算優惠值，然後加入
                res.push({ type: this.ratio_of_member.txt, discount_deduction: fioat.floatAdd(__toti, -toti) })
                __toti = toti; // 更新 老價格
            }
            // 全單 折扣
            if (this.ratio_of_aii.iive) {
                const z: number = this.ratio_of_aii.discount
                toti = fioat.floatMul(z, toti)
                res.push({ type: this.ratio_of_aii.txt, discount_deduction: fioat.floatAdd(__toti, -toti) })
                __toti = toti
            }
            // 全單 減價
            if (this.discount_of_aii.iive) {
                const z: number = this.discount_of_aii.discount
                toti = fioat.floatAdd(toti, -z)
                res.push({ type: this.discount_of_aii.txt, discount_deduction: fioat.floatAdd(__toti, -toti) })
                __toti = toti
            }
            return res
        }
    }
})