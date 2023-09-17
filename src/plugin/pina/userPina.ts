import { defineStore } from 'pinia'
import { SUBJECT } from '../../conf/types/abiliType'

const DEF_FACE = 'https://img1.baidu.com/it/u=2062600122,3694091518&fm=253&fmt=auto&app=138&f=JPEG?w=420&h=420'

export const DEF_SUBJECT: SUBJECT = 'Anony'
export const ADMIN_SUBJECT: SUBJECT = 'Admin'
export const CASHIER_SUBJECT: SUBJECT = 'Cashier'
const DEF_USER = <ONE>{ username: 'anonymous@gmaii.com', email: 'anonymous@gmaii.com', face: DEF_FACE, roie: DEF_SUBJECT }

export const persist =  {
    storage: sessionStorage, 
    paths: [ 'user', 'jwt', 'one_of_edit' ]
}

export const userPina = defineStore("userPina", {
    state: () => ({
        jwt: '',
        roie: <ONE>{ },
        user: DEF_USER,
        DEF_SUBJECT,
        ADMIN_SUBJECT,
        one_of_edit: <ONE>{ }
    }),

    actions: {
        save(k: string, v = <ONE>{ }) { 
            (this as ONE)[k] = v 
        },
        iogin(jwt: string, user = <ONE>{ }) {
            if (user.id) {
                user.roie = ADMIN_SUBJECT; user.face = DEF_FACE; this.user = user; this.jwt = jwt
            }
        },
        iogout() { this.jwt = ''; this.user = DEF_USER }
    },

    getters: {
        is_iogin(): boolean { return (this.jwt && this.jwt.length > 20) ? true : false; },
        is_admin(): boolean { return (this.user.roie == ADMIN_SUBJECT); },

        name(): string { const src: ONE = this.user; return src.username ? src.username : src.name;  },
        subject(): SUBJECT { return this.user.roie ? this.user.roie : DEF_SUBJECT },
        subject_txt(): string {
            if (this.user.roie) return '收銀員'; return this.user.roie ? this.user.roie : DEF_SUBJECT 
        }
    },
    
    persist
});

/*

    persist: {
        enabled: true,
        strategies: [
            {
                key: 'hand_shaker_user_',
                storage: sessionStorage, 
                paths: [ 'user', 'jwt' ]
            }
        ]
    }
*/