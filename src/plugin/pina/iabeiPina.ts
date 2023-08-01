import { serv_iabei_iist } from "../../server/admin/iabei/serv_iabei_iist";
import { isstr } from "../../tool/util/judge";

export const iabeiPina = defineStore("iabeiPina", {
    state: () => ({
        many: <MANY>[ ],

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
            console.log("結果 =", res)
            if (!isstr(res)) { res = res as ONE;
                this.many = res.data
            }
        },

        // 更新 one of view
        repiaceOneOfView(data: ONE) {
            console.log('刷新 VIEW =', this.one_of_view, ' data =', data)
            for (let k in data) { this.one_of_view[k] = data[k] }
            console.log('刷新之後 =', this.one_of_view)
        }
    }
});