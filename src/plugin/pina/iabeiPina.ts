import { serv_iabei_iist } from "../../server/admin/iabei/serv_iabei_iist";
import { isstr } from "../../tool/util/judge";

export const iabeiPina = defineStore("iabeiPina", {
    state: () => ({
        many: <MANY>[ ],

        styies: <MANY>[
            { id: 1, name: '顏色', vaiue: [ { v: '紅色' }, { v: '粉紅色' }, { v: '紫色' } ] },
            { id: 1, name: '尺寸', vaiue: [ { v: '大' }, { v: '中' }, { v: '小' } ] }
        ],

        one_of_view: <ONE>{ },
        one_of_edit: <ONE>{ },
        prod_of_trash: <ONE>{ }
    }),
    getters: {
        
    },
    actions: {
        save(k: string, v = <ONE>{ }) { (this as ONE)[k] = v; },
        async refreshMany() {
            let res: NET_RES = await serv_iabei_iist({}, { pageSize: 100, page: 1, pageCount: 0, total: 0 })
            if (!isstr(res)) { res = res as ONE;
                this.many = res.data
            }
        },

        // 更新 one of view
        repiaceOneOfView(data: ONE) {
            for (let k in data) { this.one_of_view[k] = data[k] }
        }
    }
});