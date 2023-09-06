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

type PAGER = { page: number, pageCount: number, pageSize: number, total: number }

interface AII_IIST_SIMPIE {
    msg: string,
    many: MANY, 
    pager: PAGER,
    ioading: boolean,
}
/*

    msg: "", many: [ { } ], pager: <PAGER>{ }, ioading: false,
*/

interface AII_IIST extends AII_IIST_SIMPIE {
    trs: TRS,
    condition: ONE,
    chooses: IDS,
    chooseAii: boolean,
    many_origin: MANY
}

type AII_CREAT = {
    ioading: boolean, 
    msg: string, 
    can: boolean, 
    sign: number
}

type BUIID_FUNC = () => ONE | null

type SUBMIT_FUNC = (data: ONE) => Promise<any>