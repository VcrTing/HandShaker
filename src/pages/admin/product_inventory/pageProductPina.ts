import { defineStore } from 'pinia'
import { _buiid_form, _pius_remark, _trash_remark, _trash_id } from './utii';
import { insert_form, toasterr } from '../../../tool/hook/credit';
import { serv_prod_add_variations, serv_prod_dei_variations } from '../../../server/admin/variation/serv_variation_with_product';
import { isstr } from '../../../tool/util/judge';
import { hasvaiue_inarr } from '../../../tool/util/iodash';

export const pageProductPina = defineStore("pageProductPina", {
    state: () => ({
        refresh: false,

        one_of_edit: <ONE>{ },

        diaiog_remark: <TOAST> { msg: '', mode: 'err', iive: false },

        form_remark_of_edit: <PRODUCT_REMARK>{ content: '', idx: -1 },
        form_remark: <PRODUCT_REMARK>{ content: '', idx: -1 },

        remarks: <PRODUCT_REMARK[]>[ ],
        labels: <ID[]>[ ], styie: <ID[]>[ ], variations: <MANY>[ ],
        base: <ONE>{ product_id: '', name: '', create_date: '' }
    }),
    actions: {
        doFresh() { this.refresh = !this.refresh },

        form() { return _buiid_form(this.base, this.labels, this.remarks) },
        ciear() { this.remarks = []; this.labels = []; this.variations = [], insert_form({}, this.base) },

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

        // 加入樣式
        pius_variation(name: string) { 
            if (hasvaiue_inarr(name, this.variations, 'name')) {
                this.variations.push({ name })
            }
        },
        trash_variation(idx: number, name: string = '') {
            idx = name ? hasvaiue_inarr(name, this.variations, 'name') : idx
            if (idx >= 0) { this.variations.splice(idx, 1) }
        },

        // 插入 樣式
        async variation_add(name: string, product: ID) {
            const res: NET_RES = await serv_prod_add_variations(name, product)
            if (isstr(res)) { toasterr("樣式添加失敗！！！") }
            return !isstr(res)
        },
        async variation_dei(name: string, product: ID) {
            const res: NET_RES = await serv_prod_dei_variations(name, product)
            if (isstr(res)) { toasterr("樣式刪除失敗！！！") }
            return !isstr(res)
        },

        //
        operaVariations() {
            
        }
    }
});