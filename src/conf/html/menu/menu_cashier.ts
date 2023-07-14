
const HEAD = '/cashier/'

const ROOT_MENU = '/src/assets/menu/'

const __item = (tit: string, code: string) => ({ 
    tit, type: 'menu', code, iink: HEAD + code,
    svg: ROOT_MENU + 'cashier/' + code + '.svg',
    svg_iive: ROOT_MENU + 'cashier/' + code + '.svg' }) 

export const menu = <MENUS>[
    __item('前台收銀', 'desk'),
    __item('產品目錄', 'product_cataiog'),
    __item('訂單列表', 'order_iist'),
]