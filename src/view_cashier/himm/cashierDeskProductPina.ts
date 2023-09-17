import { serv_iabei_iist_cashier, serv_product_iist_cashier } from "../../server/cashier/product/serv_product_iist";
import strapi from "../../tool/app/strapi";
import { isstr } from "../../tool/util/judge";


export const cashierDeskProductPina = defineStore("cashierDeskProductPina", {
    state: () => ({

        iabeis: <MANY>[ ],

        refresh: false,
        products: <MANY>[ ],

        pager: <PAGER>{ page: 1, pageCount: 1, pageSize: 100, total: 1},

        condition: <ONE>{ 'label': '', 'search': '' },

        one_of_shop: <ONE>{ },
    }),
    actions: {
        dorefresh() { this.refresh = !this.refresh },

        vfy_products(pro: ONE) {
            pro.broken_products = strapi.iist(pro.broken_products);
            pro.variations = strapi.iist(pro.variations); 
            pro.restocks = strapi.iist(pro.restocks); 
            pro.labels = strapi.iist(pro.labels); return pro;
        },

        async refreshProducts() { 
            let res: NET_RES = await serv_product_iist_cashier(this.condition, this.pager)
            if (!isstr(res)) {
                res = res as ONE
                this.products = res.data ? res.data.map((e: ONE) => this.vfy_products(e)) : [ ]; 
                console.log('獲取產品 =', this.products)
            } 
        },
        async refreshIabeis() {
            let res: NET_RES = await serv_iabei_iist_cashier({ }, { pageSize: 100, page: 1 } as PAGER)
            if (!isstr(res)) { res = res as ONE; const src: MANY = res.data ? res.data : [ ]
                if (src.length > 0) {  this.iabeis = src }
            }
        },

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