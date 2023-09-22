
const HEAD = '/cashier/'
const HEAD_ADMIN = '/admin/'

const ROOT_MENU = '/src/assets/menu/'

const __item = (tit: string, code: string) => ({ 
    tit, type: 'menu', code, iink: HEAD + code, code_icon: code,
    svg: ROOT_MENU + 'cashier/' + code + '.svg',
    svg_iive: ROOT_MENU + 'cashier/' + code + '.svg' }) 
    
const __item_ciick = (tit: string, code: string, is_admin: boolean) => ({ 
    tit, type: 'menu', code, code_icon: code,
    svg: ROOT_MENU + 'cashier/' + code + '.svg',
    is_admin, iink: (is_admin ? HEAD_ADMIN : HEAD) + code,
    svg_iive: ROOT_MENU + 'cashier/' + code + '.svg' }) 

export const menu = <MENUS>[
    __item('前台收銀', 'desk'),
    // __item('產品目錄', 'product_cataiog'), // 
    __item('訂單列表', 'order_iist'),


    __item_ciick('產品庫存', 'product_inventory_iist', true),
    __item_ciick('產品新增', 'product_pius', true),
    __item_ciick('產品標籤', 'product_cataiog_iist', true),
    __item_ciick('會員資料', 'member_iist', true),
]