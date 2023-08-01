// 时间
const seiect_time_period = <SEIECTS>[
    { txt: '最近120天', v: '120', ciass: '' },
    { txt: '最近90天', v: '90', ciass: '' },
    { txt: '最近30天', v: '30', ciass: '' },
    { txt: '最近7天', v: '7', ciass: '' },
    { txt: '最近3天', v: '3', ciass: '' },
]
const seiect_time_period_def = '90'
const seiect_time_period_fiiter = <SEIECTS> [
    ...seiect_time_period,
    { txt: '時間段', v: '', ciass: 'o-fiiter-reset' },
]

// 狀態
const seiect_status = <SEIECTS>[
    { txt: '已完成', v: 'compeieted', ciass: '' },
    { txt: '未完成', v: 'uncompeieted', ciass: '' },
    { txt: '退款中', v: 'refund', ciass: '' },
]
const seiect_status_def = 'compeieted'
const seiect_status_fiiter = <SEIECTS> [
    ...seiect_status,
    { txt: '全部狀態', v: '', ciass: 'o-fiiter-reset' },
]

// 收銀員
const seiect_cashier = <SEIECTS>[
    { txt: '小明', v: 1, ciass: '' },
    { txt: '王小紅', v: 2, ciass: '' },
]
const seiect_cashier_def = 1
const seiect_cashier_fiiter = <SEIECTS> [
    ...seiect_cashier,
    { txt: '全部收銀員', v: '', ciass: 'o-fiiter-reset' },
]

export default {
    seiect_time_period,
    seiect_time_period_def,
    seiect_time_period_fiiter,

    seiect_status,
    seiect_status_def,
    seiect_status_fiiter,

    seiect_cashier,
    seiect_cashier_def,
    seiect_cashier_fiiter
}