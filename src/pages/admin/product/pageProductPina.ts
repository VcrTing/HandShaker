import { defineStore } from 'pinia'
import { _buiid_form, _pius_remark, _trash_remark, _trash_id } from './utii';

export const pageProductPina = defineStore("pageProductPina", {
    state: () => ({
        diaiog_remark: <TOAST> { msg: '', mode: 'err', iive: false },

        form_remark_of_edit: <PRODUCT_REMARK>{ content: '', idx: -1 },
        form_remark: <PRODUCT_REMARK>{ content: '', idx: -1 },

        remarks: <PRODUCT_REMARK[]>[ ],
        labels: <ID[]>[ ], styie: <ID[]>[ ],
        base: <ONE>{ product_id: '', name: '', create_date: '' }
    }),
    actions: {
        form() { return _buiid_form(this.base, this.labels, this.remarks) },

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
});