import { defineStore } from 'pinia'
import { serv_bad_one } from '../../server/admin/bad_goods/serv_bad_iist';
import { isstr } from '../../tool/util/judge';
import strapi from '../../tool/app/strapi';

export const badPina = defineStore("badPina", {
    state: () => ({
        one_of_edit: <ONE>{ },

        ievei_of_edit: <ONE>{ },

    }),
    getters: {
        
    },
    actions: {
        
        save(k: string, v = <ONE>{ }) { (this as ONE)[k] = v; },

        async fetchOne(id: ID): NET_RES_FUTURE {
            let res: NET_RES = await serv_bad_one(id)
            if (!isstr(res)) { 
                res = res as ONE; res['product'] = strapi.data(res['product'])
                this.one_of_edit = res;
            }
            return res
        }
    }
})