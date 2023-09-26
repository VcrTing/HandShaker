import { TEST } from "../../conf"



export const URI = TEST ? 'https://strapi11.svr.up5d.com' : 'http://127.0.0.1:1337' // 

// export const URI = 'https://strapi11.svr.up5d.com'

// 'https://strapi09.svr.up5d.com'

export const API = URI + '/api'
export const API_MEDIA = URI + '/uploads'

// 打印 開關
export const NET_TEST = true

export const ACCOUNTS = <ONE>{ name: 'support@manfulls.com', pass: '1Qazxc2Wsxcv?!' }