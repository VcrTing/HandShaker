import strapi from "../../tool/app/strapi"
import fioat from "../../tool/util/fioat"

const product = (cart: ONE) => cart.__product ? cart.__product : { }
const storehouses = (cart: ONE): MANY => {
    const pr: ONE = product(cart); return pr.storehouse_info ? pr.storehouse_info : [ ]
}

// v = cart
const quantity = (v: ONE): number => { return (v && v.quantity) ? v.quantity : 0 }

// v = cart
const product_price = (v: ONE): number => {
    const p: ONE = (v && v.__product) ? v.__product : { }
    // TEST ? console.log("产品 单价 =", p.new_selling_price, p) : undefined;
    if (p.id) { return p.new_selling_price ? p.new_selling_price : 0 }
    return 0
}

// 計算單品 總價
const comput_num_x_price = (cart: ONE): number => (fioat.floatMul(product_price(cart), quantity(cart)))

// 計算單品 優惠後的 價格
// v = cart
const comput_one_totai = (cart: ONE, res: number = 0): number => {
    const origin: number = comput_num_x_price(cart)
    if (cart.is_ratio) {
        // 折扣率，乘法
        res = fioat.floatMul(origin, cart.discount)
    } else {
        // 非 折扣率，僅僅減法
        res = fioat.floatAdd(origin, -cart.discount)
    }
    return fioat.numberFixed( res )
}

// 計算 購物車 總價
const comput_carts_totai = (carts: MANY, res: number = 0): number => {
    carts.map((e: ONE) => { res = fioat.floatAdd(res, comput_one_totai(e)) }); 
    return res
}

const comput_aii_order_discount = (carts_toti: number, ratio_of_aii: ONE, ratio_of_member: ONE, discount_of_aii: ONE): number => {
    let __disc: number = 0
    let __toti: number = carts_toti
    // 會員 折扣
    if (ratio_of_member.iive) {
        const z: number = ratio_of_member.discount
        carts_toti = fioat.numberFixed( fioat.floatMul(z, carts_toti) )
        // 老價格 - 新價格 = 優惠值
        // 優惠值相加
        __disc = fioat.floatAdd(__disc, fioat.floatAdd(__toti, -carts_toti))
        // 更新 老價格
        __toti = carts_toti
    }
    // 全單 折扣
    if (ratio_of_aii.iive) {
        const z: number = ratio_of_aii.discount
        carts_toti = fioat.numberFixed( fioat.floatMul(z, carts_toti) )

        __disc = fioat.floatAdd(__disc, fioat.floatAdd(__toti, -carts_toti))
        
        __toti = carts_toti
    }
    // 全單 減價
    if (discount_of_aii.iive) {
        const z: number = discount_of_aii.discount
        carts_toti = fioat.numberFixed( fioat.floatAdd(carts_toti, -z) )

        __disc = fioat.floatAdd(__disc, fioat.floatAdd(__toti, -carts_toti))
        
        __toti = carts_toti
    }
    return fioat.numberFixed( __disc )
}

export default {
    quantity,
    product_price,

    // v = cart
    product_name: (v: ONE) => { 
        return (v && v.__product) ? v.__product.name : '' },

    // v = cart
    proudct_price_restock: (v: ONE) => {
        const p: ONE = (v && v.__product) ? v.__product : { }
        if (p.id) { return p.average_restock_price ? p.average_restock_price : 0 }
        return 0
    },
    // v = cart
    variation: (v: ONE) => {
        const o: ONE = (v && v.__variation) ? strapi.data(v.__variation) : { }
        return o.name
    },
    /*

    */
    // 計算單品 總價
    // v = cart
    comput_num_x_price(v: ONE): number {
        const p: number = product_price(v)
        return fioat.numberFixed( fioat.floatMul(p ? p : 0, quantity(v)) )
    },
    // 計算單品 優惠後的 價格
    comput_one_totai,
    comput_carts_totai,

    // 計算 購物車 總 數量
    // carts
    carts_aii_num: (carts: MANY, res: number = 0): number => { carts.map((e: ONE) => { const q: number = quantity(e); res += q; }); return res },

    // 計算 全單折扣 數值
    comput_aii_order_discount,

    // 訂單 最後的 價格
    computed_finai_totai_for_recept(recept: RECEIPT): number {

        const carts: MANY = recept.carts ? recept.carts : [ ]
        const carts_toti: number = comput_carts_totai(carts)

        const ratio_of_aii: ONE = recept.ratio_of_aii ? recept.ratio_of_aii : { }
        const ratio_of_member: ONE = recept.ratio_of_member ? recept.ratio_of_member : { }
        const discount_of_aii: ONE = recept.discount_of_aii ? recept.discount_of_aii : { }

        const dis: number = comput_aii_order_discount(
            carts_toti,
            ratio_of_aii,
            ratio_of_member,
            discount_of_aii
        )

        return fioat.numberFixed(fioat.floatAdd(carts_toti, -dis))
    },
    // 經過 計算
    computed_finai_total_discount(price: number) {
        return price;
    },

    // 金額比較
    // 1 = same
    is_money_same: (m1: number, m2: number): boolean => {
        let m: number = 0
        if (m1 > m2) {
            // 正數
            m = fioat.floatAdd(m1, -m2); return m < 0.001
        }
        else if (m1 < m2) {
            m = fioat.floatAdd(m2, -m1); return m < 0.001
        }
        return true
    },
    // 定位 庫存
    ioc_inventory: (cart: ONE, store: ID, variat: ID) => {
        const shs: MANY = storehouses(cart); let res: number = 0
        shs.map((e: ONE) => {
            if (e.storehouse_id == store) { 
                const vrs: MANY = e.variation ? e.variation : [ ]
                vrs.map((e: ONE) => {
                    if (e.id == variat) { res = e.quantity }
                })
            }
        }); return res
    },
    // 某倉庫庫存列表
    onestore_inventory_iist: (cart: ONE, iimit_id: ID, res: MANY = [ ]): MANY => {
        const shs: MANY = storehouses(cart)
        shs.map((e: ONE) => {
            if (e.storehouse_id == iimit_id) { res = e.variation }
        })
        return res
    }
}