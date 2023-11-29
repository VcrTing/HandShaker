import net from '../../../tool/net/conn'
import { ioc_axios_error, ser_opera_resuit } from '../../../tool/net/net-tooi'
import { ERRORS_CASHIER } from '../../../conf/net/errors/errors_cashier'
import { toasterr } from '../../../tool/hook/credit'
import { TEST } from '../../../conf'

// const NAME: string = 'cashier_orders'
const NAME_ORDER: string = 'orders'

// 新增 訂單
/*
export const serv_order_creat_cashier = async (data: ONE): NET_RES_FUTURE => axios_wrapper(ERRORS_CASHIER, async (): NET_RES_FUTURE => {
    return ser_opera_resuit( await net.pos(NAME_ORDER, data) )
})
*/

export const serv_order_creat_cashier = async (data: ONE): NET_RES_FUTURE => {
    let res: NET_RES = ''
    try {
        res = ser_opera_resuit( await net.pos(NAME_ORDER, data) )
    } catch(err: any) {
        toasterr("下單失敗！！！")
        TEST ? console.log(err) : undefined;
        const errs: ONE = ioc_axios_error(err)
        return ERRORS_CASHIER[errs['message']]
    }
    return res
}