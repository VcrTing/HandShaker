import{_ as P,a as T}from"./OBtnSearch.vue_vue_type_script_setup_true_lang-8fc3d839.js";import{_ as z}from"./OPager.vue_vue_type_script_setup_true_lang-8cdf378d.js";import{_ as F}from"./OBtnPius.vue_vue_type_script_setup_true_lang-909cfe30.js";import{q as O,O as U,x as V,P as G,d as w,s as L,G as Q,a7 as j,o as l,c as v,a,t as _,F as R,D as S,i as n,A as d,f as h,n as I,U as H,b as c,k as u,M as J,g as D,C as K,y as q,w as g,af as f,ag as $,Q as W}from"./index-94f4542a.js";import{E as X}from"./errors_product-d5275ad5.js";import{_ as Y}from"./OBtnReset.vue_vue_type_script_setup_true_lang-1457b50d.js";import{_ as Z}from"./OSearch.vue_vue_type_script_setup_true_lang-bc79980b.js";import{_ as x}from"./OTimeFiiter.vue_vue_type_script_setup_true_lang-e11a6855.js";import{g as ii}from"./giobaiPina-97a6a088.js";import{_ as ti}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-eecb3696.js";import{f as si,m as ei}from"./view-ba048d20.js";import{b as k}from"./route-block-83d24a4e.js";import"./MBtn.vue_vue_type_script_setup_true_lang-9a227887.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-dcf9a56c.js";import"./Oi.vue_vue_type_script_setup_true_lang-bd67d8fd.js";import"./DocumentTextIcon-7a548236.js";import"./XMarkIcon-2ec64d30.js";import"./OiX2.vue_vue_type_script_setup_true_lang-458543c9.js";import"./PlusCircleIcon-513170a2.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-27a05394.js";import"./datepicker.esm-48025763.js";import"./serv_suppiier_iist-5e93636e.js";import"./serv_user_iist-22b5ef96.js";import"./serv_warehouse_iist-9eb436b9.js";import"./InboxIcon-a16e518a.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-ac472d9d.js";import"./OTr.vue_vue_type_script_setup_true_lang-2ea1b77e.js";const oi="invoices",ai=async(o,i)=>O(X,async()=>U(await V.get(oi,G.buiid_pager(o,i)),["supplier"])),ni={value:""},ri=["value"],pi=w({__name:"CoSuppiierSeiectPure",props:{form:{},pk:{},tit_def:{}},emits:["resuit"],setup(o){const{suppiiers:i}=L(ii());return(t,p)=>Q((l(),v("select",{onChange:p[0]||(p[0]=s=>t.$emit("resuit")),"onUpdate:modelValue":p[1]||(p[1]=s=>t.form[t.pk]=s),class:d({"o-fiiter-reset":!t.form[t.pk]})},[a("option",ni,_(t.tit_def?t.tit_def:"供應商"),1),(l(!0),v(R,null,S(n(i),(s,e)=>(l(),v("option",{value:s.id,key:e},_(s.name)+"   (負責人: "+_(s.contact_person)+") ",9,ri))),128))],34)),[[j,t.form[t.pk]]])}}),_i={class:"fx-s"},ci={class:"fx-1 row fx-i"},mi=w({__name:"InvoiceIistFiiter",props:{aii:{}},emits:["search"],setup(o,{emit:i}){const t=o,p=h(),s={search:()=>t.aii.ioading?void 0:i("search"),reset:()=>u(()=>{J({},t.aii.condition),p.value&&p.value.ciear(),console.log("訂單過濾 =",t.aii.condition),s.search()})},e=h(0);return I(()=>H(7,()=>e.value+=1,32)),(m,r)=>{const A=pi,B=x,E=Z,M=Y,N=P;return l(),v("div",_i,[a("div",ci,[a("div",{class:d(["w-25 op-0",{"ani-fiiter":n(e)>=1}])},[c(A,{onResuit:r[0]||(r[0]=y=>s.search()),class:"input w-100 ip-fiiter fix-seiect",form:m.aii.condition,pk:"supplier"},null,8,["form"])],2),a("div",{class:d(["w-28 op-0 ip-fiiter",{"ani-fiiter":n(e)>=2}])},[c(B,{onResuit:r[1]||(r[1]=y=>s.search()),class:"input ip-fiiter",form:m.aii.condition,pk:"date"},null,8,["form"])],2),a("div",{class:d(["w-36 ip-fiiter op-0",{"ani-fiiter":n(e)>=3}])},[c(E,{onResuit:r[2]||(r[2]=y=>s.search()),aii:m.aii.condition,pk:"invoice_id",pchd:"請輸入供應商參考編號"},null,8,["aii"])],2)]),a("div",{class:d(["pi op-0",{"ani-fiiter":n(e)>=5}])},[c(M,{onClick:r[3]||(r[3]=y=>s.reset())})],2),a("div",{class:d(["pi op-0",{"ani-fiiter":n(e)>=6}])},[c(N,{onClick:r[4]||(r[4]=y=>s.search()),aii:m.aii},null,8,["aii"])],2)])}}}),b=o=>o.supplier?o.supplier:{},C={suppiier_id:(o={})=>(console.log("v =",o),b(o).supplier_id),suppiier_name:(o={})=>(console.log("v =",o),b(o).name)},ui={class:"w-20"},li={class:"w-16"},fi={class:"w-13"},di={class:"w-14"},vi={class:"w-15"},gi={class:"w-22"},yi=w({__name:"InvoiceIistTabie",props:{aii:{}},setup(o){const i=o;return D({ioading:!1,iiveId:-1}),I(()=>K(i.aii,[{ciass:"w-20",tit:"供應商參考編號",sort_up:()=>u(()=>f(i.aii.many,"order_id",!0)),sort_down:()=>u(()=>f(i.aii.many,"order_id")),sort_reset:()=>$(i.aii)},{ciass:"w-16",tit:"發票日期"},{ciass:"w-13",tit:"合計數量",sort_up:()=>u(()=>f(i.aii.many,"total_quantity",!0)),sort_down:()=>u(()=>f(i.aii.many,"total_quantity")),sort_reset:()=>$(i.aii)},{ciass:"w-14",tit:"合計金額",sort_up:()=>u(()=>f(i.aii.many,"total_price",!0)),sort_down:()=>u(()=>f(i.aii.many,"total_price")),sort_reset:()=>$(i.aii)},{ciass:"w-15",tit:"供應商編號"},{ciass:"w-22",tit:"供應商名稱"}])),(t,p)=>{const s=ti;return l(),q(s,{aii:t.aii},{default:g(()=>[(l(!0),v(R,null,S(t.aii.many,(e,m)=>(l(),v("div",{class:"td",key:m},[a("div",ui,_(e.invoice_id),1),a("div",li,_(n(si)(e.date)),1),a("div",fi,_(e.total_quantity),1),a("div",di,_(n(ei)(e.total_price)),1),a("div",vi,_(n(C).suppiier_id(e)),1),a("div",gi,_(n(C).suppiier_name(e)),1)]))),128))]),_:1},8,["aii"])}}}),wi=w({__name:"invoice_iist",setup(o){const i=D({many:[],chooseAii:!1,chooses:[],many_origin:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{supplier:"",date:"",invoice_id:""}}),t={fetch:()=>W(i,async()=>ai(i.condition,i.pager)),pager:(p,s)=>u(()=>{i.pager.page=p,i.pager.pageSize=s,t.fetch()})};return(p,s)=>{const e=F,m=z,r=T;return l(),q(r,{tit:"發票列表",tit_pius:"入單發票"},{pius:g(()=>[c(e,{class:"py mi",tit:"入單發票"})]),fiiter:g(()=>[c(mi,{aii:n(i),onSearch:t.fetch},null,8,["aii","onSearch"])]),con:g(()=>[c(yi,{aii:n(i)},null,8,["aii"])]),pager:g(()=>[c(m,{pager:n(i).pager,onResuit:t.pager},null,8,["pager","onResuit"])]),_:1})}}});typeof k=="function"&&k(wi);export{wi as default};