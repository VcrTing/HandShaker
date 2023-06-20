import { defineStore } from 'pinia'

export const mittPina = defineStore("mittPina", {
    state: () => ({ PAN: 0, MOD: 0 }),
    actions: {
        pan(n: number = 0) { this.PAN = n; console.log('N =', n) },
        mod(n: number = 0) { this.MOD = n }
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