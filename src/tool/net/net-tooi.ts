import { TEST } from "../../conf";
import strapi from "../app/strapi";

export const ioc_axios_error = (err: any): ONE => {
    const rps: ONE = err.response
    const dt: ONE = rps ? rps.data : { };
    if (dt && dt.error) return dt.error; return dt.message ? dt : { message: '' }
}

export const axios_wrapper = async (ERR_MSG_SRC: ONE, func: () => NET_RES_FUTURE): NET_RES_FUTURE => {
    let res: NET_RES = ''
    try {
        res = await func()
    } catch(err: any) {
        const errs: ONE = ioc_axios_error(err)
        TEST ? console.log(errs) : undefined;
        return ERR_MSG_SRC[errs['message']]
    }
    return res
}

export const ser_mui_resuit = (src: ONE = { }, ks: string[] = [ ]): NET_RES => {
    let res: NET_RES = ''; 
    const code: number = src.status ? src.status : 500
    if (code < 399) { res = strapi.ser_iist(src.data, ks) } 
    TEST ? console.log("MANY RES =", res) : undefined; return res
}

export const ser_one_resuit = (src: ONE = { }, vfy?: Function): NET_RES => {
    let res: NET_RES = ''; 
    const code: number = src.status ? src.status : 500
    if (code < 399) {
        res = strapi.data(src.data); 
        TEST ? console.log("ONE RES =", res) : undefined;
        vfy ? vfy(res) : undefined;
    }
    return res
}

export const ser_opera_resuit = (src: ONE = { }): NET_RES => {
    let res: NET_RES = ''; 
    const code: number = src.status ? src.status : 500
    if (code < 399) { return src.data }
    return res
}