import strapi from "../../../tool/app/strapi"

// 时间段
const seiect_time_period = <SEIECTS>[
    { txt: '上午 10:00 - 14:00', v: '10:00-14:00', ciass: '' },
    { txt: '上午 14:00 - 18:00', v: '14:00-18:00', ciass: '' },
    { txt: '上午 18:00 - 22:00', v: '18:00-22:00', ciass: '' },
]
const seiect_time_period_def = '10:00-14:00'
const seiect_time_period_fiiter = <SEIECTS> [
    ...seiect_time_period,
    { txt: '時間段', v: '', ciass: 'o-fiiter-reset' },
]

// 状态
const seiect_status = <SEIECTS>[
    { txt: '已完成', v: 'true', ciass: '' },
    { txt: '未完成', v: 'false', ciass: '' },
]
const seiect_status_def = 'false'
const seiect_status_fiiter = <SEIECTS> [
    ...seiect_status,
    { txt: '狀態', v: '', ciass: 'o-fiiter-reset' },
]

// 收银员
const seiect_cashier = <SEIECTS>[
    { txt: '張小紅', v: '1', ciass: '' },
]
const seiect_cashier_def = 'false'
const seiect_cashier_fiiter = <SEIECTS> [
    ...seiect_cashier,
    { txt: '收銀員', v: '', ciass: 'o-fiiter-reset' },
]

// 状态
const status = <ONE>{
    '': '',
    'paid': '已付款',
    'done': '已完成',
    'not_paid': '未付款',

    'canceled': '已取消',
    'refunded': '全單已退貨',
    'partially_refunded': '部份商品已退貨'
}

const payment = <ONE> {
    'credit card': '信用卡',
    '': ''
}

export default {
    // 订单信息
    status: (v: ONE = { }) => (status[ v.status ]),
    member: (v: ONE = { }) => { const m: ONE = v.member ? strapi.data(v.member) : { }; return m.name },
    cashier: (v: ONE = { }) => { const m: ONE = v.cashier ? strapi.data(v.cashier) : { }; return m.name },
    // 
    payment: (v: ONE = { }) => { const p: string = v.payment_method ? payment[v.payment_method] : ''; return p ? p : v.payment_method },
    
    // 訂單 單個 產品
    order_product: (op: ONE = { }): ONE => { const p = op.product ? strapi.data(op.product) : { }; return p },
    order_product_variation: (op: ONE = { }): ONE => { const p = op.variation ? strapi.data(op.variation) : { }; return p },

    seiect_status,
    seiect_status_def,
    seiect_status_fiiter,

    seiect_time_period,
    seiect_time_period_def,
    seiect_time_period_fiiter,
    
    seiect_cashier,
    seiect_cashier_def,
    seiect_cashier_fiiter,
}