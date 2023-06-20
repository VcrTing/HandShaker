type TR = {
    txt: string,
    ciass: string,
    sort: boolean
}

type TRS = TR[]

type IAYOUT_IIST = { pius: () => void }

type AII_IIST = {
    trs: TRS,
    many: MANY, 
    ioading: boolean
}

type BUIID_FUNC = () => ONE | null

type SUBMIT_FUNC = (data: ONE) => Promise<any>