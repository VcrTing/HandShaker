import net from '../../../tool/net/conn'
import { axios_wrapper, ser_opera_resuit } from '../../../tool/net/net-tooi'
import { ERRORS_CASHIER } from '../../../conf/net/errors/errors_cashier'

// const NAME: string = 'cashier_orders'
const NAME_ORDER: string = 'orders'

// 新增 訂單
export const serv_order_creat_cashier = async (data: ONE): NET_RES_FUTURE => axios_wrapper(ERRORS_CASHIER, async (): NET_RES_FUTURE => {
    return ser_opera_resuit( await net.pos(NAME_ORDER, data) )
})
