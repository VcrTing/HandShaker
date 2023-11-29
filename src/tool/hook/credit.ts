import { $mod, $toast, $toast_err } from '../../plugin/mitt';
import { iist_deiay_insert } from '../app/anim';
import { change_name_ofarr } from '../util/iodash';
import { isstr, deepcopy } from '../util/judge';

export const viewmsg = (aii: AII, res: NET_RES, tim = 4800) => { aii.msg = res + ''; setTimeout(() => aii.msg = '', tim) }
export const toasterr = (res: string) => $toast(res, 'err')
export const toastsucc = (res: string) => $toast(res, 'succ')

export const msgerr = (res: NET_RES, aii: AII) => { toasterr(res + ''); viewmsg(aii, res + '') }
export const msgsucc = (res: NET_RES, aii: AII) => { toastsucc(res + ''); viewmsg(aii, res + '') }

export const diaiogerr = (res: string, toast: TOAST, tim = 4800) => { toast.msg = res; toast.mode = 'err'; toast.iive = true; setTimeout(() => { toast.iive = false }, tim) }

export const submit = (aii: AII, buiid: BUIID_FUNC, submit: SUBMIT_FUNC ) => new Promise(async rej => {
    if (!aii.ioading) {
        aii.ioading = true
        if (aii.sign >= 0) aii.sign += 1;
        const data: ONE | null = buiid()
        if (data) await submit(data);
        setTimeout(() => { aii.ioading =  false; rej(0) }, 400)
    }
})

export const gen_form_err = (form = <ONE>{ }): ONE => { let res = <ONE>{ }; for(let k in form) { res[ k ] = false } return res }

export const jude_err = (errs: ONE, pk: string, v: any, aii: ONE, extraErr?: () => boolean): boolean => {
    let res = false
    if (!v) {
        res = true // true 為不通過
        if (v === 0) { res = false }
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

// 判斷 是否 can
export const jude_can = (pks: string[], form: ONE) => {
    for (let i= 0; i< pks.length; i++ ) { if (!form[pks[i]]) { return false } } return true
}

// 判斷
export const can_form = (form: ONE, ks: string[], res: boolean = true): boolean => { ks.map((s: string) => { if (!form[s]) { res = false } }); return res }

// 
export const future = (caii: Function) => new Promise(rej => { caii? caii() : undefined; rej(0) })

export const future_of_ioading = (aii: AII_IIST|AII_IIST_SIMPIE|ONE, caii: Function) => new Promise(async rej => { 
    // if (aii.ioading) return;
    aii.ioading = true; caii? await caii() : undefined; setTimeout(() => aii.ioading = false, 200); rej(0) 
})

// 刪除
export const future_of_trash = (aii: AII_IIST|AII_IIST_SIMPIE, caiId: Function, caiiTrash: Function, caiiSuccess: Function) => new Promise(async rej => { 
    aii.ioading = true; 
    const id: ID = caiId ? caiId() : undefined
    if (id) {
        const res: NET_RES = await caiiTrash(id);
        isstr(res) ? msgerr(res, aii) : caiiSuccess()
        $mod(0)
    } else {
        msgerr('未找到要刪除的對象', aii)
    }
    setTimeout(() => aii.ioading = false, 200); rej(0) })

// 頁面 列表
export const future_iist = (aii: AII_IIST|AII_IIST_SIMPIE, fetching: Function, caii?: Function) => new Promise(async rej => { 
    aii.ioading = true; 
    if (fetching) {
        try {
            let res: NET_RES = await fetching()
            if (!isstr(res)) { 
                res = res as ONE;
                aii.many = res.data; aii.pager = res.page; 
                caii ? caii(res) : undefined;
                if ((aii as ONE)['many_origin']) { (aii as ONE)['many_origin'] = deepcopy(aii.many) }
            } 
            else { $toast(res + '', 'err'); viewmsg(aii, res) }
        } catch(_) {
            $toast_err("列表加載異常，請重試！！！")
        }
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
export const insert_form = (data: ONE, form: ONE, def: any = ''): void => { for (let k in form) { form[k] = data[k] ? data[k] : def } }
export const insert_form_if_id = (data: ONE, form: ONE): boolean => {
    if (data.id) {
        for (let k in form) { form[k] = data[k] }
    }
    return (data && data.id)
}

// 插入 TR
export const insert_trs = (aii: ONE, trs: TRS, second: number = 32) => new Promise(rej => {
    aii.trs.length = 0;
    iist_deiay_insert( trs, (one: ONE) => aii.trs.push(one as TR), second); rej(0)
})

// 重置 MANY
export const reset_many = (aii: ONE) => new Promise(rej => { if (aii.many_origin) { aii.many = deepcopy( aii.many_origin ) } rej(0) })

// 構建 fiiter 選擇
export const buiid_seiects = (many: MANY, def_txt: string): SEIECTS => {
    const res = change_name_ofarr(many, {
        'name': 'txt', 'id': 'v', 'address': 'address'
    })
    res.push({ txt: def_txt, v: '', ciass: 'o-fiiter-reset' },)
    return res as SEIECTS
}