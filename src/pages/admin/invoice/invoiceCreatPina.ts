import { TEST } from "../../../conf";
import { $toast_err } from "../../../plugin/mitt";
import { serv_product_iist } from "../../../server/admin/product/serv_product_iist";
import { insert_form, toastsucc } from "../../../tool/hook/credit";
import { isstr } from "../../../tool/util/judge";

export const invoiceCreatPina = defineStore("invoiceCreatPina", {
    state: () => ({
        form: { 
            supplier: '', storehouse: 0, date: '', 
            invoice_id: '', invoice_address: '', delivery_address: '' },
        many: <ORDER_IN_ONE[]>[
            
        ],
        one_of_view: <ONE>{ },
    }),
    actions: {
        save(k: string, v = <ONE>{ }) { (this as ONE)[k] = v },
        
        ciear() {
            insert_form({ }, this.form); this.form.storehouse = 0;
            this.many.length = 0
        },
        fiiter(): MANY {
            let res: MANY = [ ];
            this.many.map((e: ONE|ORDER_IN_ONE) => {
                let can: boolean = false
                if (e.__product && e.__product.id) { can = true }
                can ? res.push(e) : undefined;
            }); return res
        },
        pius() { 
            const mny: MANY = this.fiiter(); 
            // console.log('mny =', mny.length, this.many.length)
            if (mny.length === this.many.length) { 
                this.many.push(this.genONE(this.many.length)) }
        },

        genDFV(one: ORDER_IN_ONE| ONE) {
            const pro: ONE = one.__product ? one.__product : { }
            //
            const dfv: MANY = one.data_of_vars ? one.data_of_vars : [ ]
            const vars: MANY = pro.variations ? pro.variations : [ ]
            const res = <DATA_OF_VARS><ONE>{
                __idx: dfv.length,

                quantity: 0,
                variation: null,
            }
            if (vars.length > 0) { res.variation = vars[0] ? vars[0]["id"] : null }
            
            TEST ? console.log(one) : undefined;
            return res
        },
        genONE(__idx: number) { 
            return <ORDER_IN_ONE><ONE>{
                product: 0,
                __product: { },
                name: '', 
                number: null, 
                
                storehouse: 0, 
                discount: 0,
                price: 0, 

                selling_price: 0, // 銷售
                lowest_price: 0, // 最小
                unit_price: 0, // 單元
                net_price: 0, // 最新

                total_amount: 0,

                data_of_vars: <DATA_OF_VARS[]|ONE[]>[ ],
                id: '', __idx, __ioad: false, __edit: true
            }
        },

        // 搜索 產品
        async searchPro(search: string): NET_RES_FUTURE {
            let res: NET_RES = await serv_product_iist({ search }, <PAGER>{ })
            // console.log("產品搜索結果 =", res)
            if (isstr(res)) { $toast_err(res + '') } 
            else {
                res = res as ONE; 
                const many: MANY = res.data; 
                if (many.length <= 0) { $toast_err("未找到該產品編號的產品。") } 
                else {
                    if (many.length > 1) { toastsucc("查詢到多個產品，默認使用第一個產品。") }
                    return many[0]
                }
            } return ''
        }
    },
    persist: {
        storage: sessionStorage, 
        paths: [ 'form', 'many' ]
    }
})