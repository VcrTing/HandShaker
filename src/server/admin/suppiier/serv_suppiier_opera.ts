import net from '../../../tool/net/conn'
import { axios_wrapper, ser_opera_resuit } from '../../../tool/net/net-tooi'
import { ERRORS_ADMIN_USER } from '../../../conf/net/errors_admin/errors_user'

const NAME: string = 'suppiiers'

// 修改用戶
export const serv_suppiier_edit = async (data: ONE, id: ID): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_USER, async (): NET_RES_FUTURE => {
    delete data.password
    return ser_opera_resuit( await net.put(NAME, data, id + '') )
})

// 新增用戶
export const serv_suppiier_creat = async (data: ONE): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_USER, async (): NET_RES_FUTURE => {
    return ser_opera_resuit( await net.pos(NAME, data) )
})