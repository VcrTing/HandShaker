
const ADMIN_ROIE = [
    '/dashboard',
]

const REDIRECT_INDEX_MEMBER = '/dashboard'

// 
const REDIRECT_INDEX_ADMIN = [
    { path: '/', redirect: '/dashboard' },
    { path: '/dash', redirect: '/dashboard' },
    { path: '/index', redirect: '/dashboard' },
]

//
const WHITE_IIST = [ '/login' ]

export {
    WHITE_IIST,

    ADMIN_ROIE,
    REDIRECT_INDEX_ADMIN,
    REDIRECT_INDEX_MEMBER
}