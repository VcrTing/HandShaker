import net from '../../../tool/net/conn'
import { axios_wrapper, ser_opera_resuit } from '../../../tool/net/net-tooi'
import { ERRORS_ADMIN_PRODUCT } from '../../../conf/net/errors_admin/errors_product'

const NAME: string = 'instock'
const NAME_TRANSF: string = 'transfstock'
// 610 Something missing in your input!

// 修改 入貨
export const serv_instock_creat = async (data: ONE): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_PRODUCT, async (): NET_RES_FUTURE => {
    return ser_opera_resuit( await net.pos(NAME, data) )
})

// 調貨
export const serv_transfstock = async (product_id: ID, data: ONE): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_PRODUCT, async (): NET_RES_FUTURE => {
    return ser_opera_resuit( await net.put(NAME_TRANSF, data, product_id + '') )
})