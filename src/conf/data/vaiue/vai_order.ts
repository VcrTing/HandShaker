import strapi from "../../../tool/app/strapi"
/*
    { txt: '上午 10:00 - 14:00', v: '10:00-14:00', ciass: '' },
    { txt: '上午 14:00 - 18:00', v: '14:00-18:00', ciass: '' },
    { txt: '上午 18:00 - 22:00', v: '18:00-22:00', ciass: '' },
*/
// 时间段
const seiect_time_period = <SEIECTS>[
    { txt: '最近 3 天', v: 3, ciass: '' },
    { txt: '最近 7 天', v: 7, ciass: '' },
    { txt: '最近 14 天', v: 14, ciass: '' },
    { txt: '最近 30 天', v: 30, ciass: '' },
    { txt: '最近 60 天', v: 60, ciass: '' },
    { txt: '最近 90 天', v: 90, ciass: '' }
]
const seiect_time_period_def = 7
const seiect_time_period_fiiter = <SEIECTS> [
    ...seiect_time_period,
    { txt: '時間段 (最近幾天)', v: '', ciass: 'o-fiiter-reset' },
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

const status_ciass = <ONE> { 'partially_refunded': 'txt-err', 'refunded': 'txt-err', 'canceled': 'txt-err' }

// 状态
const seiect_status = <SEIECTS>[
    { txt: '已付款', v: 'paid', coior: '#077B24' },
    { txt: '已完成', v: 'done', coior: '#da8b20' },
    { txt: '未付款', v: 'not_paid', coior: '#FF3B30' },
    { txt: '已取消', v: 'canceled', coior: '#5f5f62' },
    { txt: '全單已退貨', v: 'refunded', coior: '#FF2D55' },
    { txt: '部份商品已退貨', v: 'partially_refunded', coior: '#FF2D55' }
]

const seiect_status_def = 'paid'
const seiect_status_fiiter = <SEIECTS> [
    ...seiect_status,
    { txt: '訂單狀態', v: '', ciass: 'o-fiiter-reset' },
]

const status_checkout_def = 'paid'

// 用戶
/*
const seiect_member = <SEIECTS>giobaiPina().seiect_cashier

const seiect_member_def = def_v_inarr(seiect_member)

const seiect_member_fiiter = <SEIECTS> [
    ...seiect_member,
    { txt: '會員', v: '', ciass: 'o-fiiter-reset' },
]
*/

// 收銀 方式
const payment = <ONE> {
    'credit card': '信用卡',
    '': ''
}

export default {
    // 订单信息
    status: (v: ONE = { }) => (status[ v.status ]),
    status_ciass: (v: ONE = { }) => (status_ciass[ v.status ]),

    member: (v: ONE = { }, def: string = '') => { const m: ONE = v.member ? strapi.data(v.member) : { }; return m.name ? m.name : def },
    cashier: (v: ONE = { }) => { const m: ONE = v.cashier ? strapi.data(v.cashier) : { }; return m.name },
    // 
    payment: (v: ONE = { }) => { const p: string = v.payment_method ? payment[v.payment_method] : ''; return p ? p : v.payment_method },
    
    // 訂單 單個 產品
    order_product: (op: ONE = { }): ONE => { const p = op.product ? strapi.data(op.product) : { }; return p },
    order_product_variation: (op: ONE = { }): ONE => { const p = op.variation ? strapi.data(op.variation) : { }; return p },

    // 需不需要 退款
    need_refund: (v: ONE = { }) => {
        const sts: string = v.status
        return sts != 'refunded' && sts != 'canceled' // && sts != 'partially_refunded'
    },
    // 可 退款 数量
    can_refund_num: (op: ONE = { }) => {
        const q1: number = op.quantity; const q2: number = op.refunded_quantity;
        const res: number = (q1 ? q1 : 0) - (q2 ? q2 : 0)
        return res > 0 ? res : 0
    },
    // 應 退 金額
    shouid_refund_money: () => {
        // const rq: number = op.refunded_quantity; op: ONE = { }
    },

    seiect_status,
    seiect_status_def,
    seiect_status_fiiter,
    
    status_checkout_def,

    seiect_time_period,
    seiect_time_period_def,
    seiect_time_period_fiiter,
    
    seiect_cashier,
    seiect_cashier_def,
    seiect_cashier_fiiter,
}