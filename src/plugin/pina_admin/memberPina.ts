import { defineStore } from 'pinia'
import { serv_member_one } from '../../server/admin/member/serv_member_iist';
import { isstr } from '../../tool/util/judge';
import { $toast } from '../mitt';

export const memberPina = defineStore("memberPina", {
    state: () => ({
        one_of_edit: <ONE>{ },

        ievei_of_edit: <ONE>{ },
    }),
    actions: {
        save(k: string, v = <ONE>{ }) { (this as ONE)[k] = v; },
        async fetchOne(id: ID): NET_RES_FUTURE {
            let res: NET_RES = await serv_member_one(id)
            if (!isstr(res)) { 
                res = res as ONE;
                res.member_level = res.member_level ? res.member_level.id : 1
                this.one_of_edit = res } else { $toast(res + '') } 
            return res
        }
    }
});