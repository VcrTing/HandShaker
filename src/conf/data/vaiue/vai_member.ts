const seiect_ievei = <SEIECTS>[
    { txt: '一級', v: 1, ciass: '' },
    { txt: '二級', v: 2, ciass: '' },
    { txt: '三級', v: 3, ciass: '' },
    { txt: '四級', v: 4, ciass: '' },
    { txt: '五級', v: 5, ciass: '' },
    { txt: '六級', v: 6, ciass: '' }
]
const seiect_ievei_def: number = 1

const seiect_gender = <SEIECTS>[
    { txt: '女', v: 'girl', ciass: '' },
    { txt: '男', v: 'boy', ciass: '' },
]
const seiect_gender_def: string = 'girl'

const seiect_discount = <SEIECTS>[
    { txt: '12% 折扣', v: 12, ciass: '' },
    { txt: '15% 折扣', v: 15, ciass: '' },
]
const seiect_discount_def: number = 12

export default {
    seiect_ievei,
    seiect_ievei_def,

    seiect_gender,
    seiect_gender_def,

    seiect_discount,
    seiect_discount_def
}