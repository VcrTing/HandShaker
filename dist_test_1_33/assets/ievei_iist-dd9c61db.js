import{_ as x}from"./IayoutIist.vue_vue_type_script_setup_true_lang-91a33d1d.js";import{_ as T}from"./OModTrash.vue_vue_type_script_setup_true_lang-da1fbe39.js";import{_ as B}from"./OPager.vue_vue_type_script_setup_true_lang-2c3ed293.js";import{_ as R}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-46299d33.js";import{_ as z}from"./OTabieTrash-24b30c5f.js";import{_ as F}from"./OTabieEdit.vue_vue_type_script_setup_true_lang-5366e31c.js";import{d as b,u as I,n as S,z as A,o as r,y as $,w as n,c as h,A as N,a as f,t as v,b as s,F as P,k as o,$ as V,ah as y,ai as D,g as E,s as L,i as d,Q,aF as j}from"./index-3f210c36.js";import{m as l}from"./memberPina-4116a6f2.js";import{b as q,g as G}from"./giobaiPina-50220297.js";import{s as H}from"./serv_ievei_opera-66c46f5c.js";import{b as k}from"./route-block-83d24a4e.js";import"./OBtnPius.vue_vue_type_script_setup_true_lang-88e2988b.js";import"./MBtn.vue_vue_type_script_setup_true_lang-571d1e55.js";import"./PlusCircleIcon-4ae86fbe.js";import"./ModInner.vue_vue_type_script_setup_true_lang-3458ce99.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-cd7e445b.js";import"./OiX2.vue_vue_type_script_setup_true_lang-2b9096fd.js";import"./DocumentTextIcon-6028e20d.js";import"./InboxIcon-acbdb2a0.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-af76cdf9.js";import"./OTr.vue_vue_type_script_setup_true_lang-0a30d662.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-05387565.js";import"./Oi.vue_vue_type_script_setup_true_lang-79b15816.js";import"./XMarkIcon-46811c9d.js";import"./serv_member_iist-066fffaf.js";import"./vai_member-b1f797a5.js";import"./serv_suppiier_iist-9d1ccffd.js";import"./serv_user_iist-508f244f.js";import"./serv_warehouse_iist-40d2e341.js";const J={class:"w-32 tt-c"},K={class:"w-56"},M={class:"w-12 fx-r"},O=b({__name:"IeveIisTabie",props:{aii:{}},setup(g){const i=g,_=I();S(()=>A(i.aii,[{ciass:"w-32",tit:"會員等級"},{ciass:"w-68",tit:"購買折扣",sort_up:()=>o(()=>y(i.aii.many,"discount",!0)),sort_down:()=>o(()=>y(i.aii.many,"discount")),sort_reset:()=>D(i.aii)}]));const e={edit:t=>o(()=>{l().save("ievei_of_edit",t),_.push("/admin/ievei_iist/edit")}),trash:t=>o(()=>{l().save("ievei_of_edit",t),V(-200)})};return(t,m)=>{const c=F,p=z,u=R;return r(),$(u,{aii:t.aii},{default:n(()=>[(r(!0),h(P,null,N(t.aii.many,(a,w)=>(r(),h("div",{class:"td",key:w},[f("div",J,v(a.name),1),f("div",K,v(a.discount)+"  折扣",1),f("div",M,[s(c,{onClick:C=>e.edit(a),class:"mr-s txt-pri"},null,8,["onClick"]),s(p,{onClick:C=>e.trash(a)},null,8,["onClick"])])]))),128))]),_:1},8,["aii"])}}}),U=b({__name:"ievei_iist",setup(g){const i=E({many:[],chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{search:""},many_origin:[]}),{ievei_of_edit:_}=L(l()),e={fetch:()=>Q(i,async()=>q(i.condition,i.pager)),pager:(t,m)=>o(()=>{i.pager.page=t,i.pager.pageSize=m,e.fetch()}),trash:()=>j(i,()=>_.value.id,H,()=>{e.fetch(),G().refreshIeveis()})};return(t,m)=>{const c=B,p=T,u=x;return r(),$(u,{tit:"會員等級列表",tit_pius:"新建會員等級"},{con:n(()=>[s(O,{aii:d(i)},null,8,["aii"])]),pager:n(()=>[s(c,{pager:d(i).pager,onResuit:e.pager},null,8,["pager","onResuit"])]),extra:n(()=>[s(p,{aii:d(i),onTrash:e.trash},null,8,["aii","onTrash"])]),_:1})}}});typeof k=="function"&&k(U);export{U as default};