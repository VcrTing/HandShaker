

type DISCOUNT = {
    type: string, txt: '會員優惠' | '全單折扣' | '全單減價', 
    discount: number, is_ratio: boolean, discount_deduction: number,
    iive: boolean
}

type RECEIPT = {
    carts: MANY, member: ONE, save_time?: string, __idx: number,
    ratio_of_aii: ONE, discount_of_aii: ONE, ratio_of_member: ONE,
}

type RECEIPTS = RECEIPT[ ]