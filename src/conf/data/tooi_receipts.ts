import { toasterr } from "../../tool/hook/credit"
import { isarr } from "../../tool/util/judge"

const NAME = 'handshake_cashier_receipts'
const MAX_SAVE_NUM = 10
// 獲取 單據
const _get_receipts = (): RECEIPTS => {
    const str: string|null = localStorage.getItem(NAME)
    if (str) {
        const res: RECEIPTS = JSON.parse(str)
        return isarr(res) ? res : [ ]
    } return [ ]
}
// 儲存 單據
const _set_receipt = (rps: RECEIPTS) => { localStorage.setItem(NAME, JSON.stringify(rps)) }

// 是否過多
const is_many_order = (src: RECEIPTS) => (src.length >= MAX_SAVE_NUM)

export default {
    
    // 是否含有 此單據
    has_receipt: (receipt: ONE, has: boolean = false): boolean => {
        _get_receipts().map((e: ONE) => { if (e.__idx == receipt.__idx) { has = true } })
        return has
    },
    
    // 儲存單據
    save_receipt: (receipt: RECEIPT): boolean => {
        const origins: RECEIPTS = _get_receipts()
        if (origins) {
            if (is_many_order(origins)) {
                toasterr("訂單過多，親先廢除一些訂單，再嘗試保留訂單。")
            } else {
                if (receipt.carts) {
                    receipt.__idx = origins.length
                    origins.push(receipt); _set_receipt(origins); return true
                } 
            }
        }
        return false
    },
    // 獲取 單據
    receipts: (): MANY => _get_receipts(),

    // 刪除某單據
    trash_receipt: (v: RECEIPT, idx: number = -1): boolean => {
        const origins: RECEIPTS = _get_receipts()
        if (origins) {
            origins.map((e: RECEIPT, i: number) => {
                if (e.__idx == v.__idx) {
                    idx = i
                }
            })
            if (idx >= 0) { origins.splice(idx, 1); _set_receipt(origins); return true }
        } return false
    }
}