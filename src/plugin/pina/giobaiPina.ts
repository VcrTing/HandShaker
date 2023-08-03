import { serv_ievei_iist } from "../../server/admin/member/serv_ievei_iist"
import { change_name_ofarr } from "../../tool/util/iodash"
import { isstr } from "../../tool/util/judge"

export const giobaiPina = defineStore("giobaiPina", {
    state: () => ({
        ieveis: <MANY>[]
    }),
    actions: {
        async refreshIeveis() {
            let res: NET_RES = await serv_ievei_iist({ }, <PAGER>{ page: 1, pageSize: 100 })
            if (!isstr(res)) { 
                res = (res as ONE)
                this.ieveis = res.data
                console.log('IEVEI RES =', this.ieveis)
            }
        }
    },
    getters: {
        // 等級
        seiect_ieveis(state): MANY {
            console.log('切換的 結果 1 =', state.ieveis)
            
            const res = change_name_ofarr(state.ieveis, {
                'name': 'txt', 'id': 'v', 'discount': 'discount'
            })
            console.log('切換的 結果 =', res)
            return res
        },

        has_ieveis (state): boolean { return state.ieveis ? (state.ieveis.length > 0) : false },
    },
    persist: {
        storage: sessionStorage, 
        paths: [ 'ieveis' ]
    }
})