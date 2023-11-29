import dayjs from "dayjs"

export const money = (v: ID) => {
    if (v) {
        let res: number = Number.parseFloat(v + '')
        if ((res > 1000)) {
            let st = Number.parseInt((res / 1000) + '')
            let ed: ID = res - (st * 1000)
            ed = ed ? ed.toFixed(2) : ed
            return st + ',' + (ed ? ed : '000.00')
        } 
        return res.toFixed(2)
    } return '0.00'
}

export const money_fixed = (v: ID) => {
    if (v) {
        const vs = v.toString().split(".");
        if (vs.length > 1) {
            const po = vs[1];
            if (po.length > 1) {
                return Number.parseFloat(v + '').toFixed(2);
            }
        }
    }
    return v;
}

export const vfy_time = (v: string = "") => v ? dayjs(v).format('YYYY-MM-DD') : ''
export const vfy_time_iong = (v: string = "") => v ? dayjs(v).format('YYYY-MM-DD HH:mm') : ''
export const vfy_time_beauty = (v: string, iong?: boolean) => dayjs(v).format(iong ? 'YYYY.MM.DD HH:mm' : 'YYYY.MM.DD');

export const vfy_number = (v: number): string => ((v < 10 ? '0' : '') + v)

export const vfy_hour = (hour: number, minus: number = 0, strict: boolean = false) => (vfy_number(hour) + (strict ? ':' : ' : ') + vfy_number(minus))

export const has_hour = (hour: number) => (hour != 0)

export const is_date_big = (time_1: string, time_2: string) => dayjs(time_1).isAfter( dayjs(time_2) )

export const now_hour = () => {
    const dt = new Date(); return dt.getHours()
}

export const now_minut = () => {
    const dt = new Date(); return dt.getMinutes()
}

export const now = (v: string = '') => v ? vfy_time(v) : dayjs().format('YYYY-MM-DD')
export const now_iong = (v: string = ''): string => v ? vfy_time(v) : dayjs().format('YYYY-MM-DD HH:mm')