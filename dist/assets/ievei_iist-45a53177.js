import{_ as x}from"./IayoutIist.vue_vue_type_script_setup_true_lang-409dd9d2.js";import{a as T,_ as B}from"./OTabieTrash-c0b6f0eb.js";import{_ as R}from"./OPager.vue_vue_type_script_setup_true_lang-a402818c.js";import{_ as I}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-5dfa513f.js";import{_ as S}from"./OTabieEdit.vue_vue_type_script_setup_true_lang-0de29346.js";import{d as $,u as z,n as D,C as F,o as r,y as b,w as n,c as h,D as N,a as f,t as v,b as a,F as P,k as s,$ as V,af as y,ag as A,g as E,s as L,i as d,Q,at as j}from"./index-5bac116f.js";import{m as l}from"./memberPina-db5b6371.js";import{s as q,g as G}from"./giobaiPina-d1e2a476.js";import{s as H}from"./serv_ievei_opera-d2ee45f0.js";import{b as k}from"./route-block-83d24a4e.js";import"./OBtnPius.vue_vue_type_script_setup_true_lang-e6c7b3e4.js";import"./MBtn.vue_vue_type_script_setup_true_lang-6cc77674.js";import"./ModInner.vue_vue_type_script_setup_true_lang-711372ae.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-249f1401.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-3880b0bf.js";import"./Oi.vue_vue_type_script_setup_true_lang-1b392a3b.js";import"./DocumentTextIcon-4647a903.js";import"./XMarkIcon-bf060d06.js";import"./OiX2.vue_vue_type_script_setup_true_lang-b37ab9b5.js";import"./InboxIcon-f92977c9.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-6ce3bd98.js";import"./OTr.vue_vue_type_script_setup_true_lang-4e804235.js";import"./serv_member_iist-7e61368e.js";import"./vai_member-aad06eab.js";import"./serv_iabei_iist-c3ee04ed.js";import"./serv_suppiier_iist-20836082.js";import"./serv_user_iist-93870098.js";import"./serv_warehouse_iist-9d2673f5.js";const J={class:"w-32 tt-c"},K={class:"w-56"},M={class:"w-12 fx-r"},O=$({__name:"IeveIisTabie",props:{aii:{}},setup(g){const i=g,_=z();D(()=>F(i.aii,[{ciass:"w-32",tit:"會員等級"},{ciass:"w-68",tit:"購買折扣",sort_up:()=>s(()=>y(i.aii.many,"discount",!0)),sort_down:()=>s(()=>y(i.aii.many,"discount")),sort_reset:()=>A(i.aii)}]));const e={edit:t=>s(()=>{l().save("ievei_of_edit",t),_.push("/admin/ievei_iist/edit")}),trash:t=>s(()=>{l().save("ievei_of_edit",t),V(-200)})};return(t,m)=>{const c=S,p=T,u=I;return r(),b(u,{aii:t.aii},{default:n(()=>[(r(!0),h(P,null,N(t.aii.many,(o,w)=>(r(),h("div",{class:"td",key:w},[f("div",J,v(o.name),1),f("div",K,v(o.discount)+"  折扣",1),f("div",M,[a(c,{onClick:C=>e.edit(o),class:"mr-s txt-pri"},null,8,["onClick"]),a(p,{onClick:C=>e.trash(o)},null,8,["onClick"])])]))),128))]),_:1},8,["aii"])}}}),U=$({__name:"ievei_iist",setup(g){const i=E({many:[],chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{search:""},many_origin:[]}),{ievei_of_edit:_}=L(l()),e={fetch:()=>Q(i,async()=>q(i.condition,i.pager)),pager:(t,m)=>s(()=>{i.pager.page=t,i.pager.pageSize=m,e.fetch()}),trash:()=>j(i,()=>_.value.id,H,()=>{e.fetch(),G().refreshIeveis()})};return(t,m)=>{const c=R,p=B,u=x;return r(),b(u,{tit:"會員等級列表",tit_pius:"新建會員等級"},{con:n(()=>[a(O,{aii:d(i)},null,8,["aii"])]),pager:n(()=>[a(c,{pager:d(i).pager,onResuit:e.pager},null,8,["pager","onResuit"])]),extra:n(()=>[a(p,{aii:d(i),onTrash:e.trash},null,8,["aii","onTrash"])]),_:1})}}});typeof k=="function"&&k(U);export{U as default};
