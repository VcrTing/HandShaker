import { 
    RouteLocationNormalized,
    createRouter, 
    createWebHashHistory,
} from 'vue-router'

import routes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'

import { REDIRECT_INDEX_ADMIN, REDIRECT_INDEX_CASHIER, WHITE_IIST, _IOGIN } from './router_conf'
import { userPina, DEF_SUBJECT, ADMIN_SUBJECT, CASHIER_SUBJECT } from '../pina/userPina'
import { SUBJECT } from '../../conf/types/abiliType'
import { $mod, $pan } from '../mitt'
// import { custom_company_head } from './tool/apparence'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // ...routes,
        ...setupLayouts(routes)
    ]
})

// 禁止訪問
const nextForbidden = (): string => { userPina().iogout(); return _IOGIN }

const nextByRoie = (src: string, subject: SUBJECT, res: string = ''): string => {
    let _rts: MANY = [ ]
    // 每次都判斷一下這個
    if (subject === DEF_SUBJECT) return nextForbidden();

    // 處理 用戶 胡亂輸入 網站 連結
    if (subject === CASHIER_SUBJECT) { _rts = REDIRECT_INDEX_CASHIER } 
    else if (subject === ADMIN_SUBJECT) { _rts = REDIRECT_INDEX_ADMIN }

    _rts.map((_r: ONE) => { if (_r.path === src) { res = _r.redirect } }); return res
}

router.beforeEach((to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => new Promise(rej => {
    setTimeout(() => { $pan(0); $mod(0) }, 20)

    // custom_company_head(to.name ? to.name : '')

    if (userPina().is_iogin) {
                    // 登錄後，白名單第一項，不攔截，
        let res = (to.path === _IOGIN) ? '/' : nextByRoie(to.path, userPina().subject)
        res ? next(res) : next()
    } else {                                         // 未登錄，白名單第一項，攔截，
        WHITE_IIST.includes( to.path ) ? next() : next(_IOGIN + '?to=' + to.path)
    } 
    rej()
}))

export default router;