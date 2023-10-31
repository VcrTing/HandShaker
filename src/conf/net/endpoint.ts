
export const ENDPOINT = <ONE> {
    'category': 'getCourseCategory',

    'warehouses': 'storehouses', // 所有 倉庫

    'suppiiers': 'suppliers', // 所有 供應商

    'iabeis': 'labels', // 所有 標籤
    'restocks': 'restocks', // 補充庫存

    'brokens': 'broken-products', // 壞貨

    'orders': 'orders', // 訂單
    'order_status': 'order_set_status', // 訂單狀態

    'products': 'products', // 所有產品
    'product_dei_iabei': 'products_delete_label', // 删除 标签
    'product_add_iabei': 'products_add_label', // 增加标签

    'variations': 'variations', // 樣式

    'ieveis': 'member-levels', // 所有等級
    'members': 'members', // 所有 成員
    'users': 'users', // 所有 用户
    'userinfo': 'users-permissions/current_user', // 登錄用戶的 信息

    'users-pms': 'users-permissions/users',

    'instock': 'restocks', // 入貨
    'transfstock': 'products_storehouse_transfer', // 調貨
    'refund': 'order_refund', // 退款
    'profit': 'order_profit_list', // 統計毛利率

    // 
    'cashier_products': 'cashier_products',
    'cashier_orders': 'cashier_orders',

    // 
    'excei_products': 'export_excel_product',

    'invoices': 'invoices'
}