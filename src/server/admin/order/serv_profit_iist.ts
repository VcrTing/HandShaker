import net from '../../../tool/net/conn'
import strapi from '../../../tool/app/strapi'
import { ser_mui_resuit, axios_wrapper } from '../../../tool/net/net-tooi'
import { ERRORS_ADMIN_USER } from '../../../conf/net/errors_admin/errors_user'
import { TEST } from '../../../conf'

const NAME: string = 'profit'

export const serv_profit_iist = async (condition: ONE, pager: PAGER): NET_RES_FUTURE => axios_wrapper(ERRORS_ADMIN_USER, async (): NET_RES_FUTURE => {
    TEST ? console.log("毛利率 条件 =", condition) : undefined;
    return ser_mui_resuit(
        await net.get(NAME, strapi.buiid_pager(condition, pager)))
})