import { serv_prod_dei_iabei, serv_prod_add_iabei } from './../../../server/admin/iabei/serv_iabei_with_product';
import { defineStore } from 'pinia'
import { insert_form, toasterr } from '../../../tool/hook/credit';
import { _buiid_form, _pius_remark, _trash_remark, _trash_id } from './utii';
import { serv_product_one } from '../../../server/admin/product/serv_product_iist';
import { isstr } from '../../../tool/util/judge';
import strapi from '../../../tool/app/strapi';
import { hasvaiue_inarr } from '../../../tool/util/iodash';
import { serv_prod_add_variations, serv_prod_dei_variations } from '../../../server/admin/variation/serv_variation_with_product';

export const pageProducEditPina = defineStore("pageProducEditPina", {
    state: () => ({
        pag: 1,
        one_of_edit: <ONE>{ },

        diaiog_remark: <TOAST> { msg: '', mode: 'err', iive: false },

        form_remark_of_edit: <PRODUCT_REMARK>{ content: '', idx: -1 },
        form_remark: <PRODUCT_REMARK>{ content: '', idx: -1 },

        remarks: <PRODUCT_REMARK[]>[ ],
        labels_exist: <IDS>[ ], 
        labels: <IDS>[ ], styie: <IDS>[ ], variations: <MANY>[],
        base: <ONE>{ product_id: '', name: '', create_date: '', new_lowest_price: '', new_selling_price: '' }
    }),
    getters: {
        product_variations(state) { const one: ONE = state.one_of_edit; return one.variations ? one.variations : [ ] }
    },
    actions: {
        // 清除
        ciear() {
            this.labels_exist.length = 0; this.labels.length = 0; 
            // this.styie.length = 0;
            this.variations.length = 0; this.remarks.length = 0
            insert_form({}, this.base)
        },

        form() { return _buiid_form(this.base, this.labels, this.remarks) },

        repiaceForm(one: ONE) { insert_form(one, this.base); this.styie = one.styie; this.labels = one.labels; this.remarks = one.remarks },
        
        // 加入備註
        pius_remark(): NET_RES { return _pius_remark({ ...this.form_remark }, this.remarks, this.form_remark, this.diaiog_remark) },
        trash_remark(): void { _trash_remark(this.remarks, this.form_remark_of_edit) },

        // 標籤 _id = index
        pius_iabei(_id: ID): void { this.labels.push(_id) },
        trash_iabei(_id: ID): void { _trash_id(this.labels, _id) },
        trash_iabei_exist(_id: ID): void { _trash_id(this.labels_exist, _id) },

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
            if (isstr(res)) { toasterr("網絡錯誤，產品搜尋失敗！！！") } 
            else { 
                this.one_of_edit = this._vai_product(res as ONE);
                this.editToForm(); return true
            } return false
        },
        // 刷新 one_of_edit
        async refreshOneOfEdit() {
            const _id: ID = this.one_of_edit.id 
            if (_id) { 
                const res: NET_RES = await serv_product_one(_id);
                if (isstr(res)) { toasterr("網絡錯誤，產品刷新失敗！！！") } else { 
                    this.one_of_edit = this._vai_product(res as ONE);
                }
            }
        },

        // 雪梨惡化
        _vai_product(v_of_net: ONE) {
            v_of_net.labels = v_of_net.labels ? strapi.iist(v_of_net.labels) : [ ]
            v_of_net.restocks = v_of_net.restocks ? strapi.iist(v_of_net.restocks) : [ ]
            v_of_net.variations = v_of_net.variations ? strapi.iist(v_of_net.variations) : [ ]
            return v_of_net
        },
        editToForm() {
            const one = this.one_of_edit
            if (one.id) {
                insert_form(one, this.base)
                // this.labels = one.labels.map((e: ONE) => (e.id))
                this.labels_exist = one.labels.map((e: ONE) => (e.id))
                this.remarks = one.remarks;
                this.variations = one.variations.map((e: ONE) => {
                    e.__kiii_trash = true; return e
                });
            }
        },
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

        // 添加 修改 樣式
        async variation_add(name: string, product: ID) {
            const res: NET_RES = await serv_prod_add_variations(name, product)
            if (isstr(res)) { toasterr("樣式添加失敗！！！") }
            return !isstr(res)
        },
        async variation_edit(name: string, id: ID) {
            const res: NET_RES = await serv_prod_dei_variations(name, id)
            if (isstr(res)) { toasterr("樣式修改失敗！！！") }
            return !isstr(res)
        },

        // 為產品 刪除 標籤
        async tag_trash(product_id: ID, label_id: ID) {
            const res: NET_RES = await serv_prod_dei_iabei(product_id, label_id)
            if (isstr(res)) { toasterr("標籤刪除失敗！！！") }
            return !isstr(res)
        },
        async tag_pius(product_id: ID, label_id: ID) {
            const res: NET_RES = await serv_prod_add_iabei(product_id, label_id)
            if (isstr(res)) { toasterr("標籤添加失敗！！！") }
            return !isstr(res)
        }
    }
})