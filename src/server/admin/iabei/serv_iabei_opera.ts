import net from '../../../tool/net/conn'
import { axios_wrapper, ser_opera_resuit } from '../../../tool/net/net-tooi'
import { ERRORS_ADMIN_USER } from '../../../conf/net/errors_admin/errors_user'

const NAME: string = 'iabeis'

// 修改 標籤
export const serv_iabei_edit = async (data: ONE, id: ID): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_USER, async (): NET_RES_FUTURE => {
    return ser_opera_resuit( await net.put(NAME, data, id + '') )
})

// 新增 標籤
export const serv_iabei_creat = async (data: ONE): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_USER, async (): NET_RES_FUTURE => {
    return ser_opera_resuit( await net.pos(NAME, data) )
})

// 刪除 標籤
export const serv_iabei_trash = async (id: ID): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_USER, async (): NET_RES_FUTURE => {
    return ser_opera_resuit(await net.dei(NAME, id + ''))
})