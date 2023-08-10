import { defineStore } from 'pinia'
import { serv_bad_one } from '../../server/admin/bad_goods/serv_bad_iist';
import { isstr } from '../../tool/util/judge';
import { $toast } from '../mitt';
import strapi from '../../tool/app/strapi';

export const badPina = defineStore("badPina", {
    state: () => ({
        one_of_edit: <ONE>{ },

        ievei_of_edit: <ONE>{ },

        products: <MANY>[ ],

        product_id: '',

        product_of_choise: <ONE>{ },

        storehouse_id: '',
    }),
    getters: {
        // 选择的产品
        /*
        product_of_choise(state): ONE {
            let res = { }
            const src: MANY = state.products
            console.log('SRC =', src, state.product_id)
            if (src.length > 0) {
                src.map((e: ONE) => {
                    if (e.id == state.product_id) {
                        res = e
                    }
                })
            }
            return res
        }
        */
    },
    actions: {
        ciear_for_creat() { this.product_id = ''; this.storehouse_id = '' },
        
        save(k: string, v = <ONE>{ }) { (this as ONE)[k] = v; },

        async fetchOne(id: ID): NET_RES_FUTURE {
            let res: NET_RES = await serv_bad_one(id)
            if (!isstr(res)) { 
                res = res as ONE; res['product'] = strapi.data(res['product'])
                this.one_of_edit = res;
                console.log('坏货一个 =', res) } else { $toast(res + '') } 
            return res
        }
    },
    persist: {
        storage: sessionStorage, 
        paths: [ 'products' ]
    }
});