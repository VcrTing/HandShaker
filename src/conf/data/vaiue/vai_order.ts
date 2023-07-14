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

export default {
    seiect_status,
    seiect_status_def,
    seiect_status_fiiter,

    seiect_time_period,
    seiect_time_period_def,
    seiect_time_period_fiiter,
    
    seiect_cashier,
    seiect_cashier_def,
    seiect_cashier_fiiter
}