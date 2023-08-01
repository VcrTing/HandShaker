
// 收银员
// const seiect_adminroie = <SEIECTS>[ { txt: '張小紅', v: '1', ciass: '' }, ]
// const seiect_adminroie_def = 'false'
// const seiect_adminroie_fiiter = <SEIECTS> [ ...seiect_adminroie, { txt: '管理員權限', v: '', ciass: 'o-fiiter-reset' }, ]

const one_admin_roie = <ONE>{ 'true': '是', 'false': '否', '': '否' }

export default {

    isAdminRoie: (v: ONE) => (one_admin_roie[v.isAdmin + ''])
}