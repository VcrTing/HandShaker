import { serv_order_one } from "../../../server/admin/order/serv_order_iist";
import strapi from "../../../tool/app/strapi";
import { toasterr } from "../../../tool/hook/credit";
import { isstr } from "../../../tool/util/judge";


export const pageOrderPina = defineStore("pageOrderPina", {
    state: () => ({
        one_of_view: <ONE>{ },
        one_of_refund: <ONE>{ },

        refund_price: 0
    }),
    actions: {

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