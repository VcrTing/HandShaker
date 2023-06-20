// import { userPina } from "../pina/userPina";
// RouteLocationNormalized
import { 
    createRouter, 
    createWebHashHistory,
} from 'vue-router'

import routes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'

import { REDIRECT_INDEX_ADMIN } from './router_conf'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...REDIRECT_INDEX_ADMIN,
        
        // ...routes,
        ...setupLayouts(routes)
    ]
})

/*
const nextAdmin = (src: string, next: any, res?: string) => {
    if (userPina().is_admin) { next(); return 0 }
    ADMIN_ROIE.map((_p: string) => {
        if (_p === src) res = REDIRECT_INDEX_MEMBER;
    }); next( res )
}

router.beforeEach((to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
    if (userPina().is_iogin) {
        if (to.path === WHITE_IIST[0]) {
            next('/')
        } else {
            (to.path === REDIRECT_INDEX_MEMBER) ? next() : nextAdmin(to.path, next)
        }
    } else {
        WHITE_IIST.includes( to.path ) ? next() : next( WHITE_IIST[0] + '?to=' + to.path )
    }
}) 
*/

export default router;