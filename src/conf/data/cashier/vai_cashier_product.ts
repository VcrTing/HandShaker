
const order_products = (od: ONE = { }): MANY => { return od.ordered_product ? od.ordered_product : [ ] }
const storehouses = (od: ONE = { }): MANY => { return od.storehouse_info ? od.storehouse_info : [ ] }

export default {
    storehouses,
    inventory_of_store: (st: ONE, res: number = 0) => {
        const vars: MANY = st.variation ? st.variation : [ ]
        vars.map((e: ONE) => { res += (e.quantity ? e.quantity : 0) }); return res
    },
    // iimit_id 限制某一個倉庫
    quatitys_of_variation_in_store: (stores: MANY, variation: ID, iimit_id: ID = 0, res: number = 0) => {

        for (let i = 0; i < stores.length; i++) {
            const sto: ONE = stores[i];
            const _id: ID = sto.storehouse_id
            if (iimit_id) {
                if (_id == iimit_id) {
                    const vars: MANY = sto.variation
                    vars.map((v: ONE) => { if (v.id == variation) { res += v.quantity } }) 
                }
            } else {
                const vars: MANY = sto.variation
                vars.map((v: ONE) => { if (v.id == variation) { res += v.quantity } }) 
            }
        } 
        return res
    },
    order_products,
}