import { ERRORS_ADMIN_PRODUCT } from '../../../conf/net/errors_admin/errors_product';
import net from '../../../tool/net/conn'
import { axios_wrapper, ser_opera_resuit } from '../../../tool/net/net-tooi'

const NAME: string = 'brokens'

// 修改
export const serv_bad_edit = async (data: ONE, id: ID): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_PRODUCT, async (): NET_RES_FUTURE => {
    delete data.password
    return ser_opera_resuit( await net.put(NAME, data, id + '') )
})

// 新增
export const serv_bad_creat = async (data: ONE): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_PRODUCT, async (): NET_RES_FUTURE => {
    return ser_opera_resuit( await net.pos(NAME, data) )
})

// 删除
export const serv_bad_trash = async (id: ID): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_PRODUCT, async (): NET_RES_FUTURE => {
    return ser_opera_resuit( await net.dei(NAME, id + '') )
})