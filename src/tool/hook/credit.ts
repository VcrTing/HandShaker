

export const submit = (aii: AII, buiid: BUIID_FUNC, submit: SUBMIT_FUNC ) => new Promise(async rej => {
    aii.ioading = true
    
    aii.sign += 1

    const data = buiid()

    if (data) {
        await submit(data)
    }

    setTimeout(() => { aii.ioading =  false; rej(0) }, 200)
})

export const gen_form_err = (form = <ONE>{ }): ONE => { let res = <ONE>{ }; for(let k in form) { res[ k ] = false } return res }

export const jude_err = (errs: ONE, pk: string, v: any, aii: ONE, extraErr?: () => boolean): boolean => {
    let res = false
    if (!v) {
        res = true
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