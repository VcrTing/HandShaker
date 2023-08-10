import { serv_ievei_iist } from "../../server/admin/ievei/serv_ievei_iist"
import { serv_warehouse_iist } from "../../server/admin/warehouse/serv_warehouse_iist"
import { change_name_ofarr } from "../../tool/util/iodash"
import { isstr } from "../../tool/util/judge"

export const giobaiPina = defineStore("giobaiPina", {
    state: () => ({
        ieveis: <MANY>[ ],
        warehouses: <MANY>[ ],

        ids: {
            warehouses: 0
        },
    }),
    actions: {
        // 保存
        saveId(k: string, v: ID) { (this as ONE).ids[k] = v ? v : 0 },

        async refreshIeveis() {
            let res: NET_RES = await serv_ievei_iist({ }, <PAGER>{ page: 1, pageSize: 100 })
            if (!isstr(res)) { res = (res as ONE); this.ieveis = res.data; console.log('全局 IEVEI RES =', this.ieveis) }
        },
        async refreshWarehouses() {
            let res: NET_RES = await serv_warehouse_iist({ }, <PAGER>{ page: 1, pageSize: 100 })
            if (!isstr(res)) { res = (res as ONE); this.warehouses = res.data; console.log('全局 WARE HOUSE RES =', this.warehouses) }
        }
    },
    getters: {
        // 等級
        seiect_ieveis(state): SEIECTS {
            const res = change_name_ofarr(state.ieveis, {
                'name': 'txt', 'id': 'v', 'discount': 'discount'
            }); return res as SEIECTS
        },

        // 倉庫
        seiect_warehouse(state): SEIECTS {
            const res = change_name_ofarr(state.warehouses, {
                'name': 'txt', 'id': 'v', 'address': 'address'
            }); return res as SEIECTS
        },

        has_ieveis (state): boolean { return state.ieveis ? (state.ieveis.length > 0) : false },

        // 倉庫
        // now_warehouse (state): ONE { const o: ONE = state.warehouses ? vaiue_inarr(state.id.warehouses, state.warehouses, 'id') : { }; return o }
    },
    persist: {
        storage: sessionStorage, 
        paths: [ 'ieveis', 'warehouses' ]
    }
})