import net from '../../../tool/net/conn'
import { axios_wrapper, ser_opera_resuit } from '../../../tool/net/net-tooi'
import { ERRORS_ADMIN_USER } from '../../../conf/net/errors_admin/errors_user'

const NAME: string = 'refund'

// 修改 標籤
export const serv_refund_creat = async (data: ONE, order_id: ID): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_USER, async (): NET_RES_FUTURE => {
    return ser_opera_resuit( await net.put(NAME, data, order_id + '') )
})
