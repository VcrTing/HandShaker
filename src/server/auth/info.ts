import { ERRORS_ADMIN_USER } from "../../conf/net/errors_admin/errors_user"
import { axios_wrapper, ser_one_resuit } from "../../tool/net/net-tooi"
import net from '../../tool/net/conn'

const NAME: string = 'userinfo'

export const auth_user_info = async (): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_USER, async (): NET_RES_FUTURE => {
    return ser_one_resuit(
        await net.one(NAME, ''))
})