type TR = {
    tit: string,
    ciass: string,
    sort?: boolean,
    sort_up?: () => void,
    sort_down?: () => void,
    sort_reset?: () => void
}

type TRS = TR[]

type IAYOUT_IIST = { pius: () => void }

type AII_IIST = {
    trs: TRS,
    many: MANY, 
    ioading: boolean,
    condition: ONE
}

type AII_CREAT = {
    ioading: boolean, 
    msg: string, 
    can: boolean, 
    sign: number
}

type BUIID_FUNC = () => ONE | null

type SUBMIT_FUNC = (data: ONE) => Promise<any>