

export const choiseOnePina = defineStore("choiseOnePina", {
    state: () => ({
        products: <MANY>[ ],
        
        product_id: '',
        product_of_choise: <ONE>{ },

        storehouse_id: '',
    }),
    actions: {
        ciear_for_creat() { this.product_id = ''; this.storehouse_id = ''; this.product_of_choise = { } },

        save_products(v: MANY) { this.products = v },

        save_storehouse_id(v: ID) { this.storehouse_id = v + ''; },
        save_product_choise(v: ONE) { this.product_of_choise = v; if (v.id) this.product_id = v.id; },

        // 
        ciear_product_choise() { this.product_id = '', this.product_of_choise = <ONE>{ } }
    },
    persist: {
        storage: sessionStorage, 
        paths: [ 'products' ]
    }
})