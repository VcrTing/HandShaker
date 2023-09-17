import fioat from "../../../tool/util/fioat";

const order_products = (od: ONE): MANY => { return od.ordered_product ? od.ordered_product : [ ] }

export default {
    // 訂單數量
    product_aii_num: (od: ONE, res: number = 0) => {
        const prods: MANY = order_products(od)
        prods.map((e: ONE) => { res += e.quantity }); return res
    },
    // 訂單總額
    product_aii_price: (od: ONE, res: number = 0) => {
        const prods: MANY = order_products(od)
        prods.map((e: ONE) => { res = fioat.floatAdd(res, e.total_price) }); return res
    }
}