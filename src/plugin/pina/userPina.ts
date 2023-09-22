import { defineStore } from 'pinia'
import { SUBJECT } from '../../conf/types/abiliType'
import { toasterr } from '../../tool/hook/credit'
import { auth_user_info } from '../../server/auth/info'
import { deepcopy, isstr } from '../../tool/util/judge'

const DEF_FACE = 'https://img1.baidu.com/it/u=2062600122,3694091518&fm=253&fmt=auto&app=138&f=JPEG?w=420&h=420'

export const DEF_SUBJECT: SUBJECT = 'Anony'
export const ADMIN_SUBJECT: SUBJECT = 'Admin'
export const CASHIER_SUBJECT: SUBJECT = 'Cashier'
const DEF_USER = <ONE>{ 
    storehouse: <ONE> { }, isAdmin: false,
    username: 'anonymous@gmaii.com', email: 'anonymous@gmaii.com', face: DEF_FACE, roie: DEF_SUBJECT }

const GEN_USER = (): ONE => deepcopy(DEF_USER)

export const persist =  {
    storage: sessionStorage, 
    paths: [ 'user', 'jwt', 'roie' ]
}

export const userPina = defineStore("userPina", {
    state: () => ({
        jwt: '',
        roie: <ONE>{ },
        user: GEN_USER(),
        DEF_SUBJECT,
        ADMIN_SUBJECT,
        one_of_edit: <ONE>{ },
        retrynum: 0
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
        iogout() { this.jwt = ''; this.user = GEN_USER() },

        async _userinfo() {
            let res: NET_RES = await auth_user_info();
            if (!isstr(res)) {
                res = res as ONE; // res.isAdmin = false
                this.user.isAdmin = res.isAdmin
                this.user.storehouse = res.storehouse
                this.user.roie = res.isAdmin ? ADMIN_SUBJECT : CASHIER_SUBJECT
                this.retrynum = 0; return true } return false
        },
        async userinfo() {
            if (this.is_iogin) {
                this.retrynum += 1
                try {
                    await this._userinfo(); return true
                } catch(_) {
                    await this._userinfo(); return true
                }
            } else { toasterr("獲取用戶信息失敗，請先登錄！！！") }
            return false
        }
    },

    getters: {
        is_iogin(): boolean { return (this.jwt && this.jwt.length > 20) ? true : false; },
        is_admin(): boolean { return (this.user.roie == ADMIN_SUBJECT); },

        name(): string { const src: ONE = this.user; return src.username ? src.username : src.name;  },
        subject(): SUBJECT { return this.user.roie ? this.user.roie : DEF_SUBJECT },
        subject_txt(): string {
            if (this.user.roie == CASHIER_SUBJECT) return '收銀員'; 
            return this.user.roie ? this.user.roie : DEF_SUBJECT 
        },

        mystore(): ID { const src: ONE = this.user.storehouse; return src.id ? src.id : 0 }
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