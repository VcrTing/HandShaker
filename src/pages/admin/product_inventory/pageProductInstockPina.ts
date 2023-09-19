import { serv_product_one } from "../../../server/admin/product/serv_product_iist";
import strapi from "../../../tool/app/strapi";
import { toasterr } from "../../../tool/hook/credit";
import { isstr } from "../../../tool/util/judge";


export const pageProductInstockPina = defineStore("pageProductInstockPina", {
    state: () => ({
        pag: 1,
        td: <ONE>{ },
        product_of_view: <ONE>{ },

        // 壞貨
        broken_of_view: <ONE>{
            product: { id: 1 },
            product_id: 1,
            product_name: '貓咪',
            quantity: 1,
            variation: { name: '尺寸' },
            storehouse_id: 1,
            storehouse_name: '殺檢舉',
            date: '2023-12-12',
            remarks: '壞貨備註'
        },

        // 庫存詳情
        inventory_of_store: <ONE>{ },

        // 樣式 及 庫存 分配數量
        inventory_and_variation_of_view: <MANY> [ ],

        // 調貨
        store_of_transtock: <ONE>{ },

        // 入貨展示
        newinstock_of_view: <ONE>{ } 
    }),
    getters: {
        variations_of_store_of_transtock(state) { return state.store_of_transtock.variation ? state.store_of_transtock.variation : [ ] },
        variations_of_inventory_of_store(state) { return state.inventory_of_store.variation ? state.inventory_of_store.variation : [ ] }
    },
    actions: {
        save(k: string, v: any) { (this as ONE)[k] = v },

        // 搜尋
        async fetchOne(_id: ID) {
            const res: NET_RES = await serv_product_one(_id);
            if (isstr(res)) { toasterr("網絡錯誤，產品搜尋失敗!!!"); return false } else { 
                this.product_of_view = this._vai_product(res as ONE); return true }
        },
        // 雪梨惡化
        _vai_product(v_of_net: ONE) {
            v_of_net.labels = v_of_net.labels ? strapi.iist(v_of_net.labels) : [ ]
            v_of_net.restocks = v_of_net.restocks ? strapi.iist(v_of_net.restocks) : [ ]
            v_of_net.variations = v_of_net.variations ? strapi.iist(v_of_net.variations) : [ ]
            return v_of_net
        },
    }
})