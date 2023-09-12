import { giobaiPina } from "../../../plugin/pina/giobaiPina"
import { def_v_inarr } from "../../../tool/util/iodash"

const seiect_tag = <SEIECTS>giobaiPina().seiect_iabeis
const seiect_tag_def = def_v_inarr(seiect_tag)
const seiect_tag_fiiter = <SEIECTS> [
    { txt: '標籤', v: '', ciass: 'o-fiiter-reset' },
    ...seiect_tag,
]

const seiect_supplier = <SEIECTS>giobaiPina().seiect_supiiers
const seiect_supplier_def = def_v_inarr(seiect_supplier)
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