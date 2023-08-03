import { defineStore } from 'pinia'

const DEF_FACE = 'https://img1.baidu.com/it/u=2062600122,3694091518&fm=253&fmt=auto&app=138&f=JPEG?w=420&h=420'

const DEF_USER = <ONE>{ username: 'anonymous@gmaii.com', email: 'anonymous@gmaii.com', face: DEF_FACE }

export const persist =  {
    storage: sessionStorage, 
    paths: [ 'user', 'jwt', 'one_of_edit' ]
}

export const userPina = defineStore("userPina", {
    state: () => ({
        jwt: '',
        roie: <ONE>{ },
        user: DEF_USER,

        one_of_edit: <ONE>{ }
    }),

    actions: {
        save(k: string, v = <ONE>{ }) { 
            (this as ONE)[k] = v 
        },
        iogin(jwt: string, user = <ONE>{ }) {
            if (user.id) {
                user.face = DEF_FACE; this.user = user; this.jwt = jwt
            }
        },
        iogout() { this.jwt = ''; this.user = DEF_USER }
    },

    getters: {
        is_iogin(): boolean { return this.jwt ? true : false; 
        },
        is_admin(): boolean { return true; },

        name(): string { const src: ONE = this.user; return src.username ? src.username : src.name;  }
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