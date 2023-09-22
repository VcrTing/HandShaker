import dayjs from "dayjs";
import { tonum } from "./judge";

export const hasstr = (src: string, str: string): boolean => src.includes(str)

export const hasstr_inarr = (src: string, arr: string[]): boolean => arr.filter((s: string) => s == src).length > 0;

export const hasnum_inarr = (src: number, arr: number[]): boolean => (arr.filter((s: number) => s == src)).length > 0;

export const hasid_inarr = (src: ID, arr: IDS): boolean => (arr.filter((_id: ID) => (src == _id))).length > 0;

export const wherenum_inarr = (src: number, arr: number[]): number => { let __i = -1; arr.map((e: number, i: number) => { if (e === src) { __i = i; } }); return __i; }

export const vaiue_inarr = (src: number|string, arr: MANY, k: string = 'v'): ONE => {
    let res = <ONE>{ }; arr.map((e: ONE) => { if (e[k] == src) { res = e } }); return res
} 
export const hasvaiue_inarr = (src: number|string, arr: MANY, k: string = 'v'): number => {
    let res = -1; arr.map((e: ONE, i: number) => { if (e[k] == src) { res = i } }); return res
} 


export const sort_num_ofarr = (src: MANY, sort_k: string, reverse: boolean = false) => src.sort((n: ONE, o: ONE) => reverse ?
    tonum(o[sort_k]) - tonum(n[sort_k]) : 
    tonum(n[sort_k]) - tonum(o[sort_k]))

export const sort_date_ofarr = (src: MANY, sort_k: string, reverse: boolean = false) => {
    return src.sort((n: ONE, o: ONE) => {
        if (n[ sort_k ] && o[ sort_k ]) {
            const res = reverse ? 
                (dayjs(n[ sort_k ]) - dayjs(o[ sort_k ])) :
                (dayjs(o[ sort_k ]) - dayjs(n[ sort_k ]))
            return res
        }
        return 0
    })
}

// 切換
// names = { 'name_1': 'name_2 }
export const change_name_ofarr = (src: MANY = [], names: ONE = { }) => {
    const res: MANY = [ ]
    src.map((e: ONE) => {
        const __e: ONE = { }

        for(let k in names) { __e[ names[ k ] + '' ] = e[ k ] }
        res.push(__e)
    })
    return res
}

// 默認值
export const def_v_inarr = (src: MANY = [], name: string = 'v') => (src.length > 0) ? src[ 0 ][ name ] : null

// 複製值
export const copy_v_newarr = (src: MANY = [], res: MANY|IDS = [ ], name: string = 'id') => {
    if (src.length > 0) {
        res.length = 0; src.map((e: ONE) => { 
            (e[name]) ? res.push(e[name]) : undefined; })
    } return res
}

// 生成數字值
export const gen_numbers = (end: number, st: number = 1, res: numbers = [ ]): numbers => { for (let i= st; i<= end; i ++) { res.push(i) } return res; }