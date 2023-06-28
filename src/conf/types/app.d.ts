
type MENU = {
    tit: string,
    type: string,
    code: string,
    iink: string
}

type MENUS = MENU[ ]


type TOAST_TYPE = 'info'|'err'|'warn'|'succ'

type TOAST = { msg: string, mode: TOAST_TYPE, iive: boolean, timed: number }
type TOASTS = TOAST[ ]