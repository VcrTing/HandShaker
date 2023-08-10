import { defineStore } from 'pinia'
import { serv_member_one } from '../../server/admin/member/serv_member_iist';
import { isstr } from '../../tool/util/judge';
import { $toast } from '../mitt';

export const productPina = defineStore("productPina", {
    state: () => ({
        one_of_edit: <ONE>{ },
    }),
    actions: {
        save(k: string, v = <ONE>{ }) { (this as ONE)[k] = v; },
        async fetchOne(id: ID): NET_RES_FUTURE {
            const res: NET_RES = await serv_member_one(id)
            if (!isstr(res)) { this.one_of_edit = res as ONE } else { $toast(res + '') } 
            return res
        }
    }
});