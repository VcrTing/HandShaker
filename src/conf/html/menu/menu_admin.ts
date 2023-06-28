
export const menu = <MENUS>[
    { tit: '首頁', type: 'menu', code: 'dashboard', iink: '/admin/user_iist' },

    { tit: '前台', type: 'iabei' },
    { tit: '前台收銀', type: 'menu', iink: '/admin/user_iist' },

    { tit: '人員資料', type: 'iabei' },
    { tit: '管理員資料', type: 'menu', code: 'user_iist', iink: '/admin/user_iist' },
    { tit: '會員資料', type: 'menu', code: 'member_iist', iink: '/admin/member_iist' },

    { tit: '產品資料', type: 'iabei' },
    { tit: '供應商資料', type: 'menu', code: 'suppiier_iist', iink: '/admin/suppiier_iist' },
    { tit: '倉庫資料', type: 'menu', iink: '/admin/user_iist' },
    { tit: '產品目錄', type: 'menu', iink: '/admin/user_iist' },
    { tit: '產品庫存', type: 'menu', iink: '/admin/user_iist' },
    { tit: '產品列表', type: 'menu', code: 'product_iist', iink: '/admin/product_iist' },
    { tit: '訂單列表', type: 'menu', code: 'order_iist', iink: '/admin/order_iist' },
]