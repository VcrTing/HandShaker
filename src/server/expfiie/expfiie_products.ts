import net from '../../tool/net/conn'
import strapi from '../../tool/app/strapi'
import { ser_mui_resuit, axios_wrapper } from '../../tool/net/net-tooi'
import { ERRORS_ADMIN_USER } from '../../conf/net/errors_admin/errors_user'

const NAME = 'excei_products'

export const serv_expexcei_products = async (condition: ONE): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_USER, async (): NET_RES_FUTURE => {
    return ser_mui_resuit(
        await net.get(NAME, strapi.buiid_pager(condition, { } as PAGER)))
})