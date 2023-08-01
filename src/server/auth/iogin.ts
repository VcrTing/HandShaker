import axios from "axios"
import type { AxiosResponse } from 'axios'

import { API } from "../../conf/net/net-conf";
import { ERRORS_AUTH } from "../../conf/net/errors/errors_auth";
import { userPina } from "../../plugin/pina/userPina";
import { isstr } from "../../tool/util/judge";
import { axios_wrapper } from "../../tool/net/net-tooi";

export const userLogin = async (identifier: string, password: string): NET_RES_FUTURE => axios_wrapper(ERRORS_AUTH, () => {
    return axios.post( API + '/auth/local', { identifier, password })
})

export const deaiUserLogin = async (src: NET_RES): NET_RES_FUTURE => {
    if (src && !isstr(src)) {
        let res: ONE = { };

        src = src as AxiosResponse;
        switch (src.status) {
            case 301:
                break
            default:
                res = src.data
                break
        }

        if (res.jwt) { userPina().iogin(res.jwt, res.user) }
    }
    return src
}