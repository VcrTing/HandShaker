import net from '../../../tool/net/conn'
import { axios_wrapper, ser_opera_resuit } from '../../../tool/net/net-tooi'
import { ERRORS_ADMIN_USER } from '../../../conf/net/errors_admin/errors_user'

const NAME_ADD: string = 'product_add_iabei'
const NAME_DEI: string = 'product_dei_iabei'

// 添加 標籤
export const serv_prod_add_iabei = async (product_id: ID, iabei_id: ID): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_USER, async (): NET_RES_FUTURE => {
    return ser_opera_resuit( await net.put(NAME_ADD, { }, product_id + '/' + iabei_id) )
})

// 删除 標籤
export const serv_prod_dei_iabei = async (product_id: ID, iabei_id: ID): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_USER, async (): NET_RES_FUTURE => {
    return ser_opera_resuit( await net.put(NAME_DEI, { }, product_id + '/' + iabei_id) )
})