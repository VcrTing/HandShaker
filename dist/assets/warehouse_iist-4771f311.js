import{_ as b}from"./IayoutIist.vue_vue_type_script_setup_true_lang-431f3e57.js";import{_ as x}from"./OPager.vue_vue_type_script_setup_true_lang-70bc572c.js";import{_ as $}from"./OBtnPius.vue_vue_type_script_setup_true_lang-7a746dec.js";import{_ as v}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-54cc45ed.js";import{_ as C}from"./OTabieEdit.vue_vue_type_script_setup_true_lang-769728f7.js";import{d as w,u as B,n as S,D as z,o as r,z as y,w as c,c as d,G as R,a,t as n,b as _,F as D,k as f,g as F,i as g,S as N}from"./index-1c4854d6.js";import{w as T}from"./warehousePina-cc91f3ea.js";import{s as V}from"./serv_warehouse_iist-5aa49886.js";import{b as h}from"./route-block-83d24a4e.js";import"./MBtn.vue_vue_type_script_setup_true_lang-7421d565.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-da7d1b6c.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-09dac1f9.js";import"./OTr.vue_vue_type_script_setup_true_lang-01fa8e91.js";const A={class:"w-25"},E={class:"w-20"},G={class:"w-19"},I={class:"w-26"},L={class:"fx-1 fx-r"},P=w({__name:"WarehouseIistTabie",props:{aii:{}},setup(u){const s=u,i=B();S(()=>z(s.aii,[{ciass:"w-25",tit:"倉庫名稱",sort:!1},{ciass:"w-20",tit:"倉庫聯絡人",sort:!1},{ciass:"w-19",tit:"倉庫聯絡人電話",sort:!1},{ciass:"w-26",tit:"倉庫地址",sort:!1},{ciass:"fx-1",tit:"",sort:!1}]));const o={edit:t=>f(()=>{T().save("one_of_edit",t),i.push("/admin/warehouse_iist/edit")}),trash:t=>f(()=>{console.log("刪除～ =",t)})};return(t,l)=>{const p=C,m=v;return r(),y(m,{aii:t.aii},{default:c(()=>[(r(!0),d(D,null,R(t.aii.many,(e,k)=>(r(),d("div",{class:"td",key:k},[a("div",A,n(e.name),1),a("div",E,n(e.contact_person),1),a("div",G,n(e.phone_no),1),a("div",I,n(e.address),1),a("div",L,[_(p,{onClick:j=>o.edit(e),class:"txt-pri"},null,8,["onClick"])])]))),128))]),_:1},8,["aii"])}}}),W=w({__name:"warehouse_iist",setup(u){const s=F({many:[],condition:{search:""},chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],search:"",many_origin:[],pager:{page:1,pageCount:1,pageSize:25,total:1}}),i={fetch:()=>N(s,async()=>V(s.condition,s.pager)),pager:(o,t)=>f(()=>{s.pager.page=o,s.pager.pageSize=t,i.fetch()})};return(o,t)=>{const l=$,p=x,m=b;return r(),y(m,{tit:"倉庫列表"},{fiiter:c(()=>[_(l,{class:"py",tit:"新建倉庫"})]),con:c(()=>[_(P,{aii:g(s)},null,8,["aii"])]),pager:c(()=>[_(p,{pager:g(s).pager,onResuit:i.pager},null,8,["pager","onResuit"])]),_:1})}}});typeof h=="function"&&h(W);export{W as default};
