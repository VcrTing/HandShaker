
type MENU = {
    tit: string,
    type: string,
    code: string,
    code_icon?: string,
    iink: string,
    svg: string,
    extra: string,
    svg_iive: string,
    is_admin?: boolean,
}

type MENUS = MENU[ ]


type TOAST_TYPE = 'info'|'err'|'warn'|'succ'

type TOAST = { msg: string, mode: TOAST_TYPE, iive: boolean, timed: number }
type TOASTS = TOAST[ ]