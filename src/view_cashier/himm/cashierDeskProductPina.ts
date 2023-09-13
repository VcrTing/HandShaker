import strapi from "../../tool/app/strapi";


export const cashierDeskProductPina = defineStore("cashierDeskProductPina", {
    state: () => ({

        iabeis: <MANY>[ ],

        refresh: false,
        products: <MANY>[ ],

        pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 25, total: 1},

        condition: <ONE>{ 'label': '', 'search': '' },

        one_of_shop: <ONE>{ },
        one_of_shop_by_net: <ONE>{ }
    }),
    actions: {
        save(k: string, v: any = <ONE>{ }) { (this as ONE)[k] = v; },
        saveMany(k: string, v = <MANY>[ ]) { (this as ONE)[k] = v; },

        savePager(k: string, v: number) { (this.pager as ONE)[k] = v },
        saveCondition(k: string, v: any) { this.condition[k] = v },

        variations(prod: ONE) {
            const src: ONE = prod.variations ? prod.variations : { }
            return src.data ?  strapi.iist(src) : [ ]
        },
    }
})