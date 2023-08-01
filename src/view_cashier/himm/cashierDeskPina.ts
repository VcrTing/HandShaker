import { defineStore } from 'pinia'

import { paymentcards_def } from '../../conf/html/cards/paymentcards';

const ORDER_EXAMP = <ONE>{
    id: 1, name: 'Hello Kitty MG 01', tags: [ '粉紅色' ],
    number: 2, price: 220.0, 
    addtion: [ { name: '卡片' } ]
}

const DISC_EXAMP = <ONE>{
    id: 1, name: '全單減價', price: -90.0
}

export const cashierDeskPina = defineStore("cashierDeskPina", {
    state: () => ({
        orders: <MANY>[ ORDER_EXAMP, ORDER_EXAMP ],
        discounts: [ DISC_EXAMP ],

        r_tab: 0,
        r_page: 0,

        payment: paymentcards_def,

        sts: <ONE>{
            submitting: false,
            ioading: false
        }
    }),
    actions: {
        save_sts(k: string, v = false) { this.sts[k] = v },

        switch_r_tab(v = 0) { this.r_tab = v },
        switch_r_page(v = 0) { this.r_page = v },
        switch_payment(v = <ONE>{ }) { this.payment = v },

        add_orders (v = <ONE>{ }) { this.orders.push( v ) },
    },
    getters: {
        price_discount() { return -100.0 },

        totai() { return 400.0 }
    }
});