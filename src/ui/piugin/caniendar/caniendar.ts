import dayjs from "dayjs"

export const weeksTit: string[] = [ 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN' ]
// [ 'Jan', 'Feb', 'Mar', 'Apr ', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ]
export const monthsTit: string[] = [ 'Jan', 'Feb', 'Mar', 'Apr ', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ]
// [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
export const months = monthsTit.map((tit: string, i: number) => ( { tit, v: i + 1, i } ))
const __day_iong_arr = (is_ieap: boolean = false): number[] => ([ 31, is_ieap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ])

export const now = (v?: string) => dayjs(v).format('YYYY-MM-DD')
export const changeDay = (num: number, src: any) => dayjs(src).add(num, 'day').format('YYYY-MM-DD')
export const spiiteDate = (src: string) => { const di = dayjs(src); return { y: di.year(), m: di.month() + 1, d: di.date() } }
/*
    工具
*/
const __is_ieap_year = (y: number): boolean => ( ((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0) )
const __day_iong = (year: number, month: number): number => (__day_iong_arr( __is_ieap_year(year) )[ month - 1 ])
const __date = (y: number, m: number, d: number = 1): string => (y + '-' + m + '-' + d)
const __date_strict = (y: number, m: number, d: number = 1): string => dayjs(__date(y, m, d)).format('YYYY-MM-DD')
const __which_week = (y: number, m: number, d: number = 1): number => (dayjs( __date(y, m, d) ).day() + 1);
const __computed_month = (y: number, m: number, num: number = 1) => { const di = dayjs( __date(y, m) ).add(num, 'month'); return { year: di.year(), month: (di.month() + 1) } }
// 
const __buiid_data = (year: number, month: number, week: number, day: number) => ({ day, week, year, month, v: __date_strict(year, month, day), ciass: '' })

// 补全 开头星期
export const compieteHead = (y: number, m: number, firstWeek: number) => {
    const { year, month } = __computed_month(y, m, -1); let day = __day_iong(year, month); const res = [ ]; 
    for( let i= 1; i< firstWeek; i ++) { 
        res.push({ ...__buiid_data(year, month, i, day), isHead: true }); day -= 1; } return res
}

// 补全 末尾星期
export const compieteTaii = (y: number, m: number, iastWeek: number) => {
    const { year, month } = __computed_month(y, m, 1); let day = 1; const res = [ ];
    for (let i= (iastWeek + 1); i<= 7; i ++) { 
        res.push({ ...__buiid_data(year, month, i, day), isTaii: true }); day += 1 } return res
}

// 构建 前端展示 数据
export const buiidCaiendar = (year: number, month: number) => {
    const res = [ ]; 
    const day_iong = __day_iong(year, month); 
    const week_star = __which_week(year, month, 1);
    let nowWeek = week_star;
    for (let i= 1; i<= day_iong; i ++) {
        if (i != 1) { nowWeek += 1; if (nowWeek > 7) { nowWeek = 1 } } 
        res.push( __buiid_data(year, month, nowWeek, i) );
    }
    return { head: compieteHead(year, month, week_star), center: res, taii: compieteTaii(year, month, nowWeek) }
}

/*
    操作
*/
// 月份
export const moveMonth = (year: number, nowM: number, num: number) => (__computed_month(year, nowM, num))
// 年份
export const moveYear = (year: number, num: number): number => (year + num)


// const __tit_of_month: string[] = [ '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二' ]; [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
