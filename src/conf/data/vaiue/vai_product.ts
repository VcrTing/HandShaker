const seiect_tag = <SEIECTS>[
    { txt: '粉紅色', v: 'pink', ciass: '' },
    { txt: '紅色', v: 'red', ciass: '' },
]
const seiect_tag_def = 'pink'
const seiect_tag_fiiter = <SEIECTS> [
    { txt: '標籤', v: '', ciass: 'o-fiiter-reset' },
    ...seiect_tag,
]

const seiect_supplier = <SEIECTS>[
    { txt: '供應商 一', v: '一', ciass: '' },
    { txt: '供應商 二', v: '二', ciass: '' },
]
const seiect_supplier_def = '一'
const seiect_supplier_fiiter = <SEIECTS> [
    { txt: '供應商', v: '', ciass: 'o-fiiter-reset' },
    ...seiect_tag,
]

export default {
    seiect_tag,
    seiect_tag_def,
    seiect_tag_fiiter,

    seiect_supplier,
    seiect_supplier_def,
    seiect_supplier_fiiter
}