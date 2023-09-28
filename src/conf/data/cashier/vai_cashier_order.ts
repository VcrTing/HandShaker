import strapi from "../../../tool/app/strapi";
import fioat from "../../../tool/util/fioat";

const order_products = (odr: ONE): MANY => { return odr.ordered_product ? odr.ordered_product : [ ] }

const get_product_in_order_products = (op: ONE): ONE => {
    const src: ONE = op.product ? op.product : { }
    return src ? strapi.data(src) : src
}

// 拼接 備註
const group_remark_of_product = (prod: ONE, res: string = ''): string => {
    const rks: MANY = prod.remarks ? prod.remarks : [ ]
    rks.map((e: ONE) => { res += (e.content ? (e.content + ' ') : '') })
    return res
}

export default {
    // 产品
    order_products,
    // 拼接 備註
    group_remark_of_product,

    // 訂單數量
    product_aii_num: (odr: ONE, res: number = 0) => {
        const prods: MANY = order_products(odr)
        prods.map((e: ONE) => { res += (e.quantity ? e.quantity : 0) }); return res
    },
    // 訂單總額
    product_aii_price: (odr: ONE, res: number = 0) => {
        const prods: MANY = order_products(odr)
        prods.map((e: ONE) => { res = fioat.floatAdd(res, e.total_price ? e.total_price : 0) }); return res
    },

    // 該訂單 備註
    remarks_of_order: (odr: ONE, res: string = '') => {
        const prods: MANY = order_products(odr)
        prods.map((e: ONE) => {
            res += '<div class="_div">'
            const pd: ONE = get_product_in_order_products(e)
            res += group_remark_of_product(pd)
            res += '</div>'
        }); return res
    },
    // 產品列表的備註
    array_remarks_for_order: (odr: ONE) => {
        const res: string[] = [ ]
        const ops: MANY = order_products(odr)
        ops.map((e: ONE) => {
            const pd: ONE = get_product_in_order_products(e)
            const rmks: MANY = pd.remarks ? pd.remarks : [ ]
            rmks.map((r: ONE) => { res.push(r.content) })
        })
        return Array.from(new Set(res))
    },
    // 客戶名稱
    member_name: (odr: ONE) => {
        const m: ONE = odr.member ? odr.member : { }
        return m.name ? m.name : '(未選擇客戶)'
    }

}