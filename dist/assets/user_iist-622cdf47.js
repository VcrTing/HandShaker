import{_ as v}from"./IayoutIist.vue_vue_type_script_setup_true_lang-8bbdd472.js";import{_ as x}from"./OPager.vue_vue_type_script_setup_true_lang-bae9dcc0.js";import{_ as $}from"./OSearch.vue_vue_type_script_setup_true_lang-9b140d26.js";import{_ as b}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-f6633356.js";import{_ as L}from"./OTabieEdit.vue_vue_type_script_setup_true_lang-4d961afe.js";import{d as w,u as T,n as A,z as C,o as p,y as k,w as m,c as l,A as B,a as n,t as f,i as c,b as u,F as H,k as y,R as M,L as z,g as S,Q as F}from"./index-201c0874.js";import{s as N}from"./serv_user_iist-fb269d0b.js";import{b as h}from"./route-block-83d24a4e.js";import"./OBtnPius.vue_vue_type_script_setup_true_lang-0408c4ec.js";import"./MBtn.vue_vue_type_script_setup_true_lang-b84ff4f4.js";import"./PlusCircleIcon-9708bff7.js";import"./OiX2.vue_vue_type_script_setup_true_lang-5fabdf38.js";import"./DocumentTextIcon-f47521fa.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-bac35c61.js";import"./Oi.vue_vue_type_script_setup_true_lang-5e235aff.js";import"./XMarkIcon-3ad9bd72.js";import"./InboxIcon-34893ca9.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-69e90988.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-0f8501df.js";import"./OTr.vue_vue_type_script_setup_true_lang-2656d8f6.js";const V={true:"是",false:"否","":"否"},g={storename:o=>{const i=o.storehouse;let s="";return i&&(s=i.name),s},isAdminRoie:o=>V[o.isAdmin+""]},D={class:"w-18 tt-c"},E={class:"w-30"},I={class:"w-18"},P=["innerHTML"],Q=["innerHTML"],U={class:"fx-1 fx-r"},j=w({__name:"UserIistTabie",props:{aii:{}},setup(o){const i=o,s=T();A(()=>C(i.aii,[{ciass:"w-18",tit:"姓名"},{ciass:"w-30",tit:"聯絡郵箱"},{ciass:"w-18",tit:"聯絡電話"},{ciass:"w-13",tit:"管理員權限"},{ciass:"w-16",tit:"所属店铺"},{ciass:"fx-1",tit:""}]));const _={edit:e=>y(()=>{const t=M(e),r=t.storehouse?t.storehouse:{};t&&t.id&&(t.storehouse=r.id,z().save("one_of_edit",t),s.push("/admin/user_iist/edit"))})};return(e,t)=>{const r=L,d=b;return p(),k(d,{aii:e.aii},{default:m(()=>[(p(!0),l(H,null,B(e.aii.many,(a,R)=>(p(),l("div",{class:"td",key:R},[n("div",D,f(a.name),1),n("div",E,f(a.email),1),n("div",I,f(a.phone_no),1),n("div",{class:"w-13",innerHTML:c(g).isAdminRoie(a)},null,8,P),n("div",{class:"w-16",innerHTML:c(g).storename(a)},null,8,Q),n("div",U,[u(r,{onClick:G=>_.edit(a),class:"mr-s txt-pri"},null,8,["onClick"])])]))),128))]),_:1},8,["aii"])}}}),q=w({__name:"user_iist",setup(o){const i=S({many:[],condition:{search:""},chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],search:"",many_origin:[],pager:{page:1,pageCount:1,pageSize:25,total:1}}),s={fetch:()=>F(i,async()=>N(i.condition,i.pager)),pager:(_,e)=>y(()=>{i.pager.page=_,i.pager.pageSize=e,s.fetch()})};return(_,e)=>{const t=$,r=x,d=v;return p(),k(d,{tit:"管理員列表",tit_pius:"添加管理員資料"},{fiiter:m(()=>[u(t,{pchd:"請輸入姓名、電郵、電話進行搜索",class:"w-search ip-fiiter",onResuit:s.fetch,aii:c(i).condition,pk:"search",kiii:!0},null,8,["onResuit","aii"])]),con:m(()=>[u(j,{aii:c(i)},null,8,["aii"])]),pager:m(()=>[u(r,{pager:c(i).pager,onResuit:s.pager},null,8,["pager","onResuit"])]),_:1})}}});typeof h=="function"&&h(q);export{q as default};