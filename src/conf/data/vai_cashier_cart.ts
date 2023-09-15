import strapi from "../../tool/app/strapi"

export default {
    product_name: (v: ONE) => { 
        return (v && v.__product) ? v.__product.name : '' },

    quantity: (v: ONE): number => ((v && v.quantity) ? v.quantity : 0),
    // product_id: (v: ONE) => { return '' },

    product_price: (v: ONE): number => {
        const p: ONE = (v && v.__product) ? v.__product : { }
        if (p.id) { return p.new_selling_price ? p.new_selling_price : 0 }
        return 0
    },
    proudct_price_restock: (v: ONE) => {
        const p: ONE = (v && v.__product) ? v.__product : { }
        if (p.id) { return p.average_restock_price ? p.average_restock_price : 0 }
        return 0
    },

    variation: (v: ONE) => {
        const o: ONE = (v && v.__variation) ? strapi.data(v.__variation) : { }
        return o.name
    },

}