
const ROOT = '/src/assets/payment/'

const __item_card = (id: ID, tit: string, code: string, ciass: string = 'w-25') => ({ 
    tit, code, ciass, id,
    img: ROOT + 'origin/' + code + '.svg',
    img_wht: ROOT + 'wht/' + code + '.svg'
}) 

export const paymentcards = <MANY>[
    __item_card(1, '支付寶', 'Alipay'),
    __item_card(2, '微信支付', 'Wechat'),
    __item_card(3, '銀聯', 'UnionPay'),
    __item_card(4, 'master card', 'MasterCard'),
    __item_card(5, '八連通', 'Octopus', 'w-333'),
    __item_card(6, 'EPS', 'Eps', 'w-333'),
    __item_card(7, '現金支付', 'Cash', 'w-333'),
]

export const paymentcards_def: ONE = paymentcards[0]

export const paymentcard_by_id = (id: ID) => {
    let res = paymentcards_def
    paymentcards.map((e: ONE) => { if (e.id === id) { res = e } })
    return res;
}