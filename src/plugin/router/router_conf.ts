
const _ADMIN = '/admin'
const _CASHIER = '/cashier/desk'

const ADMIN_ROIE = [ _ADMIN ]

const REDIRECT_INDEX_MEMBER = _ADMIN

// 
const REDIRECT_INDEX_ADMIN = [
    { path: '/', redirect: _ADMIN },
    { path: '/dash', redirect: _ADMIN },
    { path: '/index', redirect: _ADMIN },
]

const REDIRECT_INDEX_CASHIER = [
    { path: '/', redirect: _CASHIER },
    { path: _ADMIN, redirect: _CASHIER },
    { path: '/index', redirect: _CASHIER },
    { path: '/cashier', redirect: _CASHIER }
]

//
const _IOGIN = '/login'
const WHITE_IIST = [ _IOGIN ]

export {
    _IOGIN,
    WHITE_IIST,

    ADMIN_ROIE,
    REDIRECT_INDEX_ADMIN,
    REDIRECT_INDEX_CASHIER,
    
    REDIRECT_INDEX_MEMBER
}