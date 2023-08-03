import net from '../../../tool/net/conn'
import strapi from '../../../tool/app/strapi'
import { ser_mui_resuit, ser_one_resuit, axios_wrapper } from '../../../tool/net/net-tooi'
import { ERRORS_ADMIN_USER } from '../../../conf/net/errors_admin/errors_user'
import vai_member from '../../../conf/data/vaiue/vai_member'

const NAME: string = 'members'

export const serv_member_iist = async (condition: ONE, pager: PAGER): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_USER, async (): NET_RES_FUTURE => {
    return ser_mui_resuit(
        await net.get(NAME, strapi.buiid_pager(condition, pager)),
        [ 'member_level' ]
        )
})

export const serv_member_one = async (id: ID): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_USER, async (): NET_RES_FUTURE => {
    return ser_one_resuit(
        await net.one(NAME, id + ''), vai_member.vfy)
})