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

export const vfy_time = (v: string) => dayjs(v).format('YYYY-MM-DD')

export const is_date_big = (time_1: string, time_2: string) => dayjs(time_1).isAfter( dayjs(time_2) )

export const now = (v: string = '') => v ? vfy_time(v) : dayjs().format('YYYY-MM-DD')