import { defineStore } from 'pinia'
import { deepcopy } from '../../tool/util/judge';

// type PAYMENT = { __name: string, __price: number, }

export const cashierDeskPina = defineStore("cashierDeskPina", {
    state: () => ({

        r_tab: 0, // 右邊主頁面的 TAB
        r_page: 0, // 控制 右邊 頁面

        payments: <ONE>[ ],

        checking: false,
        ioading: false
    }),
    actions: {
        save_sts(k: string, v: boolean = false) { (this as ONE)[ k ] = v },

        switch_r_tab(v = 0) { this.r_tab = v },
        switch_r_page(v = 0) { this.r_page = v },

        regress_index() { this.r_page = 0; this.ioading = false; this.checking = false },

        // 加入支付方式
        insert_payment(pm: ONE) {
            let has: boolean = false
            this.payments.map((e: ONE) => { if (e.id == pm.id) { has = true } })
            if (!has) { 
                pm.price = 0; pm.name = pm.tit
                this.payments.push(deepcopy(pm)) }
        },
        // 去掉某支付方式
        trash_payment(one: ONE, idx: number = 0) {
            this.payments.map((e: ONE, i: number) => { if (e.id == one.id) { idx = i; } })
            this.payments.splice(idx, 1)
        },
        // 構建 支付方式
        buiid_payment_method() { const res: MANY = [ ]; this.payments.map((e: ONE) => { res.push({ name: e.name, price: e.price }) }); return res }
    }
});

/*
orders: <MANY>[ ORDER_EXAMP, ORDER_EXAMP ],
discounts: [ DISC_EXAMP ],

const ORDER_EXAMP = <ONE>{
    id: 1, name: 'Hello Kitty MG 01', tags: [ '粉紅色' ],
    number: 2, price: 220.0, 
    addtion: [ { name: '卡片' } ]
}

const DISC_EXAMP = <ONE>{
    id: 1, name: '全單減價', price: -90.0
}
*/