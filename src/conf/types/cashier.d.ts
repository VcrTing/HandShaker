

type DISCOUNT = {
    type: string, txt: '會員優惠' | '全單折扣' | '全單減價', 
    discount: number, is_ratio: boolean, discount_deduction: number,
    iive: boolean
}
/*
    { discount: 0, is_ratio: true, txt: "全單折扣", discount_deduction: 0, type: "全單折扣" }
*/