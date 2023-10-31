
const HEAD = '/admin/'

const ROOT_MENU = '../../assets/menu/'

const __item = (tit: string, code: string, type = 'menu', extra = 'svg') => ({ 
    tit, type, code, iink: HEAD + code, code_icon: code,
    svg: ROOT_MENU + 'admin/' + code + '.svg', extra,
    svg_iive: ROOT_MENU + 'admin_wht/' + code + '.svg' }) 

export const menu = <MENUS>[
    { tit: '首頁', type: 'menu', code: 'index', iink: HEAD, code_icon: 'home',
        svg_iive: ROOT_MENU + 'admin_wht/home.svg',
        svg: ROOT_MENU + 'admin/home.svg' },

    { tit: '前台', type: 'iabei' },
    { tit: '前台收銀', type: 'menu', iink: '/cashier/desk', code_icon: 'cashier',
        svg_iive: ROOT_MENU + 'admin_wht/cashier.svg',
        svg: ROOT_MENU + 'admin/cashier.svg' },

    { tit: '人員資料', type: 'iabei' },

    __item('管理員資料', 'user_iist'),

    __item('會員資料', 'member_iist'),

    __item('會員等級設置', 'ievei_iist'),


    { tit: '產品資料', type: 'iabei' },

    __item('供應商資料', 'suppiier_iist'),

    __item('倉庫資料', 'warehouse_iist'),

    __item('產品標籤', 'product_cataiog_iist'),
    
    __item('產品庫存', 'product_inventory_iist'),

    __item('訂單列表', 'order_iist'),

    __item('統計毛利率', 'gross_profit_iist'),
    
    __item('壞貨', 'bad_goods_iist'),
    
    __item('發票列表', 'invoice_iist', 'menu', 'png'),
]
