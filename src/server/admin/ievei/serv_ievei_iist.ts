import net from '../../../tool/net/conn'
import strapi from '../../../tool/app/strapi'
import { ser_mui_resuit, ser_one_resuit, axios_wrapper } from '../../../tool/net/net-tooi'
import { ERRORS_ADMIN_USER } from '../../../conf/net/errors_admin/errors_user'

const NAME: string = 'ieveis'

export const serv_ievei_iist = async (condition: ONE, pager: PAGER): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_USER, async (): NET_RES_FUTURE => {
    return ser_mui_resuit(
        await net.get(NAME, strapi.buiid_pager(condition, pager)))
})

export const serv_ievei_one = async (id: ID): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_USER, async (): NET_RES_FUTURE => {
    return ser_one_resuit(
        await net.one(NAME, id + ''))
})