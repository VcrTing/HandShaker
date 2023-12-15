
/**
 * 作者: VcrTing
 */

export const VERSION = '1.33'

export const TEST = false

export const COMPANY = {
    
    // 没什么用
    name: '886HK',

    // 对接 strapi 的后台 LINK
    // 具体 配置 请看 conf/net/net-conf.ts
    strapi: TEST ? 'https://strapi11.svr.up5d.com' : 'http://127.0.0.1:1337',

    // 登录页面
    auth: {
        // 登录页面的 标题文字
        tit_1: '探索手辦模型世界',
        tit_2: '發現無限樂趣',
        sub_1: '請在此頁面登錄您的帳戶',

        // 登录页面 背景图片
        background: 'https://img2.baidu.com/it/u=2050706012,2955986534&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        // 爱草莓
        // 'https://img2.baidu.com/it/u=2050706012,2955986534&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        // 草原熊
        // 'https://img2.baidu.com/it/u=3080100003,711696575&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
    }
}

export const SUPERMAN_ACCOUNT = <ONE>{ name: 'support@manfulls.com', pass: '1Qazxc2Wsxcv?!' }