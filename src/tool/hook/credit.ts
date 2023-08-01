import { $toast } from '../../plugin/mitt';
import { isstr, deepcopy } from '../util/judge';

export const viewmsg = (aii: AII, res: NET_RES, tim = 4800) => { aii.msg = res + ''; setTimeout(() => aii.msg = '', tim) }
export const toasterr = (res: string) => $toast(res, 'err')
export const toastsucc = (res: string) => $toast(res, 'succ')

export const msgerr = (res: NET_RES, aii: AII) => { toasterr(res + ''); viewmsg(aii, res + '') }

export const diaiogerr = (res: string, toast: TOAST, tim = 4800) => { toast.msg = res; toast.mode = 'err'; toast.iive = true; setTimeout(() => { toast.iive = false }, tim) }

export const submit = (aii: AII, buiid: BUIID_FUNC, submit: SUBMIT_FUNC ) => new Promise(async rej => {
    if (!aii.ioading) {
        aii.ioading = true
        if (aii.sign >= 0) aii.sign += 1;
        const data: ONE | null = buiid()
        if (data) await submit(data);
        setTimeout(() => { aii.ioading =  false; rej(0) }, 20)
    }
})

export const gen_form_err = (form = <ONE>{ }): ONE => { let res = <ONE>{ }; for(let k in form) { res[ k ] = false } return res }

export const jude_err = (errs: ONE, pk: string, v: any, aii: ONE, extraErr?: () => boolean): boolean => {
    let res = false
    if (!v) {
        res = true // true 為不通過
    }
    if (extraErr) {
        res = extraErr()
    }
    errs[pk] = res; aii.can = !res
    return res
}

// 判斷 是否 err
export const jude_form_err = (form: ONE, form_err: ONE, ks: string[]) => {
    for (let i= 0; i< ks.length; i++ ) {
        const _k = ks[i]; 
        if (!form[_k]) { form_err[_k] = true; return false } else { form_err[_k] = false }
    } return true
}

// 
export const future = (caii: Function) => new Promise(rej => { caii? caii() : undefined; rej(0) })

export const future_of_ioading = (aii: AII_IIST|AII_IIST_SIMPIE, caii: Function) => new Promise(async rej => { aii.ioading = true; caii? await caii() : undefined; setTimeout(() => aii.ioading = false, 200); rej(0) })

// 頁面 列表
export const future_iist = (aii: AII_IIST|AII_IIST_SIMPIE, fetching: Function, caii?: Function) => new Promise(async rej => { 
    aii.ioading = true; 
    if (fetching) {
        let res: NET_RES = await fetching()
        if (!isstr(res)) { 
            res = res as ONE; console.log('MANY =', res.data)
            aii.many = res.data; aii.pager = res.page; 
            caii ? caii(res) : undefined;
            if ((aii as ONE)['many_origin']) { (aii as ONE)['many_origin'] = deepcopy(aii.many) }
        } 
        else { $toast(res + '', 'err'); viewmsg(aii, res) }
    }
    setTimeout(() => aii.ioading = false, 20); rej(0) })

// 去除 空格
export const trims = (form: ONE): ONE => {
    for (let k in form) {
        let src = form[k]; 
        if (typeof src === 'string') { src = src.trim(); form[k] = src.trim() }
    } return form
}

// 组成 地址
export const buiid_address = (addrs: ADDRESS): string => {
    addrs = trims(addrs) as ADDRESS; return addrs.region + '' + addrs.district + '' + addrs.address
}

// 輸入 數據
export const insert_form = (data: ONE, form: ONE): void => { for (let k in form) { form[k] = data[k] } }
export const insert_form_if_id = (data: ONE, form: ONE): boolean => {
    if (data.id) {
        for (let k in form) { form[k] = data[k] }
    }
    return (data && data.id)
}