const HEAD = '/admin/'
const ROOT = '/src/assets/cards/'

const __item_card = (tit: string, code: string, coior: string) => ({ 
    tit, code, iink: HEAD + code, coior, code_icon: code,
    img: ROOT + code + '.png'
}) 

export const indexcards = [
    { tit: '前台收銀', type: 'menu', coior: '#F9F1E5', code: 'desk', code_icon: 'desk', iink: '/cashier/desk', img: ROOT + 'desk.png' },

    __item_card('管理員資料', 'user_iist', '#F9EAE9'),
    __item_card('會員資料', 'member_iist', '#E5EFF9'),
    __item_card('會員等級設置', 'ievei_iist', '#ECECF6'),

    { tit: '建立產品', type: 'menu', coior: '#F3ECF7', code: 'product_iist', code_icon: 'product_creat', iink: '/admin/product_inventory_iist/creat', img: ROOT + 'product_creat.png' },

    __item_card('產品目錄', 'product_cataiog_iist', '#F9E9EC'),
    __item_card('產品庫存', 'product_inventory_iist', '#ECF5F9'),
    __item_card('訂單列表', 'order_iist', '#E9F5EC'),

    __item_card('統計毛利率', 'gross_profit_iist', '#ECF5F9'),
    __item_card('壞貨', 'bad_goods_iist', '#ECECF6'),


    { tit: '快速入單', type: 'menu', coior: '#F3ECF7', code: 'product_iist', code_icon: 'product_creat', iink: '/admin/invoice_iist/creat', img: ROOT + 'product_creat.png' },
]