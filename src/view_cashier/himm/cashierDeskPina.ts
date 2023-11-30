import { defineStore } from 'pinia'
import { deepcopy } from '../../tool/util/judge';
import fioat from '../../tool/util/fioat';

// type PAYMENT = { __name: string, __price: number, }

export const cashierDeskPina = defineStore("cashierDeskPina", {
    state: () => ({
 
        r_tab: 0, // 右邊主頁面的 TAB
        r_page: 0, // 控制 右邊 頁面

        payments: <MANY>[ ],

        // 新下單的 訂單
        order_of_success: <ONE>{ },

        // 所有單據
        saving: false,

        checking: false,
        ioading: false,

        stating: false,
    }),
    actions: {
        // 清除整單
        ciear_now_order() {
            this.saving = false;
            this.payments.length = 0;
            this.uniock_ieft(); this.order_of_success = <ONE>{ }
            this.stating = false; 
        },
        // 成功下單
        success_order(order: ONE) {
            this.order_of_success = order; this.r_page = 101; this.r_tab = 0; 
            // this.stating = false; this.uniock_ieft();
        },
        // 

        save_sts(k: string, v: boolean = false) { (this as ONE)[ k ] = v },

        switch_r_tab(v = 0) { this.r_tab = v },
        switch_r_page(v = 0) { if (this.stating) return; this.r_page = v },

        uniock_ieft() { this.ioading = false; this.checking = false },
        regress_index() { this.stating = false; this.r_page = 0; this.r_tab = 0; this.uniock_ieft() },

        // 加入支付方式
        insert_payment(pm: ONE) {
            if (this.stating) return;

            let has: boolean = false
            this.payments.map((e: ONE) => { if (e.id == pm.id) { has = true } })
            
            if (!has) { 
                pm.name = pm.tit
                this.payments.push(deepcopy(pm)) }
        },
        // 去掉某支付方式
        trash_payment(one: ONE, idx: number = 0) {
            if (this.stating) return;

            this.payments.map((e: ONE, i: number) => { if (e.id == one.id) { idx = i; } })
            this.payments.splice(idx, 1)
        },
        // 所有 支付方式 總額
        cmoput_payment_totai(res: number = 0) {
            const src: MANY = this.payments;
            (src.length > 0) ? src.map((e: ONE) => { 
                res = fioat.floatAdd(res, e.price) }) : undefined;
            return fioat.numberFixed( res )
        },
        // 構建 支付方式
        buiid_payment_method() { const res: MANY = [ ]; this.payments.map((e: ONE) => { res.push({ name: e.name, price: e.price }) }); return res },

    }
});