
const order_products = (od: ONE = { }): MANY => { return od.ordered_product ? od.ordered_product : [ ] }
const storehouses = (od: ONE = { }): MANY => { return od.storehouse_info ? od.storehouse_info : [ ] }

export default {
    storehouses,
    inventory_of_store: (st: ONE, res: number = 0) => {
        const vars: MANY = st.variation
        vars.map((e: ONE) => { res += e.quantity }); return res
    },
    quatitys_of_variation_in_store: (stores: MANY, variation: ID, res: number = 0) => {
        stores.map((sto: ONE) => {
            const vars: MANY = sto.variation
            vars.map((v: ONE) => { if (v.id == variation) { res += v.quantity } }) // const num: number = vai_cashier_product.inventory_of_store(sto); res += num;
        }); return res
    },
    order_products,
}