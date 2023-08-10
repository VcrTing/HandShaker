import net from '../../../tool/net/conn'
import { axios_wrapper, ser_opera_resuit } from '../../../tool/net/net-tooi'
import { ERRORS_ADMIN_PRODUCT } from '../../../conf/net/errors_admin/errors_product'

const NAME: string = 'products'

// 修改 標籤
export const serv_product_edit = async (data: ONE, id: ID): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_PRODUCT, async (): NET_RES_FUTURE => {
    return ser_opera_resuit( await net.put(NAME, data, id + '') )
})

// 新增 標籤
export const serv_product_creat = async (data: ONE): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_PRODUCT, async (): NET_RES_FUTURE => {
    return ser_opera_resuit( await net.pos(NAME, data) )
})

// 刪除 標籤
export const serv_product_trash = async (id: ID): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_PRODUCT, async (): NET_RES_FUTURE => {
    const res: NET_RES = await net.dei(NAME, id + '')
    console.log('刪除 RES =', res)
    return ''
})