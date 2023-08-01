import { defineStore } from 'pinia'

export const warehousePina = defineStore("warehousePina", {
    state: () => ({
        one_of_edit: <ONE>{ }
    }),
    actions: {
        save(k: string, v = <ONE>{ }) { (this as ONE)[k] = v },
    }
});