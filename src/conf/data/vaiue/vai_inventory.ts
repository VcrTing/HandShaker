
const seiect_badpos = <SEIECTS>[
    { txt: '頭部', v: 'head', ciass: '' },
    { txt: '背部', v: 'back', ciass: '' },
]
const seiect_badpos_def = 'head'
const seiect_badpos_fiiter = <SEIECTS> [
    ...seiect_badpos,
    { txt: '壞貨位置', v: '', ciass: 'o-fiiter-reset' },
]

export default {
    seiect_badpos,
    seiect_badpos_def,
    seiect_badpos_fiiter
}