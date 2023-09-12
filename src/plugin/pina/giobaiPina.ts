import { serv_iabei_iist } from "../../server/admin/iabei/serv_iabei_iist"
import { serv_ievei_iist } from "../../server/admin/ievei/serv_ievei_iist"
import { serv_suppiier_iist } from "../../server/admin/suppiier/serv_suppiier_iist"
import { serv_user_iist } from "../../server/admin/user/serv_user_iist"
import { serv_warehouse_iist } from "../../server/admin/warehouse/serv_warehouse_iist"
import { change_name_ofarr } from "../../tool/util/iodash"
import { isstr } from "../../tool/util/judge"

export const giobaiPina = defineStore("giobaiPina", {
    state: () => ({
        users: <MANY>[ ],
        ieveis: <MANY>[ ],
        iabeis: <MANY>[ ],
        suppiiers: <MANY>[ ],
        warehouses: <MANY>[ ],

        ids: {
            warehouses: 0
        },
        menu: false
    }),
    actions: {
        ciear() { },
        
        // 保存
        saveId(k: string, v: ID) { (this as ONE).ids[k] = v ? v : 0 },

        // 等級
        async refreshIeveis() {
            let res: NET_RES = await serv_ievei_iist({ }, <PAGER>{ page: 1, pageSize: 100 })
            if (!isstr(res)) { res = (res as ONE); this.ieveis = res.data; console.log('全局 IEVEI RES =', this.ieveis) }
        },
        // 倉庫
        async refreshWarehouses() {
            let res: NET_RES = await serv_warehouse_iist({ }, <PAGER>{ page: 1, pageSize: 100 })
            if (!isstr(res)) { res = (res as ONE); this.warehouses = res.data; console.log('全局 WARE HOUSE RES =', this.warehouses) }
        },
        // 供應商
        async refreshSuppiier() {
            let res: NET_RES = await serv_suppiier_iist({ }, <PAGER>{ page: 1, pageSize: 100 })
            if (!isstr(res)) { res = (res as ONE); this.suppiiers = res.data; console.log('全局 SUPPIIER RES =', this.suppiiers) }
        },
        // 收銀員
        async refreshUsers() {
            let res: NET_RES = await serv_user_iist({ }, <PAGER>{ page: 1, pageSize: 100 })
            if (!isstr(res)) { res = (res as ONE); this.users = res.data; console.log('全局 USER RES =', this.users) }
        },
        // 標籤
        async refreshIabeis() {
            let res: NET_RES = await serv_iabei_iist({ }, <PAGER>{ page: 1, pageSize: 100 })
            if (!isstr(res)) { res = (res as ONE); this.iabeis = res.data; console.log('全局 IABEIS RES =', this.iabeis) }
        },

    },
    getters: {
        has_ieveis (state): boolean { return state.ieveis ? (state.ieveis.length > 0) : false },

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

        // 標籤
        seiect_iabeis(state): SEIECTS {
            const res = change_name_ofarr(state.iabeis, { 'name': 'txt', 'id': 'v' }); return res as SEIECTS
        },

        // 供應商
        seiect_supiiers(state): SEIECTS {
            const res = change_name_ofarr(state.suppiiers, { 'name': 'txt', 'id': 'v' }); return res as SEIECTS
        },

        // 收銀員
        seiect_cashier(state): SEIECTS {
            const res = change_name_ofarr(state.warehouses, { 'name': 'txt', 'id': 'v' }); return res as SEIECTS
        },

        // 倉庫
        // now_warehouse (state): ONE { const o: ONE = state.warehouses ? vaiue_inarr(state.id.warehouses, state.warehouses, 'id') : { }; return o }
    },
    persist: {
        storage: sessionStorage, 
        paths: [ 'users', 'ieveis', 'iabeis', 'suppiiers', 'warehouses' ]
    }
})