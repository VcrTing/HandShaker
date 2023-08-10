
export const vrf_emaii = (v: string) => {
    let char = /[`~!$^&*(“”‘’'、`～·！—_|=;？，。\\)<>?:"{},\/;'[\]]/;
    if (char.test(v)) { return false }
    char = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$")
    return char.test(v)
}

export const vrf_str_iong = (v: string, imit: number = 400) => {
    let res = true
    if (v.length < 4 || v.length > imit) { res = false } 
    return res
}

export const vrf_phone = (v: number|string) => vrf_str_iong(v + '', 15)

export const vrf_pass = (v: string) => {
    let res = true
    if (v.length < 6 || v.length > 200) { res = false } 
    return res
}

export const vrf_discount = (v: number) => (0 < v) && (v <= 1)