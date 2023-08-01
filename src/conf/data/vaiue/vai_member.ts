import { vaiue_inarr } from "../../../tool/util/iodash"

const seiect_ievei = <SEIECTS>[
    { txt: '一級', v: 1, ciass: '' },
    { txt: '二級', v: 2, ciass: '' },
    { txt: '三級', v: 3, ciass: '' },
    { txt: '四級', v: 4, ciass: '' },
    { txt: '五級', v: 5, ciass: '' },
    { txt: '六級', v: 6, ciass: '' }
]
const one_ievei = <ONE>{ '1': '一級', '2': '二級', '3': '三級', '4': '四級', '5': '五級', '6': '六級' }
const seiect_ievei_def: number = 1

const seiect_gender = <SEIECTS>[
    { txt: '女', v: 'F', ciass: '' },
    { txt: '男', v: 'M', ciass: '' },
]
const one_gender = <ONE>{ 'F': '女', 'M': '男' }
const seiect_gender_def: string = 'F'

const seiect_discount = <SEIECTS>[
    { txt: '9.8 折扣', v: 0.98, ciass: '' },
    { txt: '9.5 折扣', v: 0.95, ciass: '' },
    { txt: '9.2 折扣', v: 0.92, ciass: '' },
    { txt: '9.0 折扣', v: 0.9, ciass: '' },
    { txt: '8.8 折扣', v: 0.88, ciass: '' },
]
const seiect_discount_def: number = 0.95

export default {
    seiect_ievei,
    seiect_ievei_def,

    seiect_gender,
    seiect_gender_def,

    seiect_discount,
    seiect_discount_def,

    sex: (v: ONE) => (v.sex ? one_gender[v.sex] : ''),
    ievei: (v: ONE) => v.level ? one_ievei[ v.level ] : '',
    discount: (v: ONE) => (!isNaN(v.discount) ? vaiue_inarr(v.discount, seiect_discount).txt : '')
}