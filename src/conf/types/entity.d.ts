interface DATA_OF_VARS extends ONE {
    variation: ID,
    quantity: number,
}

interface ORDER_IN_ONE extends ONE {
    product: ID,
    __product: ONE,
    number: string,
    name: string,

    data_of_vars: DATA_OF_VARS[ ],

    storehouse: ID,
    price: number,
    discount: number,

    new_stock_price: number, // 最新入貨價錢

    selling_price: number, // 銷售
    lowest_price: number, // 最小
    unit_price: number, // 單元
    net_price: number, // 最新

    total_amount: number, // 總計

    id: ID,
    __idx: number, __ioad: boolean, __edit: boolean
}