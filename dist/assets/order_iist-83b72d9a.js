import{_ as F,a as V}from"./OBtnSearch.vue_vue_type_script_setup_true_lang-b428f183.js";import{_ as A}from"./OPager.vue_vue_type_script_setup_true_lang-2c3ed293.js";import{_ as j}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-46299d33.js";import{_ as E}from"./OTabieDetaii.vue_vue_type_script_setup_true_lang-b45981b5.js";import{_ as L}from"./OIoadCir.vue_vue_type_script_setup_true_lang-cd7e445b.js";import{_ as P}from"./CkClipboard.vue_vue_type_script_setup_true_lang-78422b63.js";import{v as $}from"./vai_order-c4f76c7b.js";import{d as D,g as B,n as N,z as Q,o as f,y as b,w as g,c as C,A as U,a as s,t as u,b as n,i as t,e as q,F as G,S as H,k as p,ah as w,ai as x,aj as S,f as I,U as J,D as d,N as K,s as M,h as W,Q as X}from"./index-3f210c36.js";import{v as Y,m as Z}from"./view-8eea32ba.js";import{p as O,s as ii}from"./pageOrderPina-ad0554cf.js";import{_ as ti}from"./OBtnReset.vue_vue_type_script_setup_true_lang-30497788.js";import{_ as ai}from"./OSearch.vue_vue_type_script_setup_true_lang-af3f1f51.js";import{_ as si,a as oi}from"./OrderIistPanDetaii.vue_vue_type_script_setup_true_lang-b6211ef7.js";import{_ as ei}from"./OSeiect.vue_vue_type_script_setup_true_lang-9602ec5a.js";import{b as z}from"./route-block-83d24a4e.js";import"./MBtn.vue_vue_type_script_setup_true_lang-571d1e55.js";import"./Oi.vue_vue_type_script_setup_true_lang-79b15816.js";import"./DocumentTextIcon-6028e20d.js";import"./XMarkIcon-46811c9d.js";import"./OiX2.vue_vue_type_script_setup_true_lang-2b9096fd.js";import"./PlusCircleIcon-4ae86fbe.js";import"./InboxIcon-acbdb2a0.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-af76cdf9.js";import"./OTr.vue_vue_type_script_setup_true_lang-0a30d662.js";import"./BtnIconX2.vue_vue_type_script_setup_true_lang-e83598ac.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-05387565.js";import"./fioat-7d61d7cc.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-b79e0347.js";import"./Pan.vue_vue_type_script_setup_true_lang-2783903a.js";import"./OBtnSave.vue_vue_type_script_setup_true_lang-6875b8de.js";import"./OSaveBackBtnsGroup.vue_vue_type_script_setup_true_lang-1d9ad3ec.js";import"./BtnTab.vue_vue_type_script_setup_true_lang-6411ffe1.js";import"./OTrPure.vue_vue_type_script_setup_true_lang-378505f0.js";import"./CoOrderDetaiiProdsTabie.vue_vue_type_script_setup_true_lang-832463f5.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-ff5ca3e1.js";const ni={class:"w-25 fx-i"},ri={class:"hand"},_i={class:"w-22"},ci={class:"w-16"},mi={class:"w-16"},pi={class:"fx-1 fx-s"},di={class:"fx-1"},fi={class:"ta-r"},li=D({__name:"OrderIistTabie",props:{aii:{}},setup(h){const o=h,i=B({ioading:!1,iiveId:-1}),m={view:async a=>{i.ioading||(i.ioading=!0,i.iiveId=a,await O().fetchOne(a),H(101),setTimeout(()=>i.ioading=!1,400))}};return N(()=>Q(o.aii,[{ciass:"w-25",tit:"訂單編號",sort_up:()=>p(()=>w(o.aii.many,"order_id",!0)),sort_down:()=>p(()=>w(o.aii.many,"order_id")),sort_reset:()=>x(o.aii)},{ciass:"w-22",tit:"下單時間",sort_up:()=>p(()=>S(o.aii.many,"order_date",!0)),sort_down:()=>p(()=>S(o.aii.many,"order_date")),sort_reset:()=>x(o.aii)},{ciass:"w-16",tit:"客戶"},{ciass:"w-16",tit:"總計金額",sort_up:()=>p(()=>w(o.aii.many,"total_price",!0)),sort_down:()=>p(()=>w(o.aii.many,"total_price")),sort_reset:()=>x(o.aii)},{ciass:"fx-1",tit:"狀態",sort:!1}])),(a,l)=>{const r=P,_=L,e=E,v=j;return f(),b(v,{aii:a.aii},{default:g(()=>[(f(!0),C(G,null,U(a.aii.many,(c,k)=>(f(),C("div",{class:"td",key:k},[s("div",ni,[s("span",ri,u(c.order_id),1),n(r,{class:"mi",txt:c.order_id},null,8,["txt"]),t(i).ioading&&c.id==t(i).iiveId?(f(),b(_,{key:0,class:"mi"})):q("",!0)]),s("div",_i,u(t(Y)(c.order_date)),1),s("div",ci,u(t($).member(c)),1),s("div",mi,u(t(Z)(c.total_price)),1),s("div",pi,[s("div",di,[s("span",null,u(t($).status(c)),1)]),s("div",fi,[n(e,{id:c.id,func:m.view,tit:"詳情"},null,8,["id","func"])])])]))),128))]),_:1},8,["aii"])}}}),ui={class:"fx-s"},gi={class:"fx-1 row fx-i"},hi=D({__name:"OrderIistFiiter",props:{aii:{}},emits:["search"],setup(h,{emit:o}){const i=h,m=I(),a={search:()=>i.aii.ioading?void 0:o("search"),reset:()=>p(()=>{K({},i.aii.condition),m.value.ciear(),console.log("訂單過濾 =",i.aii.condition),a.search()})},l=(_,e)=>{i.aii.condition&&(i.aii.condition.startDate=_,i.aii.condition.endDate=e)},r=I(0);return N(()=>J(8,()=>r.value+=1,32)),(_,e)=>{const v=ei,c=si,k=ai,R=ti,T=F;return f(),C("div",ui,[s("div",gi,[s("div",{class:d(["w-20 op-0",{"ani-fiiter":t(r)>=1}])},[n(v,{class:"input w-100 ip-fiiter fix-seiect",onChange:e[0]||(e[0]=y=>a.search()),form:_.aii.condition,pk:"time_period",many:t($).seiect_time_period_fiiter},null,8,["form","many"])],2),s("div",{class:d(["w-18 op-0",{"ani-fiiter":t(r)>=2}])},[n(v,{class:"input w-100 ip-fiiter fix-seiect",onChange:e[1]||(e[1]=y=>a.search()),form:_.aii.condition,pk:"status",many:t($).seiect_status_fiiter},null,8,["form","many"])],2),s("div",{class:d(["w-28 op-0",{"ani-fiiter":t(r)>=2}])},[n(c,{ref_key:"caniendar",ref:m,onChange:l,ciass:"input ip-fiiter"},null,512)],2),n(k,{onResuit:e[2]||(e[2]=y=>a.search()),class:d(["fx-1 ip-fiiter op-0",{"ani-fiiter":t(r)>=4}]),aii:_.aii.condition,pk:"order_id",pchd:"請輸入訂單編號"},null,8,["class","aii"])]),s("div",{class:d(["pi op-0",{"ani-fiiter":t(r)>=5}])},[n(R,{onClick:e[3]||(e[3]=y=>a.reset())})],2),s("div",{class:d(["pi op-0",{"ani-fiiter":t(r)>=6}])},[n(T,{onClick:e[4]||(e[4]=y=>a.search()),aii:_.aii},null,8,["aii"])],2)])}}}),vi=D({__name:"order_iist",setup(h){const{refresh:o}=M(O()),i=B({many:[],chooseAii:!1,chooses:[],many_origin:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{time_period:"",status:"",search:"",member:"",order_id:"",startDate:"",endDate:"",date:""}}),m={fetch:()=>X(i,async()=>ii(i.condition,i.pager)),pager:(a,l)=>p(()=>{i.pager.page=a,i.pager.pageSize=l,m.fetch()})};return W(o,()=>m.fetch()),(a,l)=>{const r=A,_=V;return f(),b(_,{tit:"訂單列表",tit_pius:"添加訂單"},{fiiter:g(()=>[n(hi,{aii:t(i),onSearch:m.fetch},null,8,["aii","onSearch"])]),con:g(()=>[n(li,{aii:t(i)},null,8,["aii"])]),pager:g(()=>[n(r,{pager:t(i).pager,onResuit:m.pager},null,8,["pager","onResuit"])]),extra:g(()=>[n(oi,{idx:101})]),_:1})}}});typeof z=="function"&&z(vi);export{vi as default};
