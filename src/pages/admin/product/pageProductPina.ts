import { defineStore } from 'pinia'
import { hasstr_inarr } from '../../../tool/util/iodash';
import { diaiogerr } from '../../../tool/hook/credit';
import { tonum } from '../../../tool/util/judge';

const ERROR_MSG = {
    'same': '已存在相同備註了'
}

export const pageProductPina = defineStore("pageProductPina", {
    state: () => ({
        one_of_edit: <ONE>{ },

        diaiog_remark: <TOAST> { msg: '', mode: 'err', iive: false },

        form_remark: <PRODUCT_REMARK>{ content: '', idx: -1 },
        form_remark_of_edit: <PRODUCT_REMARK>{ content: '', idx: -1 },

        remarks: <PRODUCT_REMARK[]>[ ],
        labels: <ID[]>[ ],
        styie: <ID[]>[ ],
        base: <ONE>{ product_id: '', name: '', create_date: '' }
    }),
    actions: {
        form() { return { ...this.base, labels: this.labels, remarks: this.remarks } },
        // 加入備註
        pius_remark(): NET_RES {
            const src: PRODUCT_REMARK = { ...this.form_remark }
            if (hasstr_inarr(src.content, this.remarks.map(e => e.content))) {
                diaiogerr(ERROR_MSG['same'], this.diaiog_remark); return ERROR_MSG['same']
            } else {
                src.idx = this.remarks.length; src.content = src.content.trim()
                this.remarks.push(src); this.form_remark.content = ''
            } return src
        },
        trash_remark(): void {
            const idx: number = this.form_remark_of_edit.idx;
            this.remarks.splice(idx, 1); this.form_remark_of_edit.content = ''
        },

        // 標籤
        pius_iabei(_id: ID): void { this.labels.push(_id) },
        trash_iabei(_id: ID): void { this.labels.splice(tonum(_id), 1) },

        // 樣式
        pius_styie(_id: ID): void { this.styie.push(_id) },
        trash_styie(_id: ID): void { this.styie.splice(tonum(_id), 1) },

        // 工具
        save(k: string, v = <ONE>{ }) { (this as ONE)[k] = v; },
    }
});