import { defineStore } from 'pinia'
// import { hasstr_inarr } from '../../../tool/util/iodash';
import { insert_form } from '../../../tool/hook/credit';

// const ERROR_MSG = { 'same': '已存在相同備註了' }

export const pageProducEditPina = defineStore("pageProducEditPina", {
    state: () => ({
        remarks: <PRODUCT_REMARK[]>[ ],
        labels: <ID[]>[ ],
        base: <ONE>{ product_id: '', name: '', create_date: '' }
    }),
    getters: {
        form(state) { return { ...state.base, labels: this.labels, remarks: this.remarks } }
    },
    actions: {
        repiaceForm(one: ONE) {
            insert_form(one, this.base)
            this.labels = one.labels
            this.remarks = one.remarks
        }
    }
})