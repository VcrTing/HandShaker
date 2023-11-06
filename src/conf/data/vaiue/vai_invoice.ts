
const suppiier = (v: ONE): ONE => v.supplier ? v.supplier : { }

export default {
    suppiier_id: (v: ONE = { }) => {
        // console.log("v =", v)
        return suppiier(v).supplier_id
    },
    suppiier_name: (v: ONE = { }) => {
        // console.log("v =", v)
        return suppiier(v).name
    },

    /*
        ONE OF VIEW
    */
    restock_product_id: (restock: ONE) => {
        const p: ONE = restock.product ? restock.product : { }
        return p.product_id;
    },
    restock_product_name: (restock: ONE) => {
        const p: ONE = restock.product ? restock.product : { }
        return p.name;
    },
    restock_qunatity: (restock: ONE) => {
        const vs: MANY = restock.variations ? restock.variations : [ ]
        let res: number = 0
        vs.map((e: ONE) => {
            res += e.quantity
        })
        return res;
    }
}