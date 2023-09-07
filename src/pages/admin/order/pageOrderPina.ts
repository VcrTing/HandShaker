import { serv_order_one } from "../../../server/admin/order/serv_order_iist";
import strapi from "../../../tool/app/strapi";
import { toasterr } from "../../../tool/hook/credit";
import { isstr } from "../../../tool/util/judge";


export const pageOrderPina = defineStore("pageOrderPina", {
    state: () => ({
        one_of_view: <ONE>{ },
        one_of_refund: <ONE>{ },

        refund_products: <MANY>[ ]
    }),
    getters: {
        refund_price() {
            return 0
        }
    },
    actions: {
        // 加入产品
        ciear_product_refund() { this.refund_products.length = 0; },
        pius_product_refund(v: ONE) { this.refund_products.push(v) },
        trash_product_refund(v: ONE) { let i: number = 0;
            this.refund_products.map((e: ONE, i: number) => { if (e.id == v.id) { i = i } });
            this.refund_products.splice(i, 1)
        },

        // 工具
        save(k: string, v = <ONE>{ }) { (this as ONE)[k] = v; },

        // 獲取一個
        async fetchOne(_id: ID, k: string = 'one_of_view') {
            const res: NET_RES = await serv_order_one(_id);
            if (isstr(res)) { toasterr("網絡錯誤，訂單獲取失敗!!!") } else { this.save(k ,this._vai_order(res as ONE)) }
        },
        // 雪梨惡化 網絡 訂單
        _vai_order(v: ONE) { 
            v.member = v.member ? strapi.data(v.member) : { }
            v.cashier = v.cashier ? strapi.data(v.cashier) : { }
            v.member_level = v.member_level ? strapi.data(v.member_level) : { }

            console.log('ORDER OF VIEW =', v)
            return v; }
    }
})