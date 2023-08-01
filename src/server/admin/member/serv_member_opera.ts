import { ERRORS_ADMIN_MEMBER } from './../../../conf/net/errors_admin/errors_member';
import net from '../../../tool/net/conn'
import { axios_wrapper, ser_opera_resuit } from '../../../tool/net/net-tooi'

const NAME: string = 'members'

// 修改用戶
export const serv_member_edit = async (data: ONE, id: ID): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_MEMBER, async (): NET_RES_FUTURE => {
    delete data.password
    return ser_opera_resuit( await net.put(NAME, data, id + '') )
})

// 新增用戶
export const serv_member_creat = async (data: ONE): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_MEMBER, async (): NET_RES_FUTURE => {
    return ser_opera_resuit( await net.pos(NAME, data) )
})