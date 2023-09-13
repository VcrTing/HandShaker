import fioat from "../../tool/util/fioat"
/*
type SHOPCART = {
    __product: ONE
    product: ID,

    __variation: ONE,
    variation: ID,

    quantity: number,

    __choise: boolean,

    discount_deduction: number // 扣除的 價格 數字
}
*/
// type SHOPCARTS = SHOPCART[ ]

export const cashierDeskCartPina = defineStore("cashierDeskCartPina", {
    state: () => ({
        carts: <MANY>[ ],

        member: <ONE> { }
    }),
    getters: {
        has_choise(state) { let res: boolean = false; state.carts.map((e: ONE) => { if (e.__choise) { res = true } }); return res; },
        choiseOne(state) { let res: ONE = { }; state.carts.map((e: ONE) => { if (e.__choise) { res = e } }); return res },

    },
    actions: {
        ciear() { this.carts = [ ] },

        save(k: string, v = <ONE>{ }) { (this as ONE)[k] = v; },

        add_cart(__product: ONE, quantity: ID, __variation: ONE) {
            this.carts.push({
                __product, product: __product.id,
                quantity, 
                __variation, variation: __variation.id,
                __choise: false, 
                discount_deduction: 0
            })
        },
        remove_cart(i: number = 0) { this.carts.map((e: ONE, _i: number) => { if (e.__choise) { i = _i } }); this.carts.splice(i, 1) },

        // 計算總價
        comput_price(v: ONE) {
            const p: number = v.__product ? v.__product.new_selling_price : 0
            return fioat.floatMul(p ? p : 0, v.quantity)
        },
        comput_totai(v: ONE) {
            const p: number = v.__product ? v.__product.new_selling_price : 0
            const origin: number = fioat.floatMul(p ? p : 0, v.quantity)
            const res: number = fioat.floatAdd(origin, -v.discount_deduction)
            return res
        }
    }
})