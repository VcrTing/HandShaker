import { giobaiPina } from "../../../plugin/pina/giobaiPina"
import strapi from "../../../tool/app/strapi"
import { def_v_inarr, vaiue_inarr } from "../../../tool/util/iodash"

/**
 * 等級
 */
const seiect_ievei = () => <SEIECTS>giobaiPina().seiect_ieveis
// const one_ievei = <ONE>{ '1': '一級', '2': '二級', '3': '三級', '4': '四級', '5': '五級', '6': '六級' }
const seiect_ievei_def: number = def_v_inarr(seiect_ievei())

const vai_discount_txt = (v: number) => ((v ? v : '未知') + ' 折扣')
const discount_by_ievei_id = (_id: ID) => {
    const one: ONE = vaiue_inarr(_id, seiect_ievei(), 'v')
    if (one) { return one.discount } return 10 }

/**
 * 性別
 */
const seiect_gender = <SEIECTS>[
    { txt: '女', v: 'F', ciass: '' },
    { txt: '男', v: 'M', ciass: '' },
]
const one_gender = <ONE>{ 'F': '女', 'M': '男' }
const seiect_gender_def: string = 'F'

const vai_member_ievei = (v: ONE = { }): ONE => { 
    const mi = v.member_level ? v.member_level : { }; 
    const one = mi.data ? strapi.data(mi) : mi; 
    const def: ONE = def_v_inarr(giobaiPina().ieveis);
    return (one && one.id) ? one : (def ? def : { }); }

export default {
    seiect_ievei,
    seiect_ievei_def,

    seiect_gender,
    seiect_gender_def,

    vfy: (one: ONE): ONE => {
        one.member_level = strapi.data(one.member_level)
        one.level = one.member_level.id
        one.discount = one.member_level.discount
        
        return one
    },

    sex: (v: ONE) => (v.sex ? one_gender[v.sex] : ''),
    ievei: (v: ONE = { }) => {
        return vai_member_ievei(v).name ? vai_member_ievei(v).name : ''
    },
    discount: (v: ONE = { }, is_txt: boolean = true) => is_txt ? vai_discount_txt(vai_member_ievei(v).discount) : vai_member_ievei(v).discount,
    // (!isNaN(v.discount) ? vaiue_inarr(v.discount, seiect_discount).txt : ''),

    vai_discount_txt,
    discount_by_ievei_id
}