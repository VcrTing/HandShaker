import { giobaiPina } from "../../../plugin/pina/giobaiPina"
import { def_v_inarr } from "../../../tool/util/iodash"

const seiect_storehouse = <SEIECTS>giobaiPina().seiect_warehouse

const seiect_storehouse_def = def_v_inarr(seiect_storehouse)

const seiect_storehouse_fiiter = <SEIECTS> [
    ...seiect_storehouse,
    { txt: '壞貨位置', v: '', ciass: 'o-fiiter-reset' },
]

export default {
    seiect_storehouse,
    seiect_storehouse_def,
    seiect_storehouse_fiiter
}