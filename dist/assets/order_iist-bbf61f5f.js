import{_ as C,a as I}from"./OTimeFiiter.vue_vue_type_script_setup_true_lang-177544d8.js";import{_ as x}from"./OPager.vue_vue_type_script_setup_true_lang-7396dc06.js";import{_ as O}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-db92d51b.js";import{_ as T}from"./OTabieDetaii.vue_vue_type_script_setup_true_lang-a74eba5f.js";import{_ as B}from"./OIoadCir.vue_vue_type_script_setup_true_lang-3fb6bebc.js";import{v as u}from"./vai_order-6b9d4156.js";import{i as S,f as k,d as F}from"./credit-2841b23d.js";import{v as N}from"./view-60076a03.js";import{p as R,s as V}from"./pageOrderPina-a359594d.js";import{d as $,h as y,n as D,o as _,f as d,w as c,c as g,g as E,F as z,a as s,t as p,u as r,e as P,b as a,$ as U,r as j,j as A,v as L}from"./index-5e9b51bc.js";import{_ as M}from"./OBtnSearch.vue_vue_type_script_setup_true_lang-e129c265.js";import{_ as W}from"./OSearch.vue_vue_type_script_setup_true_lang-d134a162.js";import{_ as q}from"./BtnIcon.vue_vue_type_script_setup_true_lang-9b725950.js";import{_ as G}from"./OSeiect.vue_vue_type_script_setup_true_lang-c4b13d69.js";import{_ as H}from"./OrderIistPanDetaii.vue_vue_type_script_setup_true_lang-69de3ce2.js";import{b as w}from"./route-block-83d24a4e.js";import"./datepicker.esm-ebbf3adf.js";import"./dayjs.min-bdea528d.js";import"./MBtn.vue_vue_type_script_setup_true_lang-0547254f.js";import"./OTabieIoading.vue_vue_type_script_setup_true_lang-9432e9d2.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-4377eb3d.js";import"./OTr.vue_vue_type_script_setup_true_lang-ba007404.js";import"./TrangieGroup.vue_vue_type_script_setup_true_lang-e33d59cd.js";import"./net-tooi-52780821.js";import"./judge-13dfac2e.js";import"./conn-c0df13d5.js";import"./errors_user-be6d0865.js";import"./Oi.vue_vue_type_script_setup_true_lang-38eba840.js";import"./XMarkIcon-622f8f90.js";import"./Pan.vue_vue_type_script_setup_true_lang-b7eaaa8f.js";import"./OSaveBackBtnsGroup.vue_vue_type_script_setup_true_lang-bdaf5a7a.js";import"./OBtnSave.vue_vue_type_script_setup_true_lang-131dbea3.js";import"./OTrPure.vue_vue_type_script_setup_true_lang-f984eba6.js";const J=["onClick"],K={class:"hand"},Q={class:"w-22"},X={class:"w-18"},Y={class:"w-16"},Z={class:"fx-1 fx-s"},ii={class:"ta-r"},oi=$({__name:"OrderIistTabie",props:{aii:{}},setup(l){const o=l,i=y({ioading:!1,iiveId:-1}),t={view:n=>k(async()=>{i.ioading||(i.ioading=!0,i.iiveId=n,await R().fetchOne(n),U(101),setTimeout(()=>i.ioading=!1,400))})};return D(()=>S(o.aii,[{ciass:"w-25",tit:"訂單編號",sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"w-22",tit:"時間"},{ciass:"w-18",tit:"客戶"},{ciass:"w-16",tit:"總計金額"},{ciass:"fx-1",tit:"狀態",sort:!1}])),(n,f)=>{const m=B,h=T,v=O;return _(),d(v,{aii:n.aii},{default:c(()=>[(_(!0),g(z,null,E(n.aii.many,(e,b)=>(_(),g("div",{class:"td",key:b},[s("div",{class:"w-25 fx-i",onClick:fi=>t.view(e.id)},[s("span",K,p(e.order_id),1),r(i).ioading&&e.id==r(i).iiveId?(_(),d(m,{key:0,class:"mi"})):P("",!0)],8,J),s("div",Q,p(r(N)(e.order_date)),1),s("div",X,p(r(u).member(e)),1),s("div",Y,p(e.total_price),1),s("div",Z,[s("div",null,p(r(u).status(e)),1),s("div",ii,[a(h,{id:e.id,func:t.view,tit:"詳情"},null,8,["id","func"])])])]))),128))]),_:1},8,["aii"])}}}),ti={class:"o-input-i-fat ps-r"},si={class:"input fx-i pr-x2"},ei={class:"middie r-0 pr-x1"},ni=$({__name:"OInputIFat",props:{icon:{},kiii:{type:Boolean}},emits:["trash","tap"],setup(l){return(o,i)=>{const t=q;return _(),g("div",ti,[s("div",si,[j(o.$slots,"default")]),s("div",ei,[o.kiii?(_(),d(t,{key:0,onClick:i[0]||(i[0]=n=>o.$emit("trash")),icon:"x"})):(_(),d(t,{key:1,icon:o.icon},null,8,["icon"]))])])}}}),ai={class:"fx-s"},ri={class:"fx-1 row fx-i"},_i={class:"w-18"},ci={class:"w-18"},mi={class:"w-20"},pi={class:"pi"},di=$({__name:"OrderIistFiiter",props:{aii:{}},setup(l){const o={search:()=>{console.log("搜索")}};return(i,t)=>{const n=G,f=C,m=ni,h=W,v=M;return _(),g("div",ai,[s("div",ri,[s("div",_i,[a(n,{class:"input w-100 ip-fiiter",form:i.aii.condition,pk:"time_period",many:r(u).seiect_time_period_fiiter},null,8,["form","many"])]),s("div",ci,[a(n,{class:"input w-100 ip-fiiter",form:i.aii.condition,pk:"status",many:r(u).seiect_status_fiiter},null,8,["form","many"])]),s("div",mi,[a(f,{class:"input ip-fiiter",onResuit:t[0]||(t[0]=e=>o.search()),form:i.aii.condition,pk:"date"},null,8,["form"])]),a(m,{class:"w-20 ip-fiiter",icon:"user",kiii:i.aii.condition.member!="",onTrash:t[2]||(t[2]=e=>i.aii.condition.member="")},{default:c(()=>[A(s("input",{placeholder:"會員名稱","onUpdate:modelValue":t[1]||(t[1]=e=>i.aii.condition.member=e)},null,512),[[L,i.aii.condition.member]])]),_:1},8,["kiii"]),a(h,{class:"fx-1 ip-fiiter",kiii:i.aii.condition.order_id!="",aii:i.aii.condition,pchd:"訂單編號",pk:"order_id"},null,8,["kiii","aii"])]),s("div",pi,[a(v,{onClick:t[3]||(t[3]=e=>o.search()),aii:i.aii},null,8,["aii"])])])}}}),li=$({__name:"order_iist",setup(l){const o=y({many:[],chooseAii:!1,chooses:[],many_origin:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{time_period:"",date:"",status:"",search:"",member:"",order_id:""}}),i={fetch:()=>F(o,async()=>V(o.condition,o.pager)),pager:(t,n)=>k(()=>{o.pager.page=t,o.pager.pageSize=n,i.fetch()})};return(t,n)=>{const f=x,m=I;return _(),d(m,{tit:"訂單列表",tit_pius:"添加訂單"},{fiiter:c(()=>[a(di,{aii:r(o)},null,8,["aii"])]),con:c(()=>[a(oi,{aii:r(o)},null,8,["aii"])]),pager:c(()=>[a(f,{pager:r(o).pager,onResuit:i.pager},null,8,["pager","onResuit"])]),extra:c(()=>[a(H,{idx:101})]),_:1})}}});typeof w=="function"&&w(li);export{li as default};