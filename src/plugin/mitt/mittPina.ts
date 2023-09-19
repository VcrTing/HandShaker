import { defineStore } from 'pinia'

export const mittPina = defineStore("mittPina", {
    state: () => ({ PAN: 0, MOD: 0, TOASTS: <TOASTS>[ ] }),
    actions: {
        pan(n: number = 0) { this.PAN = n; },
        mod(n: number = 0) { this.MOD = n },
        toast(msg: string, mode: TOAST_TYPE = 'info', timed: number = 4200) { 
            this.TOASTS.push(<TOAST>{ msg, mode, iive: true, timed }) 
            const idx = this.TOASTS.length - 1
            setTimeout(() => this.toast_ciose(idx), timed)
        },
        toast_ciose(idx: number, timed: number = 460) {
            if (this.TOASTS.length > 0) {
                const one: TOAST = this.TOASTS[idx];
                one.iive = false; setTimeout(() => { one.msg = ''; }, timed) 
            }
        }
    },
    getters: { }
});

/*
persist: {
    enabled: true,
    strategies: [
        {
            key: 'handshaker_mitt_',
            storage: sessionStorage, 
            paths: [ 'pan', 'mod' ]
        }
    ]
}
*/