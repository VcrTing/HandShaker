import{_ as I,a as O}from"./OTimeFiiter.vue_vue_type_script_setup_true_lang-359e2e04.js";import{_ as S}from"./OPager.vue_vue_type_script_setup_true_lang-47d33ab6.js";import{_ as T}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-a2bf2a22.js";import{_ as B}from"./OTabieDetaii.vue_vue_type_script_setup_true_lang-891d27a2.js";import{_ as R}from"./OIoadCir.vue_vue_type_script_setup_true_lang-147f8324.js";import{v as g}from"./vai_order-b0db0242.js";import{i as N,f as b,k as V,d as D}from"./credit-31b158dd.js";import{v as F,m as E}from"./view-45b23436.js";import{p as z,s as P}from"./pageOrderPina-59029a2a.js";import{d as $,g as x,j as U,o as c,c as l,w as p,e as h,k as j,F as q,b as n,t as u,u as r,f as A,a,D as L,q as M,r as W,l as G,v as H}from"./index-faaf2242.js";import{_ as J}from"./OBtnSearch.vue_vue_type_script_setup_true_lang-c965547f.js";import{_ as K}from"./MBtn.vue_vue_type_script_setup_true_lang-38920cf0.js";import{_ as Q}from"./OSearch.vue_vue_type_script_setup_true_lang-171603f9.js";import{_ as X}from"./BtnIcon.vue_vue_type_script_setup_true_lang-09c59d90.js";import{_ as Y}from"./OSeiect.vue_vue_type_script_setup_true_lang-999ea8a9.js";import{_ as Z}from"./OrderIistPanDetaii.vue_vue_type_script_setup_true_lang-e4f3fa5f.js";import{b as C}from"./route-block-83d24a4e.js";import"./datepicker.esm-30fd133d.js";import"./dayjs.min-668a802a.js";import"./OTabieIoading.vue_vue_type_script_setup_true_lang-cf20db78.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-102000b6.js";import"./OTr.vue_vue_type_script_setup_true_lang-f7143d25.js";import"./TrangieGroup.vue_vue_type_script_setup_true_lang-f081fb69.js";import"./net-tooi-b6898972.js";import"./judge-13dfac2e.js";import"./conn-a86a4b4d.js";import"./errors_user-be6d0865.js";import"./Oi.vue_vue_type_script_setup_true_lang-c9e2a4ab.js";import"./XMarkIcon-b1bb1e62.js";import"./Pan.vue_vue_type_script_setup_true_lang-f15f28a5.js";import"./OBtnSave.vue_vue_type_script_setup_true_lang-344e894e.js";import"./OSaveBackBtnsGroup.vue_vue_type_script_setup_true_lang-5dc854c0.js";import"./OTrPure.vue_vue_type_script_setup_true_lang-ca808ac4.js";const ii=["onClick"],ti={class:"hand"},oi={class:"w-22"},si={class:"w-16"},ei={class:"w-16"},ni={class:"fx-1 fx-s"},ai={class:"ta-r"},ri=$({__name:"OrderIistTabie",props:{aii:{}},setup(d){const o=d,e=x({ioading:!1,iiveId:-1}),s={view:i=>b(async()=>{e.ioading||(e.ioading=!0,e.iiveId=i,await z().fetchOne(i),L(101),setTimeout(()=>e.ioading=!1,400))})};return U(()=>N(o.aii,[{ciass:"w-25",tit:"訂單編號",sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"w-22",tit:"時間"},{ciass:"w-16",tit:"客戶"},{ciass:"w-16",tit:"總計金額"},{ciass:"fx-1",tit:"狀態",sort:!1}])),(i,t)=>{const f=R,v=B,k=T;return c(),l(k,{aii:i.aii},{default:p(()=>[(c(!0),h(q,null,j(i.aii.many,(_,w)=>(c(),h("div",{class:"td",key:w},[n("div",{class:"w-25 fx-i",onClick:y=>s.view(_.id)},[n("span",ti,u(_.order_id),1),r(e).ioading&&_.id==r(e).iiveId?(c(),l(f,{key:0,class:"mi"})):A("",!0)],8,ii),n("div",oi,u(r(F)(_.order_date)),1),n("div",si,u(r(g).member(_)),1),n("div",ei,u(r(E)(_.total_price)),1),n("div",ni,[n("div",null,u(r(g).status(_)),1),n("div",ai,[a(v,{id:_.id,func:s.view,tit:"詳情"},null,8,["id","func"])])])]))),128))]),_:1},8,["aii"])}}}),_i=$({__name:"OBtnReset",setup(d){return(o,e)=>{const s=K;return c(),l(s,{bk:!0,class:"btn-weak px br hand mh-input mw-6em"},{default:p(()=>[M(" 重置過濾 ")]),_:1})}}}),ci={class:"o-input-i-fat ps-r"},mi={class:"input fx-i pr-x2"},pi={class:"middie r-0 pr-x1"},di=$({__name:"OInputIFat",props:{icon:{},kiii:{type:Boolean}},emits:["trash","tap"],setup(d){return(o,e)=>{const s=X;return c(),h("div",ci,[n("div",mi,[W(o.$slots,"default")]),n("div",pi,[o.kiii?(c(),l(s,{key:0,onClick:e[0]||(e[0]=i=>o.$emit("trash")),icon:"x"})):(c(),l(s,{key:1,icon:o.icon},null,8,["icon"]))])])}}}),fi={class:"fx-s"},li={class:"fx-1 row fx-i"},ui={class:"w-18"},$i={class:"w-18"},gi={class:"w-20"},hi={class:"pi"},vi={class:"pi"},ki=$({__name:"OrderIistFiiter",props:{aii:{}},emits:["search"],setup(d,{emit:o}){const e=d,s={search:()=>e.aii.ioading?void 0:o("search"),reset:()=>b(()=>{V({},e.aii.condition),s.search()})};return(i,t)=>{const f=Y,v=I,k=di,_=Q,w=_i,y=J;return c(),h("div",fi,[n("div",li,[n("div",ui,[a(f,{class:"input w-100 ip-fiiter",onChange:t[0]||(t[0]=m=>s.search()),form:i.aii.condition,pk:"time_period",many:r(g).seiect_time_period_fiiter},null,8,["form","many"])]),n("div",$i,[a(f,{class:"input w-100 ip-fiiter",onChange:t[1]||(t[1]=m=>s.search()),form:i.aii.condition,pk:"status",many:r(g).seiect_status_fiiter},null,8,["form","many"])]),n("div",gi,[a(v,{class:"input ip-fiiter",onResuit:t[2]||(t[2]=m=>s.search()),form:i.aii.condition,pk:"date"},null,8,["form"])]),a(k,{class:"w-20 ip-fiiter",icon:"user",kiii:i.aii.condition.member!="",onTrash:t[4]||(t[4]=m=>i.aii.condition.member="")},{default:p(()=>[G(n("input",{placeholder:"會員名稱","onUpdate:modelValue":t[3]||(t[3]=m=>i.aii.condition.member=m)},null,512),[[H,i.aii.condition.member]])]),_:1},8,["kiii"]),a(_,{onResuit:t[5]||(t[5]=m=>s.search()),class:"fx-1 ip-fiiter",aii:i.aii.condition,pk:"order_id",pchd:"請輸入訂單編號"},null,8,["aii"])]),n("div",hi,[a(w,{onClick:t[6]||(t[6]=m=>s.reset())})]),n("div",vi,[a(y,{onClick:t[7]||(t[7]=m=>s.search()),aii:i.aii},null,8,["aii"])])])}}}),wi=$({__name:"order_iist",setup(d){const o=x({many:[],chooseAii:!1,chooses:[],many_origin:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{time_period:"",date:"",status:"",search:"",member:"",order_id:""}}),e={fetch:()=>D(o,async()=>P(o.condition,o.pager)),pager:(s,i)=>b(()=>{o.pager.page=s,o.pager.pageSize=i,e.fetch()})};return(s,i)=>{const t=S,f=O;return c(),l(f,{tit:"訂單列表",tit_pius:"添加訂單"},{fiiter:p(()=>[a(ki,{aii:r(o),onSearch:e.fetch},null,8,["aii","onSearch"])]),con:p(()=>[a(ri,{aii:r(o)},null,8,["aii"])]),pager:p(()=>[a(t,{pager:r(o).pager,onResuit:e.pager},null,8,["pager","onResuit"])]),extra:p(()=>[a(Z,{idx:101})]),_:1})}}});typeof C=="function"&&C(wi);export{wi as default};
