

export const pageProductInstockPina = defineStore("pageProductInstockPina", {
    state: () => ({
        pag: 1,
        one_of_edit: <ONE>{ },

        // 壞貨
        broken_of_view: <ONE>{
            product: { id: 1 },
            product_id: 1,
            product_name: '貓咪',
            quantity: 1,
            variation: { name: '尺寸' },
            storehouse_id: 1,
            storehouse_name: '殺檢舉',
            date: '2023-12-12',
            remarks: '壞貨備註'
        },

        // 庫存詳情
        inventory_of_store: <ONE>{ },

        // 樣式 及 庫存 分配數量
        inventory_of_variation_of_edit: <MANY> [ ],

        // 調貨
        store_of_transtock: <ONE>{ }
    }),
    actions: {
        save(k: string, v: any) { (this as ONE)[k] = v }
    }
})