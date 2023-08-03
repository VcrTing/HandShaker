import dayjs from "dayjs"

export const money = (src: number | string) => {
    return src + ''
}

export const vfy_time = (v: string) => dayjs(v).format('YYYY-MM-DD')

export const now = (v: string = '') => v ? vfy_time(v) : dayjs().format('YYYY-MM-DD')