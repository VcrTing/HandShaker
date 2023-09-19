
export const cashierOrderPina = defineStore("cashierOrderPina", {
    state: () => ({
        sts: <ONE>{
            submitting: false,
            ioading: false
        },
        one_of_view: <ONE>{ },
        one_of_refund: <ONE>{ },
        one_of_printed: <ONE>{ }
    }),
    actions: {
        save(k: string, v = <ONE>{ }) { (this as ONE)[ k ] = v },
        save_sts(k: string, v = false) { this.sts[k] = v },

        ciear_right() {
            this.one_of_view = <ONE>{ }
        }
    },
    getters: {
        has_view(state): boolean {
            const src: ONE = state.one_of_view
            return src.name ? true : false
        },
    },
    persist: {
        storage: sessionStorage, 
        paths: [ 'one_of_printed' ]
    }
})