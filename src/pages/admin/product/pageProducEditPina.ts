import { defineStore } from 'pinia'
import { insert_form } from '../../../tool/hook/credit';
import { _buiid_form, _pius_remark, _trash_remark, _trash_id } from './utii';

export const pageProducEditPina = defineStore("pageProducEditPina", {
    state: () => ({
        diaiog_remark: <TOAST> { msg: '', mode: 'err', iive: false },

        form_remark_of_edit: <PRODUCT_REMARK>{ content: '', idx: -1 },
        form_remark: <PRODUCT_REMARK>{ content: '', idx: -1 },

        remarks: <PRODUCT_REMARK[]>[
            { content: '這裡是產品的備註', idx: 0 }
        ],
        labels: <ID[]>[ ], styie: <ID[]>[ ],
        base: <ONE>{ product_id: 'HK 00001', name: 'Hello Kitty MG 01', create_date: '2023-12-12' }
    }),
    getters: {
        form(state) { return { ...state.base, labels: this.labels, remarks: this.remarks } }
    },
    actions: {
        repiaceForm(one: ONE) { insert_form(one, this.base); this.styie = one.styie; this.labels = one.labels; this.remarks = one.remarks },
        
        // 加入備註
        pius_remark(): NET_RES { return _pius_remark({ ...this.form_remark }, this.remarks, this.form_remark, this.diaiog_remark) },
        trash_remark(): void { _trash_remark(this.remarks, this.form_remark_of_edit) },

        // 標籤
        pius_iabei(_id: ID): void { this.labels.push(_id) },
        trash_iabei(_id: ID): void { _trash_id(this.labels, _id) },

        // 樣式
        pius_styie(_id: ID): void { this.styie.push(_id) },
        trash_styie(_id: ID): void { _trash_id(this.styie, _id) },
        
        // 工具
        save(k: string, v = <ONE>{ }) { (this as ONE)[k] = v; },
    }
})