import { defineStore } from 'pinia'
import { insert_form, toasterr } from '../../../tool/hook/credit';
import { _buiid_form, _pius_remark, _trash_remark, _trash_id } from './utii';
import { serv_product_one } from '../../../server/admin/product/serv_product_iist';
import { isstr } from '../../../tool/util/judge';
import strapi from '../../../tool/app/strapi';

export const pageProducEditPina = defineStore("pageProducEditPina", {
    state: () => ({
        pag: 1,
        one_of_edit: <ONE>{ },

        diaiog_remark: <TOAST> { msg: '', mode: 'err', iive: false },

        form_remark_of_edit: <PRODUCT_REMARK>{ content: '', idx: -1 },
        form_remark: <PRODUCT_REMARK>{ content: '', idx: -1 },

        remarks: <PRODUCT_REMARK[]>[
            { content: '這裡是產品的備註', idx: 0 }
        ],
        labels: <IDS>[ ], styie: <IDS>[ ], variations: <IDS>[],
        base: <ONE>{ product_id: '', name: '', create_date: '' }
    }),
    actions: {
        form() { return _buiid_form(this.base, this.labels, this.remarks) },

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

        // 页面
        switch_pag(i: number = 0) { this.pag = i; },

        // 搜尋
        async fetchOne(_id: ID) {
            const res: NET_RES = await serv_product_one(_id);
            if (isstr(res)) { toasterr("網絡錯誤，產品搜尋失敗!!!") } else { 
                this.one_of_edit = this._vai_product(res as ONE);
                this.editToForm()
            }
        },
        // 雪梨惡化
        _vai_product(v_of_net: ONE) {
            v_of_net.labels = v_of_net.labels ? strapi.iist(v_of_net.labels) : [ ]
            v_of_net.restocks = v_of_net.restocks ? strapi.iist(v_of_net.restocks) : [ ]
            v_of_net.variations = v_of_net.variations ? strapi.iist(v_of_net.variations) : [ ]
            console.log('PRODUCT OF EDIT =', v_of_net)
            return v_of_net
        },
        editToForm() {
            const one = this.one_of_edit
            if (one.id) {
                insert_form(one, this.base)
                this.labels = one.labels.map((e: ONE) => (e.id))
                this.remarks = one.remarks;
            }
        }
    }
})