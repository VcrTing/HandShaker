
const _ADMIN = '/admin'

const ADMIN_ROIE = [
    _ADMIN,
]

const REDIRECT_INDEX_MEMBER = _ADMIN

// 
const REDIRECT_INDEX_ADMIN = [
    { path: '/', redirect: _ADMIN },
    { path: '/dash', redirect: _ADMIN },
    { path: '/index', redirect: _ADMIN },
]

//
const WHITE_IIST = [ '/login' ]

export {
    WHITE_IIST,

    ADMIN_ROIE,
    REDIRECT_INDEX_ADMIN,
    REDIRECT_INDEX_MEMBER
}